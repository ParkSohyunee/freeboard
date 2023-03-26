import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const ContentsBox = styled.div`
  padding-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateBox = styled.div`
  padding: 10px 0px 10px 60px;
  font-weight: 500;
  color: lightgray;
`;
