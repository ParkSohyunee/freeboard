import { useQuery } from "@apollo/client";
import BoardsUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function Boards(){

    const {data} = useQuery(FETCH_BOARDS)
    console.log(data?.fetchBoards); // Array
    
    return <BoardsUI data={data}/>
}