import { useQuery } from "@apollo/client";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductsListUI from "./ProductsList.presenter";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OFTHEBEST,
} from "./ProductsList.queries";
import { ChangeEvent } from "react";

export default function ProductsList() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEMS);

  const { data: dataBestItem } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OFTHEBEST);

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        isSoldout: false,
        page: Math.ceil(data.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const ImageError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/empty/empty_image.jpg";
  };

  return (
    <>
      <ProductsListUI
        data={data}
        dataBestItem={dataBestItem}
        onClickMoveToPage={onClickMoveToPage}
        onLoadMore={onLoadMore}
        ImageError={ImageError}
      />
    </>
  );
}
