import { useState } from "react";
import { getDate } from "../../../../../commons/utils/date";

import * as S from "./ProductsCommentList.styles";
import { ICommentListItemsProps } from "./ProductsCommentList.types";
import ProductsCommentRegister from "../register/ProductsCommentRegister.contatiner";

export default function ProductsCommentListItems(
  props: ICommentListItemsProps
) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdateComment = () => {
    setIsEdit(true);
  };

  return (
    <S.Wrapper key={props.el._id}>
      {!isEdit && (
        <>
          <S.CommentBox>
            <S.Avatar src="/BoardComment/avatar.png/" />
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
                // id={props.el._id}
                // onClick={onClickDeleteCommentModal}
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
