import { MouseEvent, useState } from "react";
import Script from "next/script";
import { Modal, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";

import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../dropDownMenu/DropdownMenu.queries";
import { IPointChargeProps } from "./PointCharge.types";
import * as S from "./PointChargeStyles";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./PointCharge.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointCharge(props: IPointChargeProps) {
  const [point, setPoint] = useState(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onClickShowOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  const onClickSelectPoint = (event: MouseEvent<HTMLLIElement>) => {
    setPoint(Number(event.currentTarget.id));
    setIsOptionsOpen((prev) => !prev);
  };

  // ** 포인트 결제
  const onClickPayment = () => {
    if (point === 0) {
      Modal.warning({ content: "충전할 금액을 선택해주세요." });
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "포인트충전",
        amount: point,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/", // 모바일 결제시 돌아갈 url
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPoint({
            variables: { impUid: rsp.imp_uid },
            refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
          });
          message.success({ content: "포인트 충전이 완료되었습니다." });
        } else {
          Modal.info({ content: "결제가 취소되었습니다. 다시 시도해주세요." });
        }
        setPoint(0);
      }
    );
  };

  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />

      <S.ModalWrapper>
        <S.Icon src="/payment/pig-image.png" />
        <S.Title>충전하실 금액을 선택해주세요!</S.Title>
        <S.PointSelectContainer onClick={onClickShowOptions}>
          {point !== 0 ? `${point}원` : "포인트 선택"}
          <DownOutlined />
        </S.PointSelectContainer>
        <S.PointOptions isOptionsOpen={isOptionsOpen}>
          <S.PointOption id="100" onClick={onClickSelectPoint}>
            100원
          </S.PointOption>
          <S.PointOption id="1000" onClick={onClickSelectPoint}>
            1,000원
          </S.PointOption>
          <S.PointOption id="5000" onClick={onClickSelectPoint}>
            5,000원
          </S.PointOption>
          <S.PointOption id="10000" onClick={onClickSelectPoint}>
            10,000원
          </S.PointOption>
        </S.PointOptions>
        <S.PointChargeBtn onClick={onClickPayment}>충전하기</S.PointChargeBtn>
      </S.ModalWrapper>
    </>
  );
}
