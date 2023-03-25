import { gql, useMutation, useQuery } from "@apollo/client";
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

const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export default function BoardCommentList() {
  const router = useRouter();
  // console.log(router);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // console.log(data); // {fetchBoardComments: Array(10)}
  // console.log(data?.fetchBoardComments); // [{…}, {…}, ..., {…}]

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async (event) => {
    const password = prompt("비밀번호를 입력해 주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <BoardCommentListUI
        data={data}
        onClickDeleteComment={onClickDeleteComment}
      />
    </>
  );
}
