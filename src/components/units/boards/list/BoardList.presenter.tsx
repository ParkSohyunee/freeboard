import { Fragment } from "react";
import Pagination01 from "../../../commons/pagination/01/pagination01.container";
import { IBoardsUIProps } from "./BoardList.types";
import * as S from "./BoardListStyles";

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <Fragment>
      <S.Wrapper>
        <S.HeaderRow>
          <S.ColumnNumber>No.</S.ColumnNumber>
          <S.ColumnID>아이디</S.ColumnID>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnDate>날짜</S.ColumnDate>
        </S.HeaderRow>
        {props.data?.fetchBoards.map((board, index) => (
          <S.BodyRow
            key={board._id}
            id={board._id}
            onClick={props.onClickMoveToDetailPage}
          >
            <S.ColumnNumber>{index + 1}</S.ColumnNumber>
            <S.ColumnID>{board._id.slice(-6).toUpperCase()}</S.ColumnID>
            <S.ColumnTitle>{board.title}</S.ColumnTitle>
            <S.ColumnWriter>{board.writer}</S.ColumnWriter>
            <S.ColumnDate>{board.createdAt}</S.ColumnDate>
          </S.BodyRow>
        ))}
        <S.WrapperFooter>
          <S.PagesWrapper>
            <Pagination01 refetch={props.refetch} count={props.count} />
          </S.PagesWrapper>
          <S.RegisterBtn onClick={props.onClickMoveToRegisterPage}>
            <S.PencilImg src="./pencil-image.png"></S.PencilImg>
            게시물 등록하기
          </S.RegisterBtn>
        </S.WrapperFooter>
      </S.Wrapper>
    </Fragment>
  );
}
