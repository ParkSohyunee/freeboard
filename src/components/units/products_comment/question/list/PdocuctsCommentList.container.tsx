import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTIONS } from "./ProductsCommentList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import * as S from "./ProductsCommentList.styles";
import { getDate } from "../../../../../commons/utils/date";
import { useRouter } from "next/router";

export default function ProductsCommentList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.productId) },
  });

  console.log(data);

  return (
    <>
      {data?.fetchUseditemQuestions.map((el) => (
        <S.Wrapper key={el._id}>
          <S.CommentBox>
            <S.Avatar src="/BoardComment/avatar.png/" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.ContentsBox>{el.contents}</S.ContentsBox>
            </S.MainWrapper>
            <S.IconBox>
              <S.UpdateIcon
                // onClick={onClickUpdateComment}
                src="/BoardComment/option_update_icon.png/"
              />
              <S.DeleteIcon
                // id={props.el._id}
                // onClick={onClickDeleteCommentModal}
                src="/BoardComment/option_delete_icon.png"
              />
            </S.IconBox>
          </S.CommentBox>
          <S.DateBox>{getDate(el.createdAt)}</S.DateBox>
        </S.Wrapper>
      ))}
    </>
  );
}
