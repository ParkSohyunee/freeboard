import * as S from "./ProductsListStyles";
import { getDate } from "../../../../commons/utils/date";
import InfiniteScroll from "react-infinite-scroller";
import { IProductsUIProps } from "./ProductsList.types";
import { Empty } from "antd";
import { EmptyStateContainer } from "../../../commons/custom/customComponent.styles";

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
                {el.images?.length !== 0 && el.images?.[0] !== "" ? (
                  <S.BestImg
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    //  onError={props.ImageError}
                  />
                ) : (
                  <EmptyStateContainer>
                    <Empty description={<span>이미지가 없습니다.</span>} />
                  </EmptyStateContainer>
                )}
                <S.BestName>{el.name}</S.BestName>
                <S.BestDescription>
                  <S.LeftSide>
                    <S.BestRemarks>{el.remarks}</S.BestRemarks>
                    <S.BestPrice>{`${el.price?.toLocaleString()}원`}</S.BestPrice>
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
          useWindow={false}
        >
          <S.ItemcardWrapper>
            {props.data?.fetchUseditems.map((el) => (
              <S.ItemCard
                key={el._id}
                onClick={props.onClickMoveToPage(`/products/${el._id}`)}
              >
                {el.images?.length !== 0 && el.images?.[0] !== "" ? (
                  <S.ItemImg
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                    // onError={props.ImageError}
                  />
                ) : (
                  <EmptyStateContainer>
                    <Empty description={<span>이미지가 없습니다.</span>} />
                  </EmptyStateContainer>
                )}
                <S.ItemInfo>
                  <S.TitleWrapper>
                    <S.Title>{el.name}</S.Title>
                    <S.Remarks>{el.remarks}</S.Remarks>
                  </S.TitleWrapper>
                  <S.TagsWrapper>
                    {el.tags?.map((tag, index) => (
                      <S.Tags key={index}>{tag}</S.Tags>
                    ))}
                  </S.TagsWrapper>
                  <S.SellerWrapper>
                    <S.Seller>
                      <img
                        src="/avatar.png"
                        style={{ marginRight: "0.5rem" }}
                      />
                      <div>{el.seller?.name ? el.seller.name : "판매자"}</div>
                    </S.Seller>
                    <S.PickWrapper>
                      <S.HeartIcon />
                      <S.PickCountList>{el.pickedCount}</S.PickCountList>
                    </S.PickWrapper>
                    <div>{getDate(el.createdAt)}</div>
                  </S.SellerWrapper>
                </S.ItemInfo>
                <S.ItemPrice>
                  <div>{`${el.price?.toLocaleString()}원`}</div>
                </S.ItemPrice>
              </S.ItemCard>
            ))}
          </S.ItemcardWrapper>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
