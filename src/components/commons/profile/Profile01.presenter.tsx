import * as S from "./Profile01Styles";
import { IProfileUIProps } from "./Profile01.types";
import Head from "next/head";

export default function Profile01UI(props: IProfileUIProps) {
  return (
    <>
      {/* <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head> */}
      <S.Wrapper>
        <S.Profile>
          <S.GiftIcon />
          <S.MyIcon>
            <S.Item>{props.data?.fetchUserLoggedIn.name}</S.Item>
            <S.Point>
              <S.Item>{props.data?.fetchUserLoggedIn.userPoint?.amount}</S.Item>
              <S.Item>p</S.Item>
            </S.Point>
          </S.MyIcon>
        </S.Profile>
        <S.Main onClick={props.onClickOpen}>
          {/* <S.Mymodal open={props.isOpen} maskClosable={false} footer={null}>
            <S.ModalWrapper>
              <S.PaymentIcon src="/payment/pig-image.png" />
              <S.PaymentTitle>충전하실 금액을 선택해주세요!</S.PaymentTitle>
              <S.PaymentOption id="point" defaultValue="default">
                <option disabled value="default">
                  포인트선택
                </option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="2000">2,000</option>
                <option value="5000">5,000</option>
              </S.PaymentOption>
              <S.PaymentBtn onClick={props.onClickPayment}>
                충전하기
              </S.PaymentBtn>
            </S.ModalWrapper>
          </S.Mymodal> */}
          <S.PointIcon />
          <S.PointButton>충전하기</S.PointButton>
        </S.Main>
      </S.Wrapper>
    </>
  );
}
