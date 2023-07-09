import { Modal } from "antd";

import styled from "@emotion/styled";
import { IPointOptionsProps } from "./PointCharge.types";

export const ChargePointModal = styled(Modal)`
  .ant-modal-content {
    padding: 2.5rem;
    width: 464px;
    margin: auto;
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Icon = styled.img`
  width: 79px;
  height: 54px;
`;

export const Title = styled.div`
  font-size: var(--font-size-semiregular);
  font-weight: var(--font-weight-medium);
`;

export const PointSelectContainer = styled.div`
  width: 80%;
  padding: 0.5rem;
  border-bottom: 1px solid var(--font-color-darkGrey);
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`;

export const PointOptions = styled.ul`
  padding: 0.5rem;
  list-style: none;
  width: 80%;
  font-size: 1rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  display: ${(props: IPointOptionsProps) =>
    props.isOptionsOpen ? "block" : "none"};
`;

export const PointOption = styled.li`
  width: 100%;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: #fafafa;
    border-radius: var(--border-radius-small);
  }
`;

export const PointChargeBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  border-radius: var(--border-radius-small);
  font-size: 1rem;
  border: none;
  background-color: var(--color-light-beige);
  cursor: pointer;
`;
