import { HeartFilled } from "@ant-design/icons";
import * as S from "./ProductsListStyles";
import { getDate } from "../../../../commons/utils/date";
import InfiniteScroll from "react-infinite-scroller";
import { IProductsUIProps } from "./ProductsList.types";

export default function ProductsListUI(props: IProductsUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BestItemWrapper>
          <S.BestItemTitle>Best</S.BestItemTitle>
          <S.BestItemCards>
            {props.dataBestItem?.fetchUseditemsOfTheBest.map((el) => (
              <S.BestItemCard
                key={el._id}
                onClick={props.onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.BestImg></S.BestImg>
                {/* <img
                  src={`https://storage.googleapis.com/${
                    el.images?.filter((el) => el !== "")[0]
                  }`}
                /> */}
                <S.BestName>{el.name}</S.BestName>
                <S.BestDescription>
                  <S.LeftSide>
                    <S.BestRemarks>{el.remarks}</S.BestRemarks>
                    <S.BestPrice>{el.price}</S.BestPrice>
                  </S.LeftSide>
                  <S.RightSide>
                    <S.HeartIcon />
                    <S.PickCount>{el.pickedCount}</S.PickCount>
                  </S.RightSide>
                </S.BestDescription>
              </S.BestItemCard>
            ))}
          </S.BestItemCards>
        </S.BestItemWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true} // 다음페이지 여부 --> 있으면 loadMore 실행
          useWindow={true}
        >
          <S.ItemcardWrapper>
            {props.data?.fetchUseditems.map((el) => (
              <S.ItemCard
                key={el._id}
                onClick={props.onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.ItemImg
                  src={
                    el.images?.filter((el) => el !== "")
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : ""
                  }

                  //   src={
                  //     el.images
                  //       ? `https://storage.googleapis.com/${el.images}`
                  //       : ""
                  //   }
                />
                <S.ItemInfo>
                  <S.TitleWrapper>
                    <S.Title>{el.name}</S.Title>
                    <S.Remarks>{el.remarks}</S.Remarks>
                  </S.TitleWrapper>
                  <S.Tags>{el.tags}</S.Tags>
                  <S.SellerWrapper>
                    <div>
                      <img
                        src="/avatar.png"
                        style={{ marginRight: "0.5rem" }}
                      />
                      <span>{el.seller?.name ? el.seller.name : "판매자"}</span>
                    </div>
                    <S.PickWrapper>
                      <S.HeartIcon />
                      <S.PickCountList>{el.pickedCount}</S.PickCountList>
                    </S.PickWrapper>
                    <div>{getDate(el.createdAt)}</div>
                  </S.SellerWrapper>
                </S.ItemInfo>
                <S.ItemPrice>
                  <div>{`${el.price}원`}</div>
                </S.ItemPrice>
              </S.ItemCard>
            ))}
          </S.ItemcardWrapper>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
