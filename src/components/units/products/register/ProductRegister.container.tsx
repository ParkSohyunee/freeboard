import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import {} from "@hookform/resolvers";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM } from "./ProductRegister.queries";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄요약을 입력해주세요."),
  contents: yup.string().required("상품에 대한 상세설명을 적어주세요."),
  price: yup
    .string()
    .required("상품가격을 입력해주세요.")
    .matches(
      /^[0-9]{4,7}$/,
      "숫자만 입력해주세요. (최소가격: 1,000 ~ 최대가격: 1,000,000)"
    ),
});

export default function ProductRegister() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IProductForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const onclickSubmit = async (data: IProductForm) => {
    console.log(data); // 로그
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      console.log(result.data?.createUseditem); // 로그
      router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  return (
    <>
      <ProductRegisterUI
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
      />
    </>
  );
}
