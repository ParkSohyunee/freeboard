import ProductDetail from "../../../src/components/units/products/detail/ProductDetail.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function ProductDetailPage() {
  return <ProductDetail />;
}

export default withAuth(ProductDetailPage);
