import { useMutation, useQuery } from "@apollo/client";
import MyPageUI from "./Mypage.presenter";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Mypage.queries";
// import { useRouter } from "next/router";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Mypage() {
  // const router = useRouter();
  const [point, setPoint] = useState(0);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onChangePoint = (event: ChangeEvent<HTMLSelectElement>) => {
    setPoint(Number(event.target.value));
  };

  const onClickPayment = () => {
    if (point === 0) {
      Modal.warning({ content: "충전할 금액을 선택해주세요." });
      return;
    }
    console.log(point);

    const IMP = window.IMP;
    IMP.init("imp49910675"); // imp06164883

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        // merchant_uid: , // 고유 값
        name: "포인트충전",
        amount: point,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/login/mypage", // 모바일 결제시 돌아갈 url
      },
      async (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);

          await createPoint({
            variables: { impUid: rsp.imp_uid },
            refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
            // refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
            // update(cache, { data }) {
            //   cache.modify({
            //     fields: {
            //       fetchUserLoggedIn: (prev) => {
            //         return [data?.createPointTransactionOfLoading, prev];
            //       },
            //     },
            //   });
            // },
          });
        } else {
          Modal.info({ content: "결제가 취소되었습니다. 다시 시도해주세요." });
        }
      }
    );
  };

  return (
    <MyPageUI
      data={data}
      onChangePoint={onChangePoint}
      onClickPayment={onClickPayment}
    />
  );
}

// {success: true,
//   imp_uid: 'imp_011861703146',
//   pay_method: 'card',
//   merchant_uid: 'nobody_1682947861615',
//   name: '포인트충전', …}

// {data: {…}}
// data: createPointTransactionOfLoading:
// amount: 100
// balance: 100
// createdAt: "2023-05-01T13:32:51.964Z"
// impUid: "imp_011861703146"
// status: "충전"
// __typename: "PointTransaction"
// _id: "644fbf83aef9f000281baa29"
