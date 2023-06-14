// higher order component (hoc)

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const getNewAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 로그인 체크(refreshToken 이전)
  // 보다 먼저 실행되는 컴포넌트, 여기서 로그인 여부 체크
  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     Modal.warning({ content: "로그인 후 이용가능합니다." });
  //     router.push("/login");
  //   }
  // }, []);

  // 로그인 체크(refreshToken 이후)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (!newAccessToken) {
  //       Modal.warning({ content: "로그인 후 이용가능합니다." });
  //       router.push("/login");
  //     }
  //   });
  // }, []);

  // 로그인 체크(refreshToken 이후) => 함수 공유 방법

  useEffect(() => {
    // 로그인시 accessToken이 저장되어 있고, 헤더에 Bearer로 API 잘 요청하는데도 에러나는 상황 해결!
    // 로그인할 때 받아온 accessToken이 아직 유효하다면(=recoil에 저장되어 있다면),
    // 아래 로직은 accessToken이 만료될 때 로직이므로 불필요 => return
    if (accessToken) return;

    void getNewAccessToken.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.warning({ content: "로그인 후 이용가능합니다." });
        router.push("/login");
      }
    });
  }, []);

  return <Component {...props} />;
};
