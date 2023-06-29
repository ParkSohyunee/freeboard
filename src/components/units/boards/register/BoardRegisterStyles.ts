import styled from "@emotion/styled";
import { ISubmitBtnProps } from "./BoardRegister.types";
import { breakPoints } from "../../../../commons/styles/media";

// 게시물 등록 페이지
export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media ${breakPoints.tablet} {
    width: 700px;
    padding: 2rem 3rem;
    gap: 1rem;
  }
`;

// 게시물 등록 타이틀
export const PageTitle = styled.div`
  width: 100%;
  padding-bottom: 60px;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;

  @media ${breakPoints.tablet} {
    padding-bottom: 2rem;
  }
`;

// 작성자 & 비밀번호
export const WriterInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakPoints.tablet} {
    gap: 1rem;
  }
`;

export const Item = styled.div`
  width: 486px;
  height: 125px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
`;

export const InputBox = styled.input`
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
  border-radius: var(--border-radius-small);
`;

export const InputBoxTitle = styled.input`
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
  border-radius: var(--border-radius-small);
`;

// 제목
export const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 내용
export const ContentsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextBoxContents = styled.textarea`
  height: 466px;
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
  resize: none;
  border-radius: var(--border-radius-small);

  @media ${breakPoints.tablet} {
    height: 233px;
  }
`;

// 주소
export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Zip = styled.div`
  display: flex;
  gap: 16px;
`;

export const ZipCode = styled.input`
  width: 72px;
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
  border-radius: var(--border-radius-small);
`;

export const ZipCodeSearch = styled.button`
  padding: 14px 16px;
  text-align: center;
  color: var(--font-color-white);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background: #000000;
  cursor: pointer;
  border-radius: var(--border-radius-small);
`;

// 사진첨부
export const Img = styled.div`
  display: flex;
  gap: 24px;
`;

// 메인설정
export const MainSet = styled.div`
  display: flex;
  gap: 22px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

// 등록하기
export const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  background-color: ${(props: ISubmitBtnProps) =>
    props.isActive ? "#FFD600" : "none"};
  cursor: pointer;
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: var(--border-radius-small);
`;

// 에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
