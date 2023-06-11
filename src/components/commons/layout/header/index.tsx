import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { message } from "antd";
import { IMutation } from "../../../../commons/types/generated/types";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import Profile01 from "../../profile/Profile01.container";
import { ButtonForMoveToPage } from "../../custom/customComponent.styles";

const Wrapper = styled.div`
  height: 107px;
`;
export const InnerWrapper = styled.div`
  padding: 1.8rem;
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InnerLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;
const RightNavbar = styled.div`
  font-size: 1.25rem;
  font-weight: var(--font-weight-regular);
  display: flex;
  align-items: center;
`;
const UserAvatar = styled(UserOutlined)`
  padding: 0.8rem;
  color: var(--font-color-DeepBlue);
  font-size: 1.5rem;
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHead() {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const client = useApolloClient();
  const [isActive, setIsActive] = useState(false);

  const onClickActive = () => {
    setIsActive((prev) => !prev);
  };

  // recoil에 저장되어있는 accessToken을 없애주는 작업
  // 로그인하고 받아온 데이터들(ApolloClient에 캐시된 서버 데이터들)을 없애주는 작업
  const onclickLogout = () => {
    localStorage.clear();
    setAccessToken("");
    client.clearStore();
    message.success({ content: "로그아웃이 완료되었습니다." });

    console.log(accessToken);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>🍋 free market </InnerLogo>
        <RightNavbar>
          {accessToken ? (
            <>
              {isActive && <Profile01 />}
              <UserAvatar onClick={onClickActive} />
              <ButtonForMoveToPage onClick={onclickLogout}>
                로그아웃
              </ButtonForMoveToPage>
              <ButtonForMoveToPage onClick={onClickMoveToPage("/login/mypage")}>
                마이페이지
              </ButtonForMoveToPage>
            </>
          ) : (
            <>
              <ButtonForMoveToPage onClick={onClickMoveToPage("/login")}>
                로그인
              </ButtonForMoveToPage>
              <ButtonForMoveToPage onClick={onClickMoveToPage("/signup")}>
                회원가입
              </ButtonForMoveToPage>
            </>
          )}
        </RightNavbar>
      </InnerWrapper>
    </Wrapper>
  );
}
