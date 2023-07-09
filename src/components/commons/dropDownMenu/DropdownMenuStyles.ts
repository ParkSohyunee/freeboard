import styled from "@emotion/styled";
import { DollarCircleOutlined, GiftOutlined } from "@ant-design/icons";
import { Modal } from "antd";

export const Wrapper = styled.div`
  position: relative;
  top: 5rem;
  left: 7.5rem;
  padding: 0.5rem;
  width: 188px;
  border-radius: var(--border-radius-regular);
  background: var(--font-color-white);
  box-shadow: 5px 2px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const GiftIcon = styled(GiftOutlined)`
  color: var(--font-color-lightPeach);
  font-size: 2rem;
`;

export const MyIcon = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export const Item = styled.div`
  font-size: 1rem;
`;

export const PointIcon = styled(DollarCircleOutlined)`
  color: var(--font-color-darkGrey);
  font-size: 1.2rem;
`;

export const Point = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const PointButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--color-light-beige);

  :hover {
    background: var(--color-light-beige);
    border-radius: 0.5rem;
  }
`;

export const PointButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: none;
  background: none;
`;

/* Modal for point charge */
export const ChargePointModal = styled(Modal)`
  .ant-modal-content {
    padding: 2.5rem;
    width: 464px;
    margin: auto;
  }
`;
