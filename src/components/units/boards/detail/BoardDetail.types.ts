import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: () => void;
  onClickMoveToEdit: () => void;
  onClickLikeCount: () => void;
  onClickDislikeCount: () => void;
}
