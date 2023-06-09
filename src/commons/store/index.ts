import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

// 변수
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// 함수
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken(); // 또는 .then
    return newAccessToken;
  },
});

// refreshToken 관련 로직 함수를 useEffect로 apollo 셋팅페이지와 로그인 여부 체크가 필요한 페이지에서
// 각각 호출하다보니 페이지 새로고침시 같은 함수가 2번 호출이 됨을 발견 (_app.tsx 와 해당페이지) => 기능은 동작하지만 비효율
// 따라서, recoil로 함수를 저장하고 _app.tsx에서 호출하면 결과를 같이 공유
