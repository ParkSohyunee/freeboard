import styled from "@emotion/styled";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import { ButtonForMoveToPage } from "../../custom/customComponent.styles";

const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export default function LayoutNavbar() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <ButtonForMoveToPage onClick={onClickMoveToPage("/boards")}>
        자유 게시판
      </ButtonForMoveToPage>
      <div>|</div>
      <ButtonForMoveToPage onClick={onClickMoveToPage("/products")}>
        중고 마켓
      </ButtonForMoveToPage>
    </Wrapper>
  );
}
