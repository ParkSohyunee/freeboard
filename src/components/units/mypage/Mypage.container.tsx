import { useMutation, useQuery } from "@apollo/client";
import MyPageUI from "./Mypage.presenter";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationResetUserPasswordArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
  RESET_USER_PASSWORD,
} from "./Mypage.queries";
// import { useRouter } from "next/router";
import { Modal, message } from "antd";
import { ChangeEvent, useState } from "react";
import * as yup from "yup";

declare const window: typeof globalThis & {
  IMP: any;
};

const schema = yup.object({
  myPassword: yup.string().required("현재 비밀번호를 입력해 주세요."),
  newPassword: yup
    .string()
    .required("새로운 비밀번호를 입력해 주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/,
      "비밀번호는 영어대소문자, 숫자, 특수문자를 조합해 주세요. (6~12자)"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "비밀번호가 다릅니다.")
    .required("비밀번호를 한번 더 입력해 주세요."),
});

export default function Mypage() {
  // const router = useRouter();
  const [myPassword, setMyPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [point, setPoint] = useState(0);

  // 1. 페이지 접속하면 자동으로 data에 로그인정보 받아지고(data는 글로벌스테이트에 저장), 리렌더링됨
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭시 data에 받아지고(data는 글로벌스테이트에 저장), 리렌더링됨
  // const [함수이름, {data}] = useLazyQuery(FETCH_USER_LOGGED_IN)

  // 3. axios처럼 사용하는 방법(data는 글로벌스테이트에 저장)
  // const client = useApolloClient()
  // client.query() <==> axios.get() 과 동일

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const [createPoint] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onchangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onchangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const onchangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

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

  const onClickResetPassword = async () => {
    // yup 으로 유효성검사 하는 방법
    try {
      await schema.validate({
        myPassword,
        newPassword,
        confirmPassword,
      });
    } catch (error) {
      if (error instanceof Error) {
        message.warning(error.message);
        return;
      }
    }

    const result = await resetUserPassword({
      variables: { password: confirmPassword },
    });

    if (result.data?.resetUserPassword) {
      message.success({ content: "비밀번호가 변경되었습니다." });
    }
  };

  return (
    <MyPageUI
      data={data}
      onchangeMyPassword={onchangeMyPassword}
      onchangeNewPassword={onchangeNewPassword}
      onchangeConfirmPassword={onchangeConfirmPassword}
      onChangePoint={onChangePoint}
      onClickPayment={onClickPayment}
      onClickResetPassword={onClickResetPassword}
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
