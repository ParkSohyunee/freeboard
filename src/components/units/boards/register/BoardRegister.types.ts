import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export interface IBoardRegisterProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    address?: string;
    addressDetail?: string;
    zipcode?: string;
  };
}

export interface IBoardRegisterUIProps {
  writerError: string;
  pwdError: string;
  titleError: string;
  contentsError: string;
  youtubeUrlError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickValidation: () => void;
  onClickUpdate: () => void;
  handleComplete: (data: Address) => void;
  onToggleModal: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isModalOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface ISubmitBtnProps {
  isActive: boolean;
}
