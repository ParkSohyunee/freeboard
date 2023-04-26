import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  path: string;
  onClickMoveToPage: (path: string) => () => void;
  onClickItemPick: () => void;
  onClickDeleteItem: () => void;
}

export interface IPropsDetail {
  addressSearch?: string;
}
