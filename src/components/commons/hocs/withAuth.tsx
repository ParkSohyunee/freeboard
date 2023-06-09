// higher order component (hoc)

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { restoreAccessTokenLoadable } from "../../../commons/store";
import { useRecoilValueLoadable } from "recoil";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
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
    void getNewAccessToken.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.warning({ content: "로그인 후 이용가능합니다." });
        router.push("/login");
      }
    });
  }, []);

  return <Component {...props} />;
};
