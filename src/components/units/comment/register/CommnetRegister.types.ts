import { ChangeEvent } from "react";

export interface IBoardCommentRegisterProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  writer: string;
  password: string;
  contents: string;
  isActive: boolean;
  onChangeStar: (star: number) => void;
  star: number;
  desc: string[];
}

export interface IButtonProps {
  isActive: boolean;
}
