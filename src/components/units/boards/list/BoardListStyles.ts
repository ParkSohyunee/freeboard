import styled from "@emotion/styled";
import { IMatchedProps } from "./BoardList.types";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  border: none;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
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
  border-top: 2px solid black;
  white-space: nowrap;
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
  white-space: nowrap;

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

  @media screen and (${breakPoints.tablet}) {
    display: none;
  }
`;

export const ColumnTitle = styled.div`
  width: 30%;

  @media screen and (${breakPoints.tablet}) {
    width: 50%;
  }
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

export const PencilImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const MatchedTitle = styled.span`
  color: ${(props: IMatchedProps) => (props.isMatched ? "#FFD600" : "black")};
`;
