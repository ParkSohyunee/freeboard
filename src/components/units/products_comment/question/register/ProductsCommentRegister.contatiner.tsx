import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./ProductsCommentRegister.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import * as S from "./ProductsCommentRegister.styles";
import {
  ICommentForm,
  ICommentRegisterProps,
} from "./ProductsCommentRegister.types";
import { FETCH_USEDITEM_QUESTIONS } from "../list/ProductsCommentList.queries";

export default function ProductsCommentRegister(props: ICommentRegisterProps) {
  const router = useRouter();

  // prettier-ignore
  const { register, handleSubmit, formState : { errors }, reset} = useForm<ICommentForm>();

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

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
    // 등록후 state를 빈값으로 변경 (react-hook-form 의 reset 메소드)
    reset();
  };

  const onClickCommentUpdate = async (data: ICommentForm) => {
    const result = await updateUseditemQuestion({
      variables: {
        useditemQuestionId: String(props.el?._id),
        updateUseditemQuestionInput: { contents: data.contents },
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: String(router.query.productId) },
        },
      ],
    });
    // 수정하기 클릭하면 isEdit가 원래 false인 상태로 돌아가야 함
    // setIseEdit를 props로 넘겨주고 그 값을 바꿔줌으로써 부모의 state가 변경됨
    props.setIsEdit?.(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(
          props.isEdit ? onClickCommentUpdate : onclickCommentRegister
        )}
      >
        <S.ContentsInput
          defaultValue={props.el?.contents ?? ""}
          {...register("contents", { required: true, maxLength: 100 })}
          placeholder="상품에 대한 질문을 댓글로 입력해주세요."
        />
        {errors.contents && errors.contents.type === "required" && (
          <span>댓글을 입력해주세요.</span>
        )}
        <S.ContentsBottom>
          <div></div>
          <S.SubmitBtn type="submit">
            {props.isEdit ? "수정하기" : "문의하기"}
          </S.SubmitBtn>
        </S.ContentsBottom>
      </form>
    </>
  );
}
