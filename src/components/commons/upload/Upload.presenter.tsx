import { IUploadFileUI } from "./Upload.types";
import * as S from "./UploadStyles";

export default function UploadFileUI(props: IUploadFileUI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadContainer>
          <S.UploadImage
            onClick={props.onClickUpload}
            src={`https://storage.googleapis.com/${props.fileUrl}`}
          />
          <S.DeleteContainer>
            <S.DeleteIcon onClick={props.onClickDeleteImage} />
          </S.DeleteContainer>
        </S.UploadContainer>
      ) : props.isLoading ? (
        <S.UploadButton>
          <S.LoadingIcon />
        </S.UploadButton>
      ) : (
        <S.UploadButton type="button" onClick={props.onClickUpload}>
          <img src="/upload/ic_add.png" />
        </S.UploadButton>
      )}
      <S.UploadHiddenInput
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
        // accept="image/jpg, image/png"
      />
    </>
  );
}
