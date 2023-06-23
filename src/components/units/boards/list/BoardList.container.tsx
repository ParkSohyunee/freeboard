import { useQuery } from "@apollo/client";
import BoardsUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function Boards() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // refetch이름 중복처리 -> refetchBoardsCount
  // gql - dataBoardsCount에도 변수로 search를 미리 넣어줄것
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const count = dataBoardsCount ? dataBoardsCount.fetchBoardsCount : 0;

  const onClickMoveToRegisterPage = () => {
    router.push("/boards/new");
  };
  const onClickMoveToDetailPage = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <>
      <BoardsUI
        data={data}
        count={count} // count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        refetch={refetch}
        onClickMoveToRegisterPage={onClickMoveToRegisterPage}
        onClickMoveToDetailPage={onClickMoveToDetailPage}
        onChangeKeyword={onChangeKeyword} // setKeyword를 넘겨줘도 무방
        refetchBoardsCount={refetchBoardsCount}
      />
    </>
  );
}
