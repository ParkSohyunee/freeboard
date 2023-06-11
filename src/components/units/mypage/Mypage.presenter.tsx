import * as S from "./MypageStyles";
import Script from "next/script";
import { IMypageUIProps } from "./Mypage.types";
import { UserOutlined } from "@ant-design/icons";

export default function MyPageUI(props: IMypageUIProps) {
  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <S.Wrapper>
        <S.ProfileWrapper>
          <S.Title>내 프로필</S.Title>
          <S.UserIcon shape="square" size={64} icon={<UserOutlined />} />
          <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
          <S.PaymentOption
            id="point"
            defaultValue="default"
            onChange={props.onChangePoint}
          >
            <option disabled value="default">
              포인트선택
            </option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="2000">2,000</option>
            <option value="5000">5,000</option>
          </S.PaymentOption>
          <S.MypageButton onClick={props.onClickPayment}>
            충전하기
          </S.MypageButton>
          <div>
            <img />
            <span>{props.data?.fetchUserLoggedIn.userPoint?.amount}</span>
            <span>p</span>
          </div>
          <S.MenuWrapper>
            {/* <S.Menu>
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
            </S.Menu> */}
          </S.MenuWrapper>
        </S.ProfileWrapper>
        <S.PasswordWrapper>
          <S.Title>비밀번호 변경</S.Title>
          <S.InputWrapper>
            <S.SubTitle>현재 비밀번호</S.SubTitle>
            <S.PasswordInput
              type="password"
              placeholder="현재 비밀번호를 입력해 주세요."
              onChange={props.onchangeMyPassword}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SubTitle>새 비밀번호</S.SubTitle>
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호를 입력해 주세요."
              onChange={props.onchangeNewPassword}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.SubTitle>새 비밀번호 확인</S.SubTitle>
            <S.PasswordInput
              type="password"
              placeholder="새 비밀번호를 확인해 주세요."
              onChange={props.onchangeConfirmPassword}
            />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.MypageButton onClick={props.onClickResetPassword}>
              비밀번호 변경
            </S.MypageButton>
          </S.ButtonWrapper>
        </S.PasswordWrapper>
      </S.Wrapper>
    </>
  );
}
