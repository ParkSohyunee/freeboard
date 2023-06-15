import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentRegisterUIProps {
  isEdit: boolean;
  el?: IBoardComment;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  onChangeStar: (star: number) => void;
  star: number;
  desc: string[];
}

export interface IBoardCommentRegisterProps {
  el?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IUpdateBoardCommentInputProps {
  contents?: string;
  rating?: number;
}
