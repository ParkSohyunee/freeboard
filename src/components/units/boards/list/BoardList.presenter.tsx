import { Fragment } from "react";
import { getDate } from "../../../../commons/utils/date";
import Pagination01 from "../../../commons/pagination/01/pagination01.container";
import { IBoardsUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import * as S from "./BoardListStyles";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import { ButtonForRegisterAction } from "../../../commons/custom/customComponent.styles";

export default function BoardsUI(props: IBoardsUIProps) {
  return (
    <Fragment>
      <S.Wrapper>
        <Searchbar
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
          refetchBoardsCount={props.refetchBoardsCount}
        />
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
            <S.ColumnTitle>
              {board.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <S.MatchedTitle
                    key={uuidv4()}
                    isMatched={el === props.keyword}
                  >
                    {el}
                  </S.MatchedTitle>
                ))}
            </S.ColumnTitle>
            <S.ColumnWriter>{board.writer}</S.ColumnWriter>
            <S.ColumnDate>{getDate(board.createdAt)}</S.ColumnDate>
          </S.BodyRow>
        ))}
        <S.WrapperFooter>
          <S.PagesWrapper>
            {/* fetchBoardsCount 가 렌더링되면서 자동계산됨  */}
            <Pagination01 refetch={props.refetch} count={props.count} />
          </S.PagesWrapper>
          <ButtonForRegisterAction onClick={props.onClickMoveToRegisterPage}>
            <S.PencilImg src="./pencil-image.png"></S.PencilImg>
            게시물 등록하기
          </ButtonForRegisterAction>
        </S.WrapperFooter>
      </S.Wrapper>
    </Fragment>
  );
}
