import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardsUIProps {
  data?: Pick<IQuery, "fetchBoards">; // 백엔드에서 data를 받아올수도, 받아오지 못할수도
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickMoveToRegisterPage: () => void;
  onClickMoveToDetailPage: (event: MouseEvent<HTMLDivElement>) => void;
}
