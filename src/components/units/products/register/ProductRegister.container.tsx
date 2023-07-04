import { MouseEvent } from "react";
import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm, IProductRegisterProps } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductRegister.queries";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Address } from "react-daum-postcode";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄요약을 입력해주세요."),
  contents: yup.string().required("상품에 대한 상세설명을 적어주세요."),
  price: yup
    .number()
    .min(1000)
    .max(1000000)
    .required("상품가격을 입력해주세요.(최소가격: 1,000 ~ 최대가격: 1,000,000)")
    .integer(),
});

// dynamic import => 빌드되는 시점에서 호출하지 않고 런타임 시점(이미 documnet 가 선언된 이후)에서 모듈을 호출
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductRegister(props: IProductRegisterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", ""]);
  // const [files, setFiles] = useState<File[]>([]);
  const [tagArr, setTagArr] = useState<string[]>([]);

  const router = useRouter();

  // 만약 이미지와 태그가 있다면 배열에 넣어줘
  useEffect(() => {
    if (props.data?.fetchUseditem.images)
      // defaultValue 에 이미지 넣기 => ["image1.jpg", "..", ".."]
      setFileUrls([...props.data.fetchUseditem.images]);

    if (props.data?.fetchUseditem.tags)
      setTagArr([...props.data.fetchUseditem.tags]);
  }, [props.data]);

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

  const [updateUsedutem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  // 태그 추가
  const onKeyUp = (event: any) => {
    // 스페이스바 입력시 태그 완성
    if (event.key === " ") {
      // 입력한 태그가 공백이 아닐 때
      if (event.target.value !== " ") {
        setTagArr([...tagArr, "#" + event.target.value.trim()]); // space로 인한 공백 제거 후 저장
      }
      // 등록후 input 초기화
      event.target.value = "";
    }
  };

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
    setAddress(value.address); // [object] 인지 확인
  };

  // 태그 삭제
  const onClickDeleteTag = (event: MouseEvent<HTMLSpanElement>) => {
    const result = tagArr.filter((tag) => tag !== event.currentTarget.id);
    setTagArr(result);
  };

  const onclickSubmit = async (data: IProductForm) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: tagArr,
            useditemAddress: {
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      //
      router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IProductForm) => {
    try {
      const result = await updateUsedutem({
        variables: {
          useditemId: String(router.query.productId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: tagArr,
            useditemAddress: {
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      router.push(`/products/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  return (
    <>
      <ProductRegisterUI
        address={address}
        tagArr={tagArr}
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        ReactQuill={ReactQuill}
        fileUrls={fileUrls}
        handleChange={handleChange}
        handleComplete={handleComplete}
        onKeyUp={onKeyUp}
        onChangeFileUrls={onChangeFileUrls}
        onClickDeleteTag={onClickDeleteTag}
        onclickSubmit={onclickSubmit}
        onClickUpdate={onClickUpdate}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
        data={props.data}
        isEdit={props.isEdit}
      />
    </>
  );
}
