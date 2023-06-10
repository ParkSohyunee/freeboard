import SimpleSlider from "../../../commons/slick";
import { IProductDetailUIProps } from "./ProductDetail.types";
import DOMPurify from "dompurify";
import * as S from "./ProductDetailStyles";
import { HeartFilled } from "@ant-design/icons";
import ProductsCommentRegister from "../../products_comment/question/register/ProductsCommentRegister.contatiner";
import ProductsCommentList from "../../products_comment/question/list/PdocuctsCommentList.container";
import Kakaomap from "../../../commons/kakaomap/kakaomap";
import { Empty, Popconfirm } from "antd";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.ItemImageWrapper>
          {props.data?.fetchUseditem.images?.length !== 0 ? (
            <SimpleSlider el={props.data?.fetchUseditem.images} />
          ) : (
            <Empty
              description={<span>이미지가 없습니다.</span>}
              imageStyle={{
                height: "100%",
                paddingTop: "6rem",
              }}
              style={{ fontSize: "1.5rem" }}
            />
          )}
        </S.ItemImageWrapper>
        <S.ItemInfo>
          <S.ItemInfoWrapper>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>
            <div>
              <S.ButtonOption
                onClick={props.onClickMoveToPage(
                  `/products/${props.path}/edit`
                )}
              >
                <img src="/option/option_update_icon.png" />
              </S.ButtonOption>
              <Popconfirm
                placement="topRight"
                title="글을 삭제하시겠습니까?"
                onConfirm={props.onClickDeleteItem}
                okText="예"
                cancelText="아니오"
              >
                <S.ButtonOption>
                  <img src="/option/option_delete_icon.png" />
                </S.ButtonOption>
              </Popconfirm>
            </div>
          </S.ItemInfoWrapper>
          <S.ItemPrice>
            <S.price>
              {props.data?.fetchUseditem.price?.toLocaleString()}
            </S.price>
            <S.PriceUnit>원</S.PriceUnit>
          </S.ItemPrice>
          <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
          <S.ItemTages>
            {props.data?.fetchUseditem.tags?.map((el, index) => (
              <S.TagWrapper key={index}>{el}</S.TagWrapper>
            ))}
          </S.ItemTages>
          <S.ItemBuyOption>
            <S.buttonToggle onClick={props.onClickItemPick}>
              <HeartFilled style={{ color: "pink", marginRight: "0.5rem" }} />
              {props.data?.fetchUseditem.pickedCount}
            </S.buttonToggle>
            <S.buttonbasket>장바구니</S.buttonbasket>
            <S.buttonBuy onClick={props.onClickBuyUseditem}>
              구매하기
            </S.buttonBuy>
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
              <S.kakaomap>
                <Kakaomap
                  address={
                    props.data?.fetchUseditem.useditemAddress?.address || ""
                  }
                />
              </S.kakaomap>
            </S.Location>
          </S.ItemContents>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.CommentWrapper>
            <S.Title>댓글</S.Title>
            <S.CommentWrite>
              <ProductsCommentRegister isEdit={false}></ProductsCommentRegister>
            </S.CommentWrite>
            <S.CommentList>
              <ProductsCommentList />
            </S.CommentList>
          </S.CommentWrapper>
        </S.RightWrapper>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
