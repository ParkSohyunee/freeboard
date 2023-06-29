import styled from "@emotion/styled";
import { IProductBtnProps } from "./ProductRegister.types";
import { breakPoints } from "../../../../commons/styles/media";

// 상품 등록 및 수정 페이지
export const Wrapper = styled.form`
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

// 타이틀
export const PageTitle = styled.div`
  width: 100%;
  padding-bottom: 3.9rem;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;

  @media ${breakPoints.tablet} {
    padding-bottom: 2rem;
  }
`;

// 상품명 & 판매가격
export const ProductInfo = styled.div`
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
  gap: 1rem;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const AddressSearch = styled.button`
  width: 120px;
  padding: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #5da490;
  color: white;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const InputBox = styled.input`
  padding: 0.8rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid #bdbdbd;
  border-radius: var(--border-radius-small);
`;

export const InputBoxTitle = styled.input`
  padding: 0.8rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid #bdbdbd;
  cursor: text;
  border-radius: var(--border-radius-small);
`;

// 한줄요약
export const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 상품설명
export const ContentsInfo = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ql-editor {
    height: 180px;
  }
`;

export const Location = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const kakaoMap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const Map = styled.div`
  height: 300px;
  border-radius: var(--border-radius-small);
  overflow: hidden;
`;

export const LocationDetail = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const LocationInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 태그
export const TagWrapper = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-medium-beige);
  color: white;
  line-height: 1.5rem;
  cursor: pointer;
`;

// 사진첨부
export const Img = styled.div`
  display: flex;
  gap: 1.5rem;
`;

// 버튼
export const Submit = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  background: ${(props: IProductBtnProps) =>
    props.formState.isValid ? "#FFD600" : "default"};
  cursor: pointer;
  width: 179px;
  height: 52px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  border-radius: var(--border-radius-small);
`;

// 에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: var(--font-size-semiregular);

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;
