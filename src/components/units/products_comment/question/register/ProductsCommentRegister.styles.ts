import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const ContentsInput = styled.textarea`
  padding: 0.5rem;
  width: 100%;
  height: 10rem;
  border-radius: var(--border-radius-small);
  resize: none;

  @media ${breakPoints.tablet} {
    height: 5rem;
  }
`;

export const ContentsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  padding: 0.8rem 2rem;
  color: white;
  font-size: var(--font-size-semiregular);
  border-radius: var(--border-radius-small);
  background: var(--color-dark-brown);
  border: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1rem;
  }
`;
