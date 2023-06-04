import styled from "@emotion/styled";
import { IProductBtnProps } from "./ProductRegister.types";

// 상품 등록 및 수정 페이지
// Making a styled components with emotion and tagged template literals
export const Wrapper = styled.form`
  box-sizing: border-box;
  width: 1200px;
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
// 타이틀
export const PageTitle = styled.div`
  width: 100%;
  padding-bottom: 60px;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
`;
// 상품명 & 판매가격
export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Item = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
`;
export const InputBoxTitle = styled.input`
  padding: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #bdbdbd;
`;
// 한줄요약
export const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
// 상품설명
export const ContentsInfo = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .ql-editor {
    height: 180px;
  }
`;
export const Location = styled.div`
  width: 100%;
  // padding-bottom: 37px;
  display: flex;
  // flex-direction: column;
  gap: 1.5rem;
`;
export const kakaoMap = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Map = styled.div`
  height: 300px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
// 에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
