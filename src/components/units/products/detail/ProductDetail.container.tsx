import { useMutation, useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import {
  CREATE_TRANSACTION,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  ToggleUseditemPick,
} from "./ProductDetail.queries";
import { message } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function ProductDetail() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: `${router.query.productId}` },
  });

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(ToggleUseditemPick);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [createTransaction] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_TRANSACTION);

  const onClickItemPick = async () => {
    const result = await toggleUseditemPick({
      variables: { useditemId: `${router.query.productId}` },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: `${router.query.productId}` },
        },
      ],
      //
      // update(cache, { data }) {
      //   cache.modify({
      //     fields: {
      //       fetchUseditem: (prev) => {
      //         return [data?.toggleUseditemPick, ...prev];
      //       },
      //     },
      //   });
      // },
    });
  };

  const onClickDeleteItem = async () => {
    if (typeof router.query.productId !== "string") return;
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productId },
        refetchQueries: [{ query: FETCH_USEDITEM }],
      });
      message.success({ content: "상품이 삭제되었습니다." });
      router.push("/products");
    } catch (error) {
      if (error instanceof Error) message.error({ content: error.message });
    }
  };

  const onClickBuyUseditem = async () => {
    if (typeof router.query.productId !== "string") return;
    try {
      const result = await createTransaction({
        variables: { useritemId: router.query.productId },
      });
      console.log(result);
      message.success({ content: "상품구매를 완료하였습니다." });
      router.push("/products");
    } catch (error) {
      if (error instanceof Error) message.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickItemPick={onClickItemPick}
        onClickDeleteItem={onClickDeleteItem}
        onClickBuyUseditem={onClickBuyUseditem}
        path={String(router.query.productId)}
      />
    </>
  );
}
