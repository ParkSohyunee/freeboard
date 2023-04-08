import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./CommentBoardList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentBoardList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  console.log(data); // {fetchBoardComments: Array(10)}
  console.log(data?.fetchBoardComments); // [{…}, {…}, ..., {…}]
  console.log(data?.fetchBoardComments.length);

  const onLoadMore = () => {
    // 만약 data가 없다면?
    if (data === undefined) return;

    fetchMore({
      variables: {
        boardId: router.query.boardId,
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      // variables로 page만 넣었더니 댓글 무한양산 오류, FETCH_BOARD_COMMENTS에는 boardId가 반드시 변수로 들어가야 한다!

      updateQuery: (prev, { fetchMoreResult }) => {
        // fetchMoreResult.fetchBoards가 없다면(새로운 목록 없음!)
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        // fetchMoreResult.fetchBoards가 있다면
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <BoardCommentListUI data={data} onLoadMore={onLoadMore} />
    </>
  );
}
