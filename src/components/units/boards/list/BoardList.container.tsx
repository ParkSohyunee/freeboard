import { useQuery } from "@apollo/client";
import BoardsUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function Boards() {
  // const [myColorPage, setMyColorPage] = useState(0);
  // const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards); // Array

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  console.log(dataBoardsCount?.fetchBoardsCount); // Int

  const count = dataBoardsCount ? dataBoardsCount.fetchBoardsCount : 0;

  return (
    <>
      <BoardsUI
        data={data}
        count={count} // count={dataBoardsCount?.fetchBoardsCount}
        refetch={refetch}
      />
    </>
  );
}
