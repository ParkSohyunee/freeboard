import { Rate } from "antd";
import { IBoardCommentListProps } from "./CommentBoardList.types";
import * as S from "./CommentBoardListStyles";

export default function BoardCommentListUI(props: IBoardCommentListProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper key={el._id}>
          <S.CommentBox>
            <S.Avatar src="/BoardComment/avatar.png/" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <Rate disabled defaultValue={el.rating} />
              </S.WriterWrapper>
              <S.ContentsBox>{el.contents}</S.ContentsBox>
            </S.MainWrapper>
            <S.IconBox>
              <S.UpdateIcon src="/BoardComment/option_update_icon.png/" />
              <S.DeleteIcon
                id={el._id}
                onClick={props.onClickDeleteComment}
                src="/BoardComment/option_delete_icon.png"
              />
            </S.IconBox>
          </S.CommentBox>
          <S.DateBox>{el.createdAt}</S.DateBox>
        </S.Wrapper>
      ))}
    </>
  );
}
