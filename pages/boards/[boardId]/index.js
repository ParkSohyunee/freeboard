import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {WrapperDetail, LeftHead, Avatar, Writer, WriterName, Date, WrapperTop, Line
, BoardTitle, ImgBox, BoardContent, Video, BoardBtn, BtnStyle} from "../../../styles/emotion"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
        _id
        writer
        title
        contents
        createdAt
        }
    }
`
export default function BoardsDetailPage(){
    
    const router = useRouter() 

    console.log("====================");
    console.log(router); // 객체
    console.log("====================");
    console.log(router.query);  // {boardId: '...'}
    console.log("====================");
    console.log(router.query.boardId); // ... 즉, boardId 반환            

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId}
    })

    console.log(data); // undefined
    console.log(data ? data.fetchBoard.writer : "loading..."); // 삼향연산자
    console.log(data && data.fetchBoard.writer); // AND 연산자
    console.log(data?.fetchBoard.writer); // 옵셔널 체이닝

    return (
        <>
        <WrapperDetail>
            <WrapperTop>
                <LeftHead>
                    <Avatar src="/ic_profile-56px.png"></Avatar>
                    <Writer>
                        <WriterName>{data?.fetchBoard.writer}</WriterName>
                        <Date>{data?.fetchBoard.createdAt}</Date>
                    </Writer>
                </LeftHead>
                <Line></Line>
                <BoardTitle>{data?.fetchBoard.title}</BoardTitle>
                <ImgBox></ImgBox>
                <BoardContent>{data?.fetchBoard.contents}</BoardContent>
                <Video>비디오재생</Video>
            </WrapperTop>
            <BoardBtn>
                <BtnStyle>목록보기</BtnStyle>
                <BtnStyle>수정하기</BtnStyle>
                <BtnStyle>삭제하기</BtnStyle>
            </BoardBtn>
        </WrapperDetail>           
        </>
    )
}