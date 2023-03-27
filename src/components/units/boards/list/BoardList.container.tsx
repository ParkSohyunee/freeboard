import { useQuery } from "@apollo/client";
import BoardsUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";

export default function Boards() {
  const [myColorPage, setMyColorPage] = useState(0);
  const [startPage, setStartPage] = useState(1);

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

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;
  console.log(lastPage);

  const onclickPage = (event: MouseEvent<HTMLDivElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    setMyColorPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10); // setStartPage(startPage + 5);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      <BoardsUI
        data={data}
        onclickPage={onclickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
        lastPage={lastPage}
        currentPage={myColorPage}
      />
    </>
  );
}
