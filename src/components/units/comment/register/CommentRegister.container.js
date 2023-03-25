import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentUI from "./CommentRegister.presenter";

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
    }
  }
`;

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

export default function BoardCommentRegister() {
  const router = useRouter();
  console.log(router.query.boardId);

  const [isActive, setIsActive] = useState(false);

  const [commentRegister] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    // console.log(event.target.value);
    setWriter(event.target.value);
    if (event.target.value && password && contents) setIsActive(true);
    else setIsActive(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (writer && event.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && password && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  // console.log(writer, password, contents);

  const onClickSubmit = async () => {
    if (!writer) alert("작성자를 입력해주세요.");
    if (!password) alert("비밀번호를 입력해주세요.");
    if (!contents) alert("내용을 입력해주세요.");
    if (writer && password && contents) {
      try {
        const result = await commentRegister({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: contents,
              rating: 5,
            },
            boardId: router.query.boardId,
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
      />
    </>
  );
}
