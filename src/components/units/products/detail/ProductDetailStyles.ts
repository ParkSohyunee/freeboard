import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px; */
  padding: 60px 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;
export const TopWrapper = styled.section`
  width: 100%;
  height: 480px;
  // padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;
export const ItemImageWrapper = styled.div`
  width: 480px;
`;
export const ItemImage = styled.img`
  width: 480px;
  height: 480px;
  background-color: #e9e9e9;
`;
export const ItemInfo = styled.div`
  // width: 100%;
  width: 820px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
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
  border-bottom: 3px solid #555555;
  padding: 1.2rem 0;
`;
export const price = styled.span`
  font-size: 2.5rem;
  margin-right: 0.5rem;
`;
export const PriceUnit = styled.span`
  font-size: 1.2rem;
`;
export const ItemRemarks = styled.div`
  padding: 1rem 0;
  height: 7rem;
  font-size: 1.2rem;
`;
export const ItemTages = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #c0c0c0;
`;
export const ItemBuyOption = styled.div`
  width: 100%;
  padding: 2.2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;
export const buttonToggle = styled.button`
  width: 20%;
  font-size: 1.8rem;
  padding: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid lightgrey;

  :active {
    background: black;
    color: white;
  }
`;
export const buttonbasket = styled.button`
  width: 40%;
  font-size: 1.8rem;
  padding: 1.8rem;
  border-radius: 0.5rem;
  border: 1px solid lightgrey;
  cursor: pointer;
`;
export const buttonBuy = styled.button`
  width: 40%;
  font-size: 1.8rem;
  padding: 1.8rem;
  border-radius: 0.5rem;
  border: 1px solid lightgrey;
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
  border-bottom: 3px solid #555555;
`;
export const ItemContents = styled.div`
  padding: 1rem;
`;
export const Contents = styled.div`
  padding: 1rem;
  /* .p {
    height: 180px;
  } */
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

export const CommentWrite = styled.div``;

export const CommentList = styled.div``;
