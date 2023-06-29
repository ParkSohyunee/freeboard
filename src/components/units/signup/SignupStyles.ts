import styled from "@emotion/styled";
import { ISignupUIProps } from "./Signup.types";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.form`
  width: 840px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    width: 640px;
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  padding-bottom: 1.5rem;
`;

export const InnerWrapper = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
`;

export const InnerPasswordWrapper = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
`;

export const SubTitle = styled.h3`
  width: 20%;
  padding: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export const InputWrapper = styled.input`
  border: 1px solid lightgray;
  border-radius: var(--border-radius-small);
  width: 40%;
  padding: 1rem;
`;

export const InputPassword = styled.input`
  border: 1px solid lightgray;
  border-radius: var(--border-radius-small);
  padding: 1rem;
`;

export const InputNotice = styled.div`
  padding-top: 0.8rem;

  @media ${breakPoints.tablet} {
    font-size: var(--font-size-small);
  }
`;

export const InputPasswordWrapper = styled.div`
  display: flex;
`;

export const ButtonSignUP = styled.button`
  margin-top: 1.2rem;
  padding: 1.2rem;
  width: 100%;
  border: none;
  border-radius: var(--border-radius-small);
  font-size: var(--font-size-semiregular);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;

  color: ${(props: ISignupUIProps) => (props.isValid ? "white" : "default")};
  background: ${(props: ISignupUIProps) =>
    props.isValid ? "var(--font-color-lightPeach)" : "default"};
`;

export const ErrorMessage = styled.p`
  color: orangered;
  padding: 1rem;
`;
