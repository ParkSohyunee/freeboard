import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface IProductForm {
  name: string;
  remarks: string;
  price: number;
  contents: string;
}

export interface IProductUIProps {
  onclickSubmit: (data: IProductForm) => void;
  handleSubmit: UseFormHandleSubmit<IProductForm>;
  register: UseFormRegister<IProductForm>;
  formState: FormState<IProductForm>;
}

export interface IProductBtnProps {
  formState: FormState<IProductForm>;
}
