import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";

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
export default function BoardDetail() {
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

    return <BoardDetailUI data={data}/>
}