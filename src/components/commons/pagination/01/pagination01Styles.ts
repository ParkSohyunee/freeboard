import styled from "@emotion/styled";
import { ICurrentPage } from "./pagination01.types";

export const Pages = styled.div`
  font-weight: ${(props: ICurrentPage) => (props.isActive ? "700" : "400")};
  font-size: 18px;
  color: ${(props: ICurrentPage) => (props.isActive ? "#FFD600" : "black")};
  padding: 14px;
  cursor: pointer;
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
