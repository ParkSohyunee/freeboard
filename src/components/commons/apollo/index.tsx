import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSettingPage(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const getNewAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 프리랜더링 무시, 브라우저에서만 실행
  useEffect(() => {
    // refreshToken 사용전 기존 로컬스토리지 저장 방식
    // 새로고침시 로컬스토리지에 토큰이 있다면, recoil 변수에 그 값을 저장헤서 마치 로그인이 유지되는 것처럼
    // const result = localStorage.getItem("accessToken");

    // 쿠키에 저장되어 있는 refreshToken을 document.cookie로 가져올 수 없음 => 왜? 보안이 강화되어 있음
    // refreshToken 사용후 새로고침시 토큰 유지 방식
    void getNewAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // 에러링크 추가
  // operation 옵션은 에러를 만든 graphQL 세부정보, 즉 쿼리
  // return forward(operation)호출 하면 작업을 재시도
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 2. 에러가 토큰만료 에러이면
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 변경된 토큰을 recoil에 다시 저장
              setAccessToken(newAccessToken ?? "");

              // 3. 기존 headers의 정보를 가져오고(getContext), 새로운 토큰으로 headers 다시 저장(setContext)
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`, // 가장 밑에 있는 key가 덮어씌워 짐
                },
              });
            })
            // 4. 재발급 받은 accessToken으로 수정한 쿼리 재요청하기
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요한 정보들 (ex. 쿠키)을 포함시키는 옵션
  });

  const client = new ApolloClient({
    // uri: "http://backendonline.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
  );
}

// - yarn add apollo-upload-client
// - yarn add @types/apollo-upload-client --dev
