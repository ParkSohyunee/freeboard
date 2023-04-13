import { useMutation } from "@apollo/client";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import { ILoginForm } from "./Login.types";
import * as S from "./LoginStyles";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "./Login.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function Login() {
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit } = useForm<ILoginForm>();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data: ILoginForm) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result); // {data: {…}}

      router.push("/boards");

      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({
          content: "로그인에 실패하였습니다. 다시 시도해 주세요.",
        });
        return;
      }
      setAccessToken(accessToken);

      console.log(accessToken);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(onClickLogin)}>
        <S.Title>로그인</S.Title>
        {/* <LoginWithKakao>카카오로 시작하기</LoginWithKakao>
        <LoginWithNaver>네이버로 시작하기</LoginWithNaver> */}
        {/* <UnderLine>또는</UnderLine> */}
        <S.InputInfo
          type="text"
          placeholder="아이디(이메일)"
          {...register("email")}
        />
        <S.InputInfo
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <S.IdCheckbox>아이디저장</S.IdCheckbox>
        <S.LoginWithEmail>메일로 로그인</S.LoginWithEmail>
        <S.LoginOption>
          <S.OptionBtn>비회원 주문조회</S.OptionBtn>
          <S.OptionBtn onClick={onClickMoveToPage("/signup")}>
            메일로 가입하기
          </S.OptionBtn>
        </S.LoginOption>
      </S.Wrapper>
    </>
  );
}
