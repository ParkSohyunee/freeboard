import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  position: relative;
`;

export const UploadImage = styled.img`
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 5px;
`;

export const DeleteContainer = styled.div`
  opacity: 0;
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
  }
`;

export const DeleteIcon = styled(DeleteOutlined)`
  color: white;
  font-size: 2rem;
`;

export const LoadingIcon = styled(LoadingOutlined)`
  color: blue;
  font-size: 3rem;
`;

export const UploadButton = styled.button`
  width: 160px;
  height: 160px;
  cursor: pointer;
  border-radius: 5px;
  background: #fafafa;
  border: 1px dashed #e5e5e5;
  :hover {
    border: 1px dashed blue;
  }
`;
export const UploadHiddenInput = styled.input`
  display: none;
`;
