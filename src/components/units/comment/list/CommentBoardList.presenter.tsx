import { Modal, Rate } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardCommentListProps } from "./CommentBoardList.types";
import * as S from "./CommentBoardListStyles";

export default function BoardCommentListUI(props: IBoardCommentListProps) {
  return (
    <>
      {props.isOpenDeleteModal && (
        <Modal
          open={props.isOpenDeleteModal}
          onOk={props.onClickDeleteComment}
          onCancel={props.onToggleModal}
        >
          <S.PwdInput
            type="password"
            placeholder="비밀번호를 입력하시면 댓글이 삭제됩니다."
            onChange={props.onChangeDeletePassword}
          />
        </Modal>
      )}
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true} // 다음페이지 여부 --> 있으면 loadMore 실행
        useWindow={false}
      >
        {/* {items} // <-- This is the content you want to load */}
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
                  onClick={props.onClickDeleteCommentModal}
                  src="/BoardComment/option_delete_icon.png"
                />
              </S.IconBox>
            </S.CommentBox>
            <S.DateBox>{el.createdAt}</S.DateBox>
          </S.Wrapper>
        ))}
      </InfiniteScroll>
    </>
  );
}
