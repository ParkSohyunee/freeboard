import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IPagination01Props {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count: number;
}

export interface ICurrentPage {
  isActive: boolean;
}

export interface IPagination01UIProps {
  onclickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
}
