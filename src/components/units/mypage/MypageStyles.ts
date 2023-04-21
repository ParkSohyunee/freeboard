import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 30px;
  display: flex;
`;
export const ProfileWrapper = styled.section`
  width: 30%;
  padding: 3rem 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border-right: 1px solid lightgrey;
`;
export const Title = styled.h2`
  margin-bottom: 1.5rem;
`;
export const UserIcon = styled(UserOutlined)`
  font-size: 4.5rem;
  background: #ffd600;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
export const UserName = styled.h3`
  font-size: 1.2rem;
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
`;
export const InputWrapper = styled.div`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const SubTitle = styled.span``;
export const PasswordInput = styled.input`
  height: 3rem;
  padding: 0.8rem;
  border: none;
  background: #e0e0e0;
  border-radius: 0.5rem;
  width: 70%;
  opacity: 0.3;
`;
export const ButtonWrapper = styled.div`
  margin-left: auto;
  padding: 0.8rem; ;
`;
export const MypageButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 0.5rem;
`;