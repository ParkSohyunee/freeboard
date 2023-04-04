import { Modal } from "antd";

export default function UploadValidation(file: File | undefined) {
  if (!file?.size) {
    Modal.warning({ content: "파일이 없습니다." });
    return;
  }

  if (file?.size > 5 * 1024 * 1024) {
    Modal.warning({ content: "파일용량이 너무 큽니다. (제한: 5MB)" });
    return;
  }

  if (
    !file?.type.includes("png") &&
    !file?.type.includes("jpg") &&
    !file?.type.includes("jpeg")
  ) {
    Modal.warning({ content: "jpg 또는 png 파일만 업로드 가능합니다." });
    return;
  }

  return file;
}
