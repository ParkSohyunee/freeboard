import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductRegister from "../../../src/components/units/products/register/ProductRegister.container";

function ProductsPage() {
  return <ProductRegister isEdit={false} />;
}

export default withAuth(ProductsPage);
