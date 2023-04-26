import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import ProductDetail from "../../../src/components/units/products/detail/ProductDetail.container";
import { FETCH_USEDITEM } from "../../../src/components/units/products/detail/ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function ProductDetailPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: `${router.query.productId}` },
  });

  const addressSearch = String(data?.fetchUseditem.useditemAddress?.address);

  return (
    <>
      <ProductDetail addressSearch={addressSearch} />
    </>
  );
}

export default withAuth(ProductDetailPage);
