import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;
  onClickDeleteComment: (event: MouseEvent<HTMLElement>) => void;
  onClickDeleteCommentModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleModal: () => void;
}
