import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentUI from "./CommentRegister.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentRegister.queries";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentRegister() {
  const router = useRouter();
  console.log(router.query.boardId);

  const [isActive, setIsActive] = useState(false);

  const [commentRegister] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(3);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setWriter(event.target.value);
    if (event.target.value && password && contents) setIsActive(true);
    else setIsActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (writer && event.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (writer && password && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  // console.log(writer, password, contents);

  const onChangeStar = (star: number) => {
    setStar(star);
    if (writer && password && contents && star) setIsActive(true);
    else setIsActive(false);
  };
  console.log(star);

  const onClickSubmit = async () => {
    if (typeof router.query.boardId !== "string") return;

    if (!writer) alert("작성자를 입력해주세요.");
    if (!password) alert("비밀번호를 입력해주세요.");
    if (!contents) alert("내용을 입력해주세요.");
    if (!star) alert("별점을 눌러주세요.");
    if (writer && password && contents) {
      try {
        const result = await commentRegister({
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
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <BoardCommentUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        writer={writer}
        password={password}
        contents={contents}
        isActive={isActive}
        onChangeStar={onChangeStar}
        star={star}
        desc={desc}
      />
    </>
  );
}
