import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { Avatar, message } from "antd";
import { IMutation } from "../../../../commons/types/generated/types";
import { useState } from "react";
import Profile01 from "../../profile/Profile01.container";
import { ButtonForMoveToPage } from "../../custom/customComponent.styles";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div`
  height: 107px;
`;

const InnerWrapper = styled.div`
  padding: 1.8rem;
  margin: auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

const InnerLogo = styled.div`
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

const UserAvatar = styled(Avatar)`
  margin-right: 0.5rem;
  background-color: #eaf5cf;
  cursor: pointer;
  color: var(--font-color-Grass);
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHead() {
  const client = useApolloClient();

  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isActive, setIsActive] = useState(false);

  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickActive = () => {
    setIsActive((prev) => !prev);
  };

  // recoil에 저장되어있는 accessToken을 없애주는 작업
  // 로그인하고 받아온 데이터들(ApolloClient에 캐시된 서버 데이터들)을 없애주는 작업
  const onclickLogout = async () => {
    try {
      // cookie에 저장되어있는 refreshToken 삭제
      const result = await logoutUser();

      if (result.data?.logoutUser) {
        message.success({ content: "로그아웃 되었습니다." });
        setAccessToken(""); // recoil에 저장되어있는 accessToken 삭제

        // apollo-cache에 저장되어있는 유저데이터 삭제
        await client.clearStore();

        location.reload(); // 화면 새로고침
      }
    } catch (error) {
      if (error instanceof Error) message.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>🍋 free market </InnerLogo>
        <RightNavbar>
          {accessToken ? (
            <>
              {isActive && <Profile01 />}
              <UserAvatar onClick={onClickActive} size="large">
                U
              </UserAvatar>
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
