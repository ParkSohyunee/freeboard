import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  height: 152px;
`;
export const InnerWrapper = styled.div`
  padding: 1.8rem;
  margin: auto;
  width: 1200px;
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
  font-weight: 500;
`;
const InnerButton = styled.span`
  padding: 0.8rem;
  cursor: pointer;

  :hover {
    text-decoration: underline 0.3rem yellow;
  }
`;

export default function LayoutHead() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo>메인아이콘</InnerLogo>
        <RightNavbar>
          <InnerButton onClick={onClickMoveToPage("/login")}>
            로그인
          </InnerButton>
          <span>|</span>
          <InnerButton onClick={onClickMoveToPage("/signup")}>
            회원가입
          </InnerButton>
        </RightNavbar>
      </InnerWrapper>
    </Wrapper>
  );
}
