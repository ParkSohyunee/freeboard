import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM_QUESTION } from "./ProductsCommentRegister.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as S from "./ProductsCommentRegister.styles";
import { ICommentForm } from "./ProductsCommentRegister.types";
import { Button, Modal } from "antd";
import { FETCH_USEDITEM_QUESTIONS } from "../list/ProductsCommentList.queries";

export default function ProductsCommentRegister() {
  const router = useRouter();
  // console.log(router.query.productId);

  // prettier-ignore
  const { register, handleSubmit, formState : { errors, isValid } } = useForm<ICommentForm>();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const onclickCommentRegister = async (data: ICommentForm) => {
    const result = await createUseditemQuestion({
      variables: {
        useditemId: String(router.query.productId),
        createUseditemQuestionInput: { contents: data.contents },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: String(router.query.productId) },
        },
      ],
    });
    // console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onclickCommentRegister)}>
        <S.ContentsInput
          {...register("contents", { required: true, maxLength: 100 })}
          placeholder="상품에 대한 질문을 댓글로 입력해주세요."
        />
        {errors.contents && errors.contents.type === "required" && (
          <span>댓글을 입력해주세요.</span>
        )}
        <S.ContentsBottom>
          <div></div>
          <S.SubmitBtn type="submit">등록하기</S.SubmitBtn>
        </S.ContentsBottom>
      </form>
    </>
  );
}
