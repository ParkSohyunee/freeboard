import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardCommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}
