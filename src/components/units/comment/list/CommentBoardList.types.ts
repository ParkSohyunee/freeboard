import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentBoardListItemsProps {
  el: IBoardComment;
}

export interface IBoardCommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}
