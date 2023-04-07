import styled from "@emotion/styled";

export const WrapperSearchTab = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
export const SearchKeyword = styled.input`
  padding: 14px;
  width: 776px;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  :focus {
    outline: 1px solid #ffd600;
    background: none;
  }
`;
export const SearchDate = styled.input`
  padding: 14px;
  width: 244px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const SearchButton = styled.button`
  color: white;
  font-weight: 600;
  padding: 14px;
  width: 94px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: black;
  cursor: pointer;
`;
