import { Fragment } from "react";
import { IBoardsUIProps } from "./BoardList.types";
import * as S from "./BoardListStyles";

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <Fragment>
      <S.Wrapper>
        <S.HeaderRow>
          <S.ColumnID>아이디</S.ColumnID>
          <S.ColumnTitle>제목</S.ColumnTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnDate>날짜</S.ColumnDate>
        </S.HeaderRow>
        {props.data?.fetchBoards.map((board) => (
          <S.BodyRow key={board._id}>
            <S.ColumnID>{board._id}</S.ColumnID>
            <S.ColumnTitle>{board.title}</S.ColumnTitle>
            <S.ColumnWriter>{board.writer}</S.ColumnWriter>
            <S.ColumnDate>{board.createdAt}</S.ColumnDate>
          </S.BodyRow>
        ))}
        <S.WrapperFooter>
          <S.PagesWrapper>
            <S.PagesBtn onClick={props.onClickPrevPage}>{`< `}</S.PagesBtn>
            {new Array(10).fill(1).map(
              (_, index) =>
                index + props.startPage <= props.lastPage && (
                  <S.Pages
                    key={index + props.startPage}
                    id={String(index + props.startPage)}
                    onClick={props.onclickPage}
                    isActive={index + props.startPage === props.currentPage}
                  >
                    {index + props.startPage}
                  </S.Pages>
                )
            )}
            {/* id={page} -> Type 'number' is not assignable to type 'string'.ts(2322) HTML은 id="" */}
            <S.PagesBtn onClick={props.onClickNextPage}>{` >`}</S.PagesBtn>
          </S.PagesWrapper>
          <S.RegisterBtn>
            <S.PencilImg src="./pencil-image.png"></S.PencilImg>
            게시물 등록하기
          </S.RegisterBtn>
        </S.WrapperFooter>
      </S.Wrapper>
    </Fragment>
  );
}
