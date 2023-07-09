import styled from "@emotion/styled";
import { Avatar, Button } from "antd";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 2rem;
  display: flex;

  @media ${breakPoints.tablet} {
    width: 700px;
    padding: 1rem;
  }
`;

export const ProfileWrapper = styled.section`
  width: 30%;
  padding: 3rem 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border-right: 1px solid lightgrey;

  @media ${breakPoints.tablet} {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: var(--font-size-semiregular);
  }
`;

export const UserIcon = styled(Avatar)`
  background: #eaf5cf;
  color: var(--font-color-Grass);
`;

export const UserName = styled.h3`
  font-size: 1.2rem;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
`;

export const MenuWrapper = styled.div`
  padding: 0.5rem;
`;

export const Menu = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

export const PasswordWrapper = styled.section`
  width: 70%;
  padding: 3rem 4.5rem;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    padding: 1rem;
    gap: 1rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SubTitle = styled.span`
  white-space: nowrap;
`;

export const PasswordInput = styled.input`
  height: 3rem;
  padding: 0.8rem;
  border: none;
  background: #f2f2f2;
  border-radius: var(--border-radius-small);
  width: 70%;
  opacity: 0.7;

  :focus {
    outline: 1px solid var(--font-color-Grass);
    background: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  padding: 0.8rem;
`;

export const MypageButton = styled(Button)`
  border-radius: 0.5rem;
  width: 10rem;
  height: 3rem;
`;
