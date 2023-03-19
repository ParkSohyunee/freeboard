import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardRegister from "../../../../src/components/units/boards/register/BoardRegister.container";

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
export default function BoardEditPage(){

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        } 
    })
  
    // console.log(data);
    // console.log(data?.fetchBoard);

    return (
        <BoardRegister 
            isEdit={true}
            data={data} />
    )
}