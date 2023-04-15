import { IQuery } from "../../../commons/types/generated/types";
import * as S from "./MypageStyles";

interface IMypageUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export default function MyPageUI(props: IMypageUIProps) {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Title>내 프로필</S.Title>
        <S.UserIcon />
        <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
        <div>
          <img />
          <span>{props.data?.fetchUserLoggedIn.userPoint?.amount}</span>
        </div>
        <S.MenuWrapper>
          <S.Menu>
            <img />
            <span>내 장터</span>
          </S.Menu>
          <S.Menu>
            <img />
            <span>내 포인트</span>
          </S.Menu>
          <S.Menu>
            <img />
            <span>내 프로필</span>
          </S.Menu>
        </S.MenuWrapper>
      </S.ProfileWrapper>
      <S.PasswordWrapper>
        <S.Title>비밀번호 변경</S.Title>
        <S.InputWrapper>
          <S.SubTitle>현재 비밀번호</S.SubTitle>
          <S.PasswordInput
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.SubTitle>새 비밀번호</S.SubTitle>
          <S.PasswordInput
            type="password"
            placeholder="새 비밀번호를 입력해 주세요."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.SubTitle>새 비밀번호 확인</S.SubTitle>
          <S.PasswordInput
            type="password"
            placeholder="새 비밀번호를 확인해 주세요."
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.MypageButton>비밀번호 변경</S.MypageButton>
        </S.ButtonWrapper>
      </S.PasswordWrapper>
    </S.Wrapper>
  );
}
