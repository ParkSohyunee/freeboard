import { useForm } from "react-hook-form";
import * as S from "./SignupStyles";

interface ISignupForm {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const { register, handleSubmit } = useForm<ISignupForm>();

  const onClickSignUp = (data: ISignupForm) => {
    console.log(data);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onClickSignUp)}>
      <S.Title>회원정보 입력</S.Title>
      <S.InnerWrapper>
        <S.SubTitle>* 이름</S.SubTitle>
        <S.InputTitle
          type="text"
          placeholder="한글 이름을 입력해주세요."
          {...register("name")}
        />
      </S.InnerWrapper>
      <S.InnerWrapper>
        <S.SubTitle>* 이메일</S.SubTitle>
        <S.InputEmail
          type="text"
          placeholder="example@email.com"
          {...register("email")}
        />
      </S.InnerWrapper>
      <S.InnerPasswordWrapper>
        <S.SubTitle>* 비밀번호</S.SubTitle>
        <div>
          <S.InputPassword
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
          />
          <S.InputNotice>
            *영어대소문자, 숫자, 특수문자(!@#$%&*?)를 조합하여 6~12자 이내로
            만들어주세요.
          </S.InputNotice>
        </div>
      </S.InnerPasswordWrapper>

      <S.ButtonSignUP>가입하기</S.ButtonSignUP>
    </S.Wrapper>
  );
}
