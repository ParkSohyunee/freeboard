import { useMutation, useQuery } from "@apollo/client";
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
import { MouseEvent, ChangeEvent } from "react";
import { useState } from "react";

export default function BoardCommentList() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

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

  const onClickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    // const password = prompt("비밀번호를 입력해 주세요.");

    if (!(event.target instanceof HTMLElement)) return;
    // console.log(event.currentTarget.id);
    // console.log(event.target.id);

    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardCommentId,
          // boardCommentId: event.currentTarget.id,
          // Cast to ObjectId failed for value "" (type string) at path "_id" for model "BoardComment"
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      onToggleModal();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDeleteCommentModal = (event: MouseEvent<HTMLImageElement>) => {
    // if (!(event.target instanceof HTMLImageElement)) return;
    // setMyBoardCommentId(event.target.id);

    // Property 'id' does not exist on type 'EventTarget'.ts(2339)
    // 이미지등은 event.target.id가 없을수도 있으므로 currentTarget으로 지정

    setMyBoardCommentId(event.currentTarget.id);

    // setIsOpenDeleteModal(true);
    onToggleModal();
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onToggleModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  return (
    <>
      <BoardCommentListUI
        data={data}
        isOpenDeleteModal={isOpenDeleteModal}
        onClickDeleteComment={onClickDeleteComment}
        onClickDeleteCommentModal={onClickDeleteCommentModal}
        onChangeDeletePassword={onChangeDeletePassword}
        onToggleModal={onToggleModal}
      />
    </>
  );
}
