import { ChangeEvent, RefObject } from "react";

export interface IUploadFileProps {
  fileUrl: string;
  index: number;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  deleteFileByIndex: (index: number) => void;
}

export interface IUploadFileUI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  isLoading: boolean;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImage: () => void;
}
