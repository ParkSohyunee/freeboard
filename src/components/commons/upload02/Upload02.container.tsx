import { IUpload02Props } from "./Upload02.types";
import UploadValidation from "../upload/UploadValidation";
import { ChangeEvent, useRef } from "react";
import * as S from "./Upload02Styles";

export default function UploadFile02(props: IUpload02Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = UploadValidation(event.target.files?.[0]);
    if (!file) return;

    console.log(file); // File {name: 'my_dog_vector.png', ...,}

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // data: Blob 객체
        props.onChangeFileUrls(event.target?.result, props.index, file);
      }
    };
  };

  return (
    <>
      {props.fileUrl ? (
        <S.Upload02Image onClick={onClickUpload} src={props.fileUrl} />
      ) : (
        <S.Upload02Button
          type="button" // 버튼타입 default 인 submit으로 설정하면 useForm의 onSubmit이 실행되므로 button타입으로 변경
          onClick={onClickUpload}
        >
          <img src="/upload/ic_add.png" />
          <S.Upload02Upload>Upload</S.Upload02Upload>
        </S.Upload02Button>
      )}
      <S.Upload02HiddenInput
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </>
  );
}
