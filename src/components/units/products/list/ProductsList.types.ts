import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductsUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  dataBestItem?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  //   img: string
  onLoadMore: () => void;
  onClickMoveToPage: (path: string) => () => void;
}
