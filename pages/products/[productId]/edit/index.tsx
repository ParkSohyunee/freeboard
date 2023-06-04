import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { FETCH_USEDITEM } from "../../../../src/components/units/products/detail/ProductDetail.queries";
import { useRouter } from "next/router";
import ProductRegister from "../../../../src/components/units/products/register/ProductRegister.container";

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: `${router.query.productId}` },
  });

  return <ProductRegister data={data} isEdit={true} />;
}
