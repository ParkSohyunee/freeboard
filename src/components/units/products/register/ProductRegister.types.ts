import { ComponentType } from "react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";
import ReactQuill from "react-quill";

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
  ReactQuill: ComponentType<ReactQuill.ReactQuillProps>;
  lng: number;
  lat: number;
  fileUrls: string[];
  handleChange: (value: string) => void;
  onChangeFileUrls: (fileUrl: string, index: number, file: File) => void;
  onclickSubmit: (data: IProductForm) => void;
  handleSubmit: UseFormHandleSubmit<IProductForm>;
  register: UseFormRegister<IProductForm>;
  formState: FormState<IProductForm>;
}

export interface IProductBtnProps {
  formState: FormState<IProductForm>;
}
