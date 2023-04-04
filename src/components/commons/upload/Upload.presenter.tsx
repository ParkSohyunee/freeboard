import styled from "@emotion/styled";
import { ChangeEvent, RefObject } from "react";

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  cursor: pointer;
`;
export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  cursor: pointer;
  border-radius: 5px;
  background: #fafafa;
  border: 1px dashed #e5e5e5;
`;
export const UploadHiddenInput = styled.input`
  display: none;
`;

interface IUploadFileUI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadFileUI(props: IUploadFileUI) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <img src="/upload/ic_add.png" />
        </UploadButton>
      )}
      <UploadHiddenInput
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
        // accept="image/jpg, image/png"
      />
    </>
  );
}
