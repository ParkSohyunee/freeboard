import styled from "@emotion/styled";
import { DollarCircleOutlined, GiftOutlined } from "@ant-design/icons";
import { Modal } from "antd";

export const Wrapper = styled.div`
  position: relative;
  top: 8rem;
  left: 9rem;
  width: 258px;
  height: 180px;
  border-radius: var(--border-radius-regular);
  background: var(--font-color-white);
  box-shadow: 5px 2px 10px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
export const Profile = styled.div`
  padding: 1.2rem;
  height: 60%;
  display: flex;
  padding: 0.8rem;
  gap: 1rem;
`;
export const MyIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Main = styled.div`
  cursor: pointer;
  height: 40%;
  padding: 0.8rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  border-top: 1px solid var(--font-color-lightPeach);
  :hover {
    background: var(--color-light-beige);
    border-radius: 0.5rem;
  }
`;
export const PointIcon = styled(DollarCircleOutlined)`
  color: var(--font-color-darkGrey);
  font-size: 1.5rem;
`;

export const Item = styled.div`
  font-size: var(--font-size-semiregular);
`;

export const Point = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const PointButton = styled.button`
  cursor: pointer;
  font-size: var(--font-size-semiregular);
  border: none;
  background: none;
`;

export const GiftIcon = styled(GiftOutlined)`
  color: var(--font-color-lightPeach);
  font-size: 4rem;
`;

/* Modal for Payment */
// export const Mymodal = styled(Modal)`
//   .ant-modal-content {
//     padding: 2.5rem;
//     width: 464px;
//     margin: auto;
//   }
// `;
// export const ModalWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.5rem;
// `;
// export const PaymentIcon = styled.img`
//   width: 79px;
//   height: 54px;
// `;
// export const PaymentTitle = styled.div`
//   font-size: var(--font-size-semiregular);
//   font-weight: var(--font-weight-medium);
// `;
// export const PaymentOption = styled.select`
//   cursor: pointer;
//   width: 100%;
//   border: none;
//   padding: 0.9rem;
//   border-bottom: 1px solid black;
//   font-size: 1rem;
// `;
// export const PaymentBtn = styled.button`
//   width: 100%;
//   cursor: pointer;
//   padding: 0.9rem;
//   border-radius: var(--border-radius-small);
//   font-size: 1rem;
//   border: none;
// `;
