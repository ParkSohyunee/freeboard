import styled from "@emotion/styled";
import { Checkbox } from "antd";

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

export const UnderLine = styled.div`
  padding: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: darkgray;
`;

export const InputInfo = styled.input`
  border-radius: 0.4rem;
  font-size: 0.9rem;
  padding: 1rem;
  border: 1px solid darkgray;
  margin-bottom: 0.8rem;
`;

export const IdCheckbox = styled(Checkbox)`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const LoginWithEmail = styled.button`
  border-radius: 0.4rem;
  border: none;
  font-size: 0.9rem;
  padding: 1rem;
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

// export const LoginWithKakao = styled.button`
//   background: #fee500;
//   color: black;
//   border: none;
//   font-size: 0.9rem;
//   padding: 1rem;
//   font-weight: 600;
// `;
// export const LoginWithNaver = styled.button`
//   background-color: rgb(3, 199, 90);
//   color: white;
//   border: none;
//   font-size: 0.9rem;
//   padding: 1rem;
//   font-weight: 600;
// `;
