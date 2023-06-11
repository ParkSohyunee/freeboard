import styled from "@emotion/styled";
import { Avatar } from "antd";

export const Wrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserAvatar = styled(Avatar)`
  background-color: #eaf5cf;
  color: var(--font-color-Grass);
`;

export const MainWrapper = styled.div`
  width: 70%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Writer = styled.div`
  font-weight: var(--font-weight-semibold);
`;

export const ContentsBox = styled.div`
  height: 2rem;
  font-size: var(--font-size-small);
  line-height: 2rem;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const UpdateIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const DateBox = styled.div`
  padding-left: 3.5rem;
  font-size: var(--font-size-small);
  color: lightgray;
`;
