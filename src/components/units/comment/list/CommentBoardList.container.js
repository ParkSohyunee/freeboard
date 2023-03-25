import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./CommentBoardList.presenter";

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function BoardCommentList() {
  const router = useRouter();
  // console.log(router.query.boardId);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data); // {fetchBoardComments: Array(10)}
  console.log(data?.fetchBoardComments); // [{…}, {…}, ..., {…}]

  return (
    <>
      <BoardCommentListUI data={data} />
    </>
  );
}
