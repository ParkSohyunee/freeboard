import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM } from "./ProductRegister.queries";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Address } from "react-daum-postcode";

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

// dynamic import => 빌드되는 시점에서 호출하지 않고 런타임 시점(이미 documnet 가 선언된 이후)에서 모듈을 호출
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [files, setFiles] = useState<File[]>([]);
  // const [lng, setLng] = useState(0);
  // const [lat, setLat] = useState(0);

  const router = useRouter();

  // react-hook-form => setValue & trigger (onChange 값 저장)
  //  prettier-ignore
  const { register, handleSubmit, formState, setValue, trigger } = useForm<IProductForm>({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl; // 인덱스 위치에서 변경된 임시 url 저장
    setFileUrls(newFileUrls);
  };

  // ReactQuil의 onChange는 개발자가 만들어 놓은 커스텀 요소
  const handleChange = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어줌 => react-hook-form 으로
    setValue("contents", value === "<p><br><p>" ? "" : value);

    // onChange 여부 => react-hook-form 전달
    trigger("contents");
  };

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (value: Address) => {
    onToggleModal();
    setValue("useditemAddress.address", value.address);
    trigger("useditemAddress.address");
    console.log(value.address); // [object] 인지 확인
    setAddress(value.address);
  };

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
            tags: data.tags.split(" "),
            useditemAddress: {
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
              // lat: lat,
              // lng: lng,
            },
            images: fileUrls,
          },
        },
      });
      console.log(result.data?.createUseditem); // 로그
      //
      router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  return (
    <>
      <ProductRegisterUI
        address={address}
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        ReactQuill={ReactQuill}
        // lng={lng}
        // lat={lat}
        fileUrls={fileUrls}
        handleChange={handleChange}
        handleComplete={handleComplete}
        onChangeFileUrls={onChangeFileUrls}
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
      />
    </>
  );
}
