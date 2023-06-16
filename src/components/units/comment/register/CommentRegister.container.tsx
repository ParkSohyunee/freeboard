import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentUI from "./CommentRegister.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./CommentRegister.queries";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  IBoardCommentRegisterProps,
  IUpdateBoardCommentInputProps,
} from "./CommentRegister.types";
import { Modal } from "antd";

export default function BoardCommentRegister(
  props: IBoardCommentRegisterProps
) {
  const router = useRouter();

  const [commentRegister] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeStar = (star: number) => {
    setStar(star);
  };

  const onClickSubmit = async () => {
    if (typeof router.query.boardId !== "string") return;

    if (!writer) alert("작성자를 입력해주세요.");
    if (!password) alert("비밀번호를 입력해주세요.");
    if (!contents) alert("내용을 입력해주세요.");
    if (!star) alert("별점을 눌러주세요.");
    if (writer && password && contents) {
      try {
        await commentRegister({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: contents,
              rating: star,
            },
            boardId: router.query.boardId, // boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
      // 등록후 state를 빈값으로 변경하고 value에 넣어줌으로써 등록후에 댓글작성창이 비워지게 됨
      setWriter("");
      setPassword("");
      setContents("");
    }
  };

  const onClickUpdate = async () => {
    const updateBoardCommentInput: IUpdateBoardCommentInputProps = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

    if (!contents) {
      Modal.confirm({ content: "수정한 내용이 없습니다." });
      return;
    }
    if (!password) {
      Modal.warning({ content: "비밀번호를 입력해주세요." });
      return;
    }

    if (password && contents) {
      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: updateBoardCommentInput,
            password: password,
            boardCommentId: String(props.el?._id),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        // 수정하기 클릭하면 isEdit가 원래 false인 상태로 돌아가야 함
        // setIseEdit를 props로 넘겨주고 그 값을 바꿔줌으로써 부모의 state가 변경됨
        props.setIsEdit?.(false); // props.setIsEdit ?? props.setIsEdit(false)
      } catch (error) {
        if (error instanceof Error)
          Modal.warning({
            content: (
              <div>
                <p>비밀번호가 일치하지 않습니다. </p>
                <p>다시 입력해주세요.</p>
              </div>
            ),
          });
      }
    }
  };

  return (
    <>
      <BoardCommentUI
        isEdit={props.isEdit}
        el={props.el}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        writer={writer}
        password={password}
        contents={contents}
        onChangeStar={onChangeStar}
        star={star}
        desc={desc}
      />
    </>
  );
}
