import SimpleSlider from "../../../commons/slick";
import { IProductDetailUIProps } from "./ProductDetail.types";
import DOMPurify from "dompurify";
import * as S from "./ProductDetailStyles";
import { HeartFilled } from "@ant-design/icons";
import ProductsCommentRegister from "../../products_comment/question/register/ProductsCommentRegister.contatiner";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ItemImageWrapper style={{ width: 480 }}>
          {props.data?.fetchUseditem.images ? (
            <SimpleSlider el={props.data?.fetchUseditem.images} />
          ) : (
            <S.ItemImage />
          )}
        </S.ItemImageWrapper>
        <S.ItemInfo>
          <S.ItemInfoWrapper>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
            <div>
              <S.ButtonOption
                onClick={props.onClickMoveToPage(`/home/${props.path}/edit`)}
              >
                <img src="/option/option_update_icon.png" />
              </S.ButtonOption>
              <S.ButtonOption onClick={props.onClickDeleteItem}>
                <img src="/option/option_delete_icon.png" />
              </S.ButtonOption>
            </div>
          </S.ItemInfoWrapper>
          <S.ItemPrice>
            <S.price>{props.data?.fetchUseditem.price}</S.price>
            <S.PriceUnit>원</S.PriceUnit>
          </S.ItemPrice>
          <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
          <S.ItemTages>{props.data?.fetchUseditem.tags}</S.ItemTages>
          <S.ItemBuyOption>
            <S.buttonToggle onClick={props.onClickItemPick}>
              <HeartFilled style={{ color: "pink", marginRight: "0.5rem" }} />
              {props.data?.fetchUseditem.pickedCount}
            </S.buttonToggle>
            <S.buttonbasket>장바구니</S.buttonbasket>
            <S.buttonBuy>바로구매</S.buttonBuy>
          </S.ItemBuyOption>
        </S.ItemInfo>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.LeftWrapper>
          <S.Title>상점정보</S.Title>
          <S.Seller>
            <S.SellerAvatar />
            <S.SellerName>
              {props.data?.fetchUseditem.seller?.name}
            </S.SellerName>
          </S.Seller>
          <S.Title>상품정보</S.Title>
          <S.ItemContents>
            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              ></S.Contents>
            ) : (
              <S.Contents></S.Contents>
            )}
            <S.Location>
              <S.SubTitle>거래지역</S.SubTitle>
              <S.kakaomap id="map">카카오지도</S.kakaomap>
            </S.Location>
          </S.ItemContents>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.CommentWrapper>
            <S.Title>댓글</S.Title>
            <S.CommentWrite>
              <ProductsCommentRegister></ProductsCommentRegister>
            </S.CommentWrite>
            <S.CommentList></S.CommentList>
          </S.CommentWrapper>
        </S.RightWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
