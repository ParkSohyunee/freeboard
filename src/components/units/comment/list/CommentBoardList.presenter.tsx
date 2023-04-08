import InfiniteScroll from "react-infinite-scroller";
import { IBoardCommentListProps } from "./CommentBoardList.types";
import CommentBoardListItems from "./CommentBoardListItems";

export default function BoardCommentListUI(props: IBoardCommentListProps) {
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true} // 다음페이지 여부 --> 있으면 loadMore 실행
        useWindow={false}
      >
        {/* {items} // <-- This is the content you want to load */}
        {props.data?.fetchBoardComments.map((el) => (
          <CommentBoardListItems key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
