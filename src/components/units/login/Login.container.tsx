import { useMutation } from "@apollo/client";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import { ILoginForm } from "./Login.types";
import * as S from "./LoginStyles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_USER, LOGIN_USER_EXAMPLE } from "./Login.queries";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식으로 입력해 주세요.")
    .required("이메일을 입력해 주세요."),
  password: yup.string().required("비밀번호를 입력해 주세요."),
});

export default function Login() {
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  // refresh 확인용 뮤테이션 => accessToken 유효기간이 5초
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);

  const { onClickMoveToPage } = useMoveToPage();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data: ILoginForm) => {
    try {
      // 1. 로그인해서 accessToken 받아오기
      const result = await loginUserExample({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;

      // 2. accessToken을 globalState에 저장하기
      if (!accessToken) {
        Modal.error({
          content: "로그인에 실패하였습니다. 다시 시도해 주세요.",
        });
        return;
      }
      setAccessToken(accessToken); // global state
      // localStorage.setItem("accessToken", accessToken); // refreshToken 사용으로 로컬스토리지 사용 x

      // 3. 로그인 성공 페이지로 이동하기
      router.push("/");
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
        <S.InputInfo
          type="text"
          placeholder="아이디(이메일)"
          {...register("email")}
        />
        <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        <S.InputInfo
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        <S.IdCheckbox>아이디저장</S.IdCheckbox>
        <S.LoginWithEmail isValid={isValid}>메일로 로그인</S.LoginWithEmail>
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
