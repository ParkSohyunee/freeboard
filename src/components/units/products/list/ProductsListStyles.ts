import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1200px;
  overflow: auto;

  @media ${breakPoints.tablet} {
    width: 700px;
  }
`;

export const BestItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 2rem;
`;

export const BestItemTitle = styled.h1`
  text-align: center;
`;

export const BestItemCards = styled.div`
  border-top-right-radius: var(--border-radius-regular);
  border-top-left-radius: var(--border-radius-regular);
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const BestImg = styled.img`
  width: 100%;
  height: 242px;
  background-color: var(--font-color-lightPeach);
  border-top-right-radius: var(--border-radius-regular);
  border-top-left-radius: var(--border-radius-regular);
`;

export const BestItemCard = styled.div`
  cursor: pointer;
  width: 282px;
  height: 391px;
  border-radius: var(--border-radius-regular);
  background: var(--font-color-white);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const BestDescription = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const BestName = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
`;

export const ButtonWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export const PencilImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BestRemarks = styled.div`
  color: var(--font-color-darkGrey);
  font-size: var(--font-size-small);
`;

export const BestPrice = styled.div`
  font-size: var(--font-size-semiregular);
  font-weight: var(--font-weight-semibold);
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const HeartIcon = styled(HeartFilled)`
  color: var(--font-color-lightBeen);
  font-size: var(--font-size-semiregular);
`;

export const PickCount = styled.div``;

export const ItemcardWrapper = styled.div`
  /* height: 1006px; */
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media ${breakPoints.tablet} {
    margin: 0;
    width: 100%;
  }
`;

export const ItemCard = styled.div`
  cursor: pointer;
  padding: 1.2rem 2rem 0 2rem;
  width: 100%;
  height: 181px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-top: 1px solid #bdbdbd;

  @media ${breakPoints.tablet} {
    padding: 1.2rem 1rem 0 1rem;
    gap: 1rem;
  }
`;

export const ItemImg = styled.img`
  width: 160px;
  height: 160px;
  background: #eeeeee;
  border-radius: var(--border-radius-small);
`;

export const ItemInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${breakPoints.tablet} {
    width: 50%;
  }
`;

export const ItemPrice = styled.div`
  width: 20%;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 2rem;
  text-align: end;
  white-space: nowrap;

  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
    padding: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  /* white-space: nowrap; */

  @media ${breakPoints.tablet} {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;

  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }
`;

export const Remarks = styled.div`
  color: #4f4f4f;
  font-weight: 500;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const TagsWrapper = styled.div`
  color: #bdbdbd;
  font-weight: 500;
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const Tags = styled.span`
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-medium-beige);
  color: white;
  line-height: 1.5rem;
`;

export const SellerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.5rem;
  align-items: center;
`;

export const Seller = styled.div`
  display: flex;
  align-items: center;
`;

export const PickWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const PickCountList = styled.div``;
