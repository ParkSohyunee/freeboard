import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTIONS } from "./ProductsCommentList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import ProductsCommentListItems from "./ProductsCommentListItems";

export default function ProductsCommentList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productId) },
  });

  return (
    <>
      {data?.fetchUseditemQuestions.map((el) => (
        <ProductsCommentListItems key={el._id} el={el} />
      ))}
    </>
  );
}
