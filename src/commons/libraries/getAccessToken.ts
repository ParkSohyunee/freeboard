import { GraphQLClient, gql } from "graphql-request";
import { IMutation } from "../types/generated/types";

// accessToken을 재발급 받아오는 쿼리
const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  // 2-1. refreshToken으로 accessToken 재발급 받기
  // apollo setting 전에 useQuery, useMutation을 날릴 수 없기에 => graphql-request
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      // 중요한 정보들 (ex. 쿠키)을 포함시키는 옵션 => restore API 날릴 때 쿠키가 추가 됨 => Application에 쿠키 저장
      { credentials: "include" }
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    console.log(result);

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
