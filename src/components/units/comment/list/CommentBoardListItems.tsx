import { Modal, Rate } from "antd";
import {
  IBoardCommentListProps,
  ICommentBoardListItemsProps,
} from "./CommentBoardList.types";
import * as S from "./CommentBoardListStyles";
import BoardCommentRegister from "../register/CommentRegister.container";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentBoardList.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/utils/date";

export default function CommentBoardListItems(
  props: ICommentBoardListItemsProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async (event: MouseEvent<HTMLElement>) => {
    // const password = prompt("비밀번호를 입력해 주세요.");

    if (!(event.target instanceof HTMLElement)) return;
    // console.log(myBoardCommentId);

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
      if (error instanceof Error)
        Modal.warning({
          content: (
            <div>
              <p>비밀번호가 일치하지 않습니다.</p>
              <p>다시 입력해주세요.</p>
            </div>
          ),
        });
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

  const onClickUpdateComment = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          open={isOpenDeleteModal}
          onOk={onClickDeleteComment}
          onCancel={onToggleModal}
        >
          <S.PwdInput
            type="password"
            placeholder="비밀번호를 입력하시면 댓글이 삭제됩니다."
            onChange={onChangeDeletePassword}
          />
        </Modal>
      )}

      <S.Wrapper key={props.el._id}>
        {!isEdit && (
          <>
            <S.CommentBox>
              <S.Avatar src="/BoardComment/avatar.png/" />
              <S.MainWrapper>
                <S.WriterWrapper>
                  <S.Writer>{props.el.writer}</S.Writer>
                  <Rate disabled defaultValue={props.el.rating} />
                </S.WriterWrapper>
                <S.ContentsBox>{props.el.contents}</S.ContentsBox>
              </S.MainWrapper>
              <S.IconBox>
                <S.UpdateIcon
                  onClick={onClickUpdateComment}
                  src="/BoardComment/option_update_icon.png/"
                />
                <S.DeleteIcon
                  id={props.el._id}
                  onClick={onClickDeleteCommentModal}
                  src="/BoardComment/option_delete_icon.png"
                />
              </S.IconBox>
            </S.CommentBox>
            <S.DateBox>{getDate(props.el.createdAt)}</S.DateBox>
          </>
        )}
        {isEdit && (
          <BoardCommentRegister
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            el={props.el}
          />
        )}
      </S.Wrapper>
    </>
  );
}
