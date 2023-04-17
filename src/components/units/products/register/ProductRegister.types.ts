import { UseFormRegister, UseFormHandleSubmit } from "react-hook-form";

export interface IProductForm {
  name: string;
  price: number;
  contents: string;
}

export interface IProductUIProps {
  onclickSubmit: (data: IProductForm) => void;
  handleSubmit: UseFormHandleSubmit<IProductForm>;
  register: UseFormRegister<IProductForm>;
}
