import { ComponentType } from "react";
import { Address } from "react-daum-postcode";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import ReactQuill from "react-quill";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductRegisterProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export interface IProductForm {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  tags: string;
  useditemAddress: {
    address: string;
    addressDetail: string;
  };
}

export interface IProductUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
  // value: Address;
  address: string;
  tagArr: string[];
  isModalOpen: boolean;
  onToggleModal: () => void;
  ReactQuill: ComponentType<ReactQuill.ReactQuillProps>;
  // lng: number;
  // lat: number;
  fileUrls: string[];
  handleChange: (value: string) => void;
  handleComplete: (value: Address) => void;
  onKeyUp: (event: any) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onclickSubmit: (data: IProductForm) => void;
  onClickUpdate: (data: IProductForm) => void;
  handleSubmit: UseFormHandleSubmit<IProductForm>;
  register: UseFormRegister<IProductForm>;
  formState: FormState<IProductForm>;
}

export interface IProductBtnProps {
  formState: FormState<IProductForm>;
}
