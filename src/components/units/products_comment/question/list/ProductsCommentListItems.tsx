import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { message } from "antd";

import { getDate } from "../../../../../commons/utils/date";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./ProductsCommentList.queries";
import * as S from "./ProductsCommentList.styles";
import { ICommentListItemsProps } from "./ProductsCommentList.types";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import ProductsCommentRegister from "../register/ProductsCommentRegister.contatiner";

export default function ProductsCommentListItems(
  props: ICommentListItemsProps
) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onClickUpdateComment = () => {
    setIsEdit(true);
  };

  const onClickDeleteComment = (useditemId: String) => () => {
    try {
      void deleteUseditemQuestion({
        variables: { useditemQuestionId: String(useditemId) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      message.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) message.error(error.message);
    }
  };

  return (
    <S.Wrapper key={props.el._id}>
      {!isEdit && (
        <>
          <S.CommentBox>
            <S.UserAvatar size="large">U</S.UserAvatar>
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.ContentsBox>{props.el.contents}</S.ContentsBox>
            </S.MainWrapper>
            <S.IconBox>
              <S.UpdateIcon
                onClick={onClickUpdateComment}
                src="/BoardComment/option_update_icon.png/"
              />
              <S.DeleteIcon
                id={props.el._id}
                onClick={onClickDeleteComment(props.el._id)}
                src="/BoardComment/option_delete_icon.png"
              />
            </S.IconBox>
          </S.CommentBox>
          <S.DateBox>{getDate(props.el.createdAt)}</S.DateBox>
        </>
      )}
      {isEdit && (
        <ProductsCommentRegister
          isEdit={isEdit}
          el={props.el}
          setIsEdit={setIsEdit}
        />
      )}
    </S.Wrapper>
  );
}
