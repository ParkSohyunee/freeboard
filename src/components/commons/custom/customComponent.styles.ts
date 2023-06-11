import styled from "@emotion/styled";

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
`;
