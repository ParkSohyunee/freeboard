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

export default function ProductsList() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEMS);

  console.log(data);

  const { data: dataBestItem } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OFTHEBEST);

  //   const BestItemArray = dataBestItem?.fetchUseditemsOfTheBest.map((el) => {
  //     return el.images;
  //   });
  //   console.log(BestItemArray);

  //   const [img, setImg] = useState("");
  //   BestItemArray?.map((el) => {
  //     if (el) {
  //       return setImg(el[0]);
  //     } else {
  //       setImg("");
  //     }
  //   });

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

  return (
    <>
      <ProductsListUI
        data={data}
        dataBestItem={dataBestItem}
        // img={img}
        onClickMoveToPage={onClickMoveToPage}
        onLoadMore={onLoadMore}
      />
    </>
  );
}
