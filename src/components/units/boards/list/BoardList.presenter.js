import { Fragment } from "react";
import * as S from "./BoardListStyles";

export default function BoardsUI(props){

    return (
        <Fragment>
            <S.Wrapper>
                <S.HeaderRow>
                    <S.ColumnID>아이디</S.ColumnID>
                    <S.ColumnTitle>제목</S.ColumnTitle>
                    <S.ColumnWriter>작성자</S.ColumnWriter>
                    <S.ColumnDate>날짜</S.ColumnDate>
                </S.HeaderRow>

                {props.data?.fetchBoards.map(board => (
                    <S.BodyRow key={board._id}>
                        <S.ColumnID>{board._id}</S.ColumnID> 
                        <S.ColumnTitle>{board.title}</S.ColumnTitle> 
                        <S.ColumnWriter>{board.writer}</S.ColumnWriter>
                        <S.ColumnDate>{board.createdAt}</S.ColumnDate>
                    </S.BodyRow>
                ))}

                <S.WrapperFooter>
                    <S.RegisterBtn>
                        <S.PencilImg src="./pencil-image.png"></S.PencilImg>
                        게시물 등록하기
                    </S.RegisterBtn>
                </S.WrapperFooter>
            </S.Wrapper>
        </Fragment>
    )
}