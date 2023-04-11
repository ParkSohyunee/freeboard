import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import * as S from "./LoginStyles";
import { useForm } from "react-hook-form";

interface ISignupForm {
  email: string;
  password: string;
}

export default function Login() {
  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit } = useForm<ISignupForm>();
  const onClickLogin = (data: ISignupForm) => {
    console.log(data);
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
