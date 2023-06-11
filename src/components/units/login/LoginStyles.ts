import styled from "@emotion/styled";
import { Checkbox } from "antd";
import { ILoginUIProps } from "./Login.types";

export const Wrapper = styled.form`
  width: 540px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  padding-bottom: 1.5rem;
`;

export const InputInfo = styled.input`
  border-radius: 0.4rem;
  font-size: 0.9rem;
  padding: 1rem;
  border: 1px solid darkgray;
`;

export const IdCheckbox = styled(Checkbox)`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const LoginWithEmail = styled.button`
  border-radius: 0.4rem;
  border: none;
  padding: 1rem;
  font-size: var(--font-size-semiregular);
  cursor: pointer;

  color: ${(props: ILoginUIProps) => (props.isValid ? "white" : "default")};
  background: ${(props: ILoginUIProps) =>
    props.isValid ? "var(--font-color-lightPeach)" : "default"};
  font-weight: ${(props: ILoginUIProps) => (props.isValid ? 600 : "default")};
`;

export const LoginOption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  padding-top: 1.5rem;
`;

export const OptionBtn = styled.div`
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: orangered;
  padding: 0.5rem;
`;
