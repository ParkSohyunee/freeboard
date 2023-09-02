import { useMutation } from "@apollo/client";
import UploadFileUI from "./Upload.presenter";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import UploadValidation from "./UploadValidation";
import { UPLOAD_FILE } from "./Upload.queries";
import { IUploadFileProps } from "./Upload.types";

export default function UploadFile(props: IUploadFileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = UploadValidation(event.target.files?.[0]); // File{}
    if (!file) return; // event.target.files) => FileList {0: File, length: 1}
    setIsLoading(true);

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(String(result.data?.uploadFile.url), props.index);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
        setIsLoading(false);
      }
    }
  };

  const onClickDeleteImage = () => {
    props.deleteFileByIndex(props.index);
  };

  return (
    <>
      <UploadFileUI
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        isLoading={isLoading}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
        onClickDeleteImage={onClickDeleteImage}
      />
    </>
  );
}
