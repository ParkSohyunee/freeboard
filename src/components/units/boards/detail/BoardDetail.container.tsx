import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../list/BoardList.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { message } from "antd";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") return;
    await deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    message.success({ content: "게시물이 정상적으로 삭제되었습니다." });
    router.push("/");
  };

  const onClickMoveToList = () => {
    router.push("/");
  };

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLikeCount = async () => {
    if (typeof router.query.boardId !== "string") return;
    await likeBoard({
      variables: { boardId: router.query.boardId },
      optimisticResponse: {
        likeBoard: Number(data?.fetchBoard.likeCount) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          data: {
            fetchBoard: {
              __typename: "Board",
              _id: router.query.boardId,
              likeCount: data?.likeBoard,
            },
          },
          variables: { boardId: router.query.boardId },
        });
      },
    });
  };

  const onClickDislikeCount = async () => {
    if (typeof router.query.boardId !== "string") return;
    await dislikeBoard({
      variables: { boardId: router.query.boardId },
      optimisticResponse: {
        dislikeBoard: Number(data?.fetchBoard.dislikeCount) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          data: {
            fetchBoard: {
              __typename: "Board",
              _id: router.query.boardId,
              dislikeCount: data?.dislikeBoard,
            },
          },
          variables: { boardId: router.query.boardId },
        });
      },
    });
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickLikeCount={onClickLikeCount}
      onClickDislikeCount={onClickDislikeCount}
    />
  );
}
