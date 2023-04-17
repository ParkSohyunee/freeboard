import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";

export default function ProductRegister() {
  const { register, handleSubmit, formState } = useForm<IProductForm>();

  const onclickSubmit = (data: IProductForm) => {
    console.log(data);
  };

  return (
    <>
      <ProductRegisterUI
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
      />
    </>
  );
}
