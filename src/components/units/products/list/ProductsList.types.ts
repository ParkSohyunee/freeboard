import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductsUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  dataBestItem?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  onLoadMore: () => void;
  onClickMoveToPage: (path: string) => () => void;
  ImageError: (event: ChangeEvent<HTMLImageElement>) => void;
}
