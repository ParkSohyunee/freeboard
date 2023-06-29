import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const EmptyStateContainer = styled.div`
  width: 160px;
  height: 160px;
  padding-top: 1rem;
`;

export const ButtonForMoveToPage = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    border-radius: var(--border-radius-regular);
    background: var(--font-color-DeepBlue);
    color: white;
  }

  @media ${breakPoints.tablet} {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;

export const ButtonForRegisterAction = styled.button`
  margin-left: auto;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 11px;
  background: none;
  border: 1px solid #f2f2f2;
  border-radius: var(--border-radius-regular);
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  line-height: 24px;
  cursor: pointer;

  :hover {
    background-color: var(--color-light-beige);
  }
`;
