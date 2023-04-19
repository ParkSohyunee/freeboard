import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./ProductRegister.queries";
import { useState } from "react";

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
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IProductForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFileUrls = (fileUrl: string, index: number, file: File) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl; // 인덱스 위치에서 변경된 임시 url 저장
    setFileUrls(newFileUrls);

    const tempFiles = [...files];
    tempFiles[index] = file; // 인덱스 위치에서 변경된 파일 저장
    setFiles(tempFiles);
  };

  const onclickSubmit = async (data: IProductForm) => {
    console.log(data); // 로그

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [resultsFile0, resultsFile1 ...] // [{data: {…}}, {…}, {…}]

    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, ...]
    console.log(resultUrls); // ['', 'codecamp-file-storage/2023/4/19/testimonior_image2.jpg']

    // if (!resultUrls) return;
    // if (typeof resultUrls !== "undefined") return;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: resultUrls,
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
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
      />
    </>
  );
}
