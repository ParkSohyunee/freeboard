import { gql, useMutation } from "@apollo/client";
import UploadFileUI from "./Upload.presenter";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import UploadValidation from "./UploadValidation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`;

interface IUploadFileProps {
  fileUrl: string;
  index: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function UploadFile(props: IUploadFileProps) {
  //   const [fileUrl, setFileUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = UploadValidation(event.target.files?.[0]);
    if (!file) return;

    // console.log(file); // File{}
    // console.log(event.target.files); // FileList {0: File, length: 1}

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(String(result.data?.uploadFile.url), props.index);

      //   console.log(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <UploadFileUI
        fileRef={fileRef}
        fileUrl={props.fileUrl}
        onClickUpload={onClickUpload}
        onChangeFile={onChangeFile}
      />
    </>
  );
}
