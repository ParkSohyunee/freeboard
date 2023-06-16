import styled from "@emotion/styled";
import { Empty } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;
export const TopWrapper = styled.section`
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;
export const ItemImageWrapper = styled.div`
  width: 480px;
  height: 480px;
`;
export const ItemInfo = styled.div`
  // width: 100%;
  width: 820px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ItemInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ItemName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ButtonOption = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const ItemPrice = styled.div`
  border-bottom: 0.5px solid var(--font-color-darkGrey);
  padding-bottom: 1rem;
`;
export const price = styled.span`
  margin-right: 0.5rem;
  font-size: var(--font-size-regular);
  font-weight: var(--font-weight-medium);
`;
export const PriceUnit = styled.span`
  font-size: 1.2rem;
`;
export const ItemRemarks = styled.div`
  height: 5rem;
  color: var(--font-color-darkGrey);
`;
// 태그
export const ItemTages = styled.div``;
export const TagWrapper = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem;
  font-weight: var(--font-weight-semibold);
  border: none;
  border-radius: var(--border-radius-small);
  background: var(--color-medium-beige);
  color: white;
`;
export const ItemBuyOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;
export const buttonToggle = styled.button`
  width: 20%;
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--color-light-brown);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  border: 1px solid var(--color-dark-brown);
`;

export const buttonList = styled.button`
  width: 40%;
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--color-light-brown);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--color-dark-brown);
  cursor: pointer;
`;

export const buttonBuy = styled.button`
  width: 40%;
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--color-light-brown);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--color-dark-brown);
  cursor: pointer;
`;
export const BottomWrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  height: 1170px;
`;
export const LeftWrapper = styled.div`
  width: 60%;
  border-right: 1px solid #555555;
  padding-right: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Title = styled.h1`
  padding: 2rem 0;
  border-bottom: 0.5px solid var(--font-color-darkGrey);
`;
export const ItemContents = styled.div`
  padding: 1rem;
`;
export const Contents = styled.div`
  padding: 1rem;
`;
export const Location = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
export const SubTitle = styled.h3``;
export const kakaomap = styled.div`
  padding: 1rem;
  height: 400px;
  border: 1px solid darkgray;
`;
export const RightWrapper = styled.div`
  width: 40%;
  padding-left: 2.2rem;
`;
export const SellerInfo = styled.div``;
export const Seller = styled.div`
  padding: 1rem;
`;
export const SellerAvatar = styled.img``;

export const SellerName = styled.span`
  font-size: var(--font-size-regular);
`;

export const CommentWrapper = styled.div``;

export const CommentWrite = styled.div`
  padding: 1rem 0;
`;

export const CommentList = styled.div``;
