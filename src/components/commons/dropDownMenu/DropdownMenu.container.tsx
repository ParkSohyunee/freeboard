import { useState } from "react";
import { useQuery } from "@apollo/client";

import PointCharge from "../pointCharge/PointCharge.container";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "./DropdownMenu.queries";
import * as S from "./DropdownMenuStyles";

export default function DropdownMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <S.ChargePointModal
        open={isModalOpen}
        footer={null}
        onCancel={onClickModalOpen}
        centered
      >
        <PointCharge data={data} />
      </S.ChargePointModal>

      <S.Wrapper>
        <S.Profile>
          <S.GiftIcon />
          <S.MyIcon>
            <S.Item>{data?.fetchUserLoggedIn.name}</S.Item>
            <S.Point>
              <S.Item>{data?.fetchUserLoggedIn.userPoint?.amount}</S.Item>
              <S.Item>p</S.Item>
            </S.Point>
          </S.MyIcon>
        </S.Profile>
        <S.PointButtonContainer>
          <S.PointIcon />
          <S.PointButton onClick={onClickModalOpen}>충전하기</S.PointButton>
        </S.PointButtonContainer>
      </S.Wrapper>
    </>
  );
}
