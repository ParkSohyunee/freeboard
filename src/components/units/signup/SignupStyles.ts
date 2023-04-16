import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 1200px;
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  padding: 1rem;
`;
export const InnerWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
`;
export const InnerPasswordWrapper = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
`;
export const SubTitle = styled.h3`
  width: 20%;
  padding: 1rem;
`;
export const InputName = styled.input`
  border: 1px solid lightgray;
  width: 40%;
  font-size: 1.2rem;
  padding: 1rem;
`;
export const InputEmail = styled.input`
  border: 1px solid lightgray;
  width: 40%;
  font-size: 1.2rem;
  padding: 1rem;
`;
export const InputPassword = styled.input`
  border: 1px solid lightgray;
  font-size: 1.2rem;
  padding: 1rem;
`;
export const InputNotice = styled.div`
  padding-top: 0.8rem;
`;
export const InputPasswordWrapper = styled.div`
  display: flex;
`;
export const ButtonSignUP = styled.button`
  padding: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  width: 20%;
  margin: auto;
  margin-top: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  background: black;
  color: white;
`;
export const ErrorMessage = styled.p`
  color: orangered;
  padding: 1rem;
`;
