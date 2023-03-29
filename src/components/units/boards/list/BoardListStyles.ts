import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  border: none;
  border-top: 2px solid black;
`;
export const HeaderRow = styled.div`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;
export const BodyRow = styled.div`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  text-align: center;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #ffd600;
  }
`;
export const ColumnNumber = styled.div`
  width: 10%;
`;
export const ColumnID = styled.div`
  width: 20%;
`;
export const ColumnTitle = styled.div`
  width: 30%;
`;
export const ColumnWriter = styled.div`
  width: 20%;
`;
export const ColumnDate = styled.div`
  width: 20%;
`;
export const WrapperFooter = styled.div`
  padding-top: 40px;
  border-top: 2px solid black;
`;
export const PagesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const PagesBtn = styled.button`
  font-size: 18px;
  font-weight: 400;
  color: black;
  padding: 14px;
  cursor: pointer;
  border: none;
  background-color: white;
`;
export const RegisterBtn = styled.button`
  margin-left: auto;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 11px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
  }
`;
export const PencilImg = styled.img`
  width: 18px;
  height: 18px;
`;
