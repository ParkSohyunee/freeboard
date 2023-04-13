// higher order component (hoc)

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  // 보다 먼저 실행되는 컴포넌트, 여기서 로그인 여부 체크
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.warning({ content: "로그인 후 이용가능합니다." });
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
