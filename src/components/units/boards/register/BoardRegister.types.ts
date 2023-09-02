import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode/lib/loadPostcode";

export interface IBoardRegisterProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

// 게시글 수정할 때 데이터 타입
export interface IVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    address?: string;
    addressDetail?: string;
    zipcode?: string;
  };
  images?: string[]; // ["", "", "강아지.jpg"]
}

// 게시글 등록할 때 데이터 타입
export interface IinputsType {
  [key: string]: string; // index signature type 지정 => 객체[key]를 문자열 타입으로 지정해야 value에 접근 가능
  writer: string;
  password: string;
  title: string;
  contents: string;
  addressDetail: string;
  youtubeUrl: string;
}

export interface IBoardRegisterUIProps {
  // prettier-ignore
  onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  deleteFileByIndex: (index: number) => void;
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
  fileUrls: string[];
  writerError: string;
  pwdError: string;
  titleError: string;
  contentsError: string;
  addressError: string;
  youtubeUrlError: string;
}

// 등록, 수정하기 버튼 타입
export interface ISubmitBtnProps {
  isActive: boolean;
}
