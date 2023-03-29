import { from, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./CommentBoardList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentBoardList.queries";
import { MouseEvent } from "react";

export default function BoardCommentList() {
  const router = useRouter();
  // console.log(router);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  // console.log(data); // {fetchBoardComments: Array(10)}
  // console.log(data?.fetchBoardComments); // [{…}, {…}, ..., {…}]

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력해 주세요.");
    if (!(event.target instanceof HTMLImageElement)) return;
    // console.log(event.currentTarget.id);
    // console.log(event.target.id);

    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.currentTarget.id,
          // Property 'id' does not exist on type 'EventTarget'.ts(2339)
          // 이미지등은 event.target.id가 없을수도 있으므로 currentTarget으로 지정
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      console.log(error);
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
