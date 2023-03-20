import { useQuery } from "@apollo/client";
import BoardsUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export default function Boards(){

    const {data} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    console.log(data?.fetchBoards); // Array
    
    return <BoardsUI data={data}/>
}