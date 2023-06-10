import { Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface ICommentForm {
  contents: string;
}

export interface ICommentRegisterProps {
  isEdit: boolean;
  el?: IUseditemQuestion;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
