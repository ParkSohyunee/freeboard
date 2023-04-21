import Head from "next/head";
import UploadFile02 from "../../../commons/upload02/Upload02.container";
import { IProductUIProps } from "./ProductRegister.types";
import * as S from "./ProductStyles";
import { v4 as uuidv4 } from "uuid";

export default function ProductRegisterUI(props: IProductUIProps) {
  return (
    <>
      <S.Wrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
        <S.PageTitle>상품 등록하기</S.PageTitle>
        <S.ProductInfo>
          <S.Item>
            <S.SubTitle>상품명</S.SubTitle>
            <S.InputBox
              type="text"
              placeholder="상품명을 작성해주세요."
              {...props.register("name")}
              //   defaultValue={props.data?.fetchBoard.writer ?? ""}
            ></S.InputBox>
            <S.ErrorMessage>
              {props.formState.errors.name?.message}
            </S.ErrorMessage>
          </S.Item>
          <S.Item>
            <S.SubTitle>판매 가격</S.SubTitle>
            <S.InputBox
              type="text"
              placeholder="판매 가격을 입력해주세요."
              {...props.register("price")}
            ></S.InputBox>
            <S.ErrorMessage>
              {props.formState.errors.price?.message}
            </S.ErrorMessage>
          </S.Item>
        </S.ProductInfo>
        <S.TitleInfo>
          <S.SubTitle>한줄요약</S.SubTitle>
          <S.InputBoxTitle
            type="text"
            placeholder="상품을 한줄로 요약해주세요. 예시) 갤럭시 z플립3 (2021년 구매 / 256GB)"
            {...props.register("remarks")}
            // defaultValue={props.data?.fetchBoard.title}
          ></S.InputBoxTitle>
          <S.ErrorMessage>
            {props.formState.errors.remarks?.message}
          </S.ErrorMessage>
        </S.TitleInfo>
        <S.ContentsInfo>
          <S.SubTitle>상품설명</S.SubTitle>
          <S.TextBoxContents
            placeholder="내용을 작성해주세요."
            {...props.register("contents")}
            // defaultValue={props.data?.fetchBoard.contents}
          ></S.TextBoxContents>
          <S.ErrorMessage>
            {props.formState.errors.contents?.message}
          </S.ErrorMessage>
        </S.ContentsInfo>
        <S.Location>
          <S.kakaoMap>
            <S.SubTitle>거래위치</S.SubTitle>
            <S.Map id="map"></S.Map>
          </S.kakaoMap>
          <S.LocationDetail>
            <S.LocationInput>
              <S.SubTitle>GPS</S.SubTitle>
              <div>
                위도(LAT)
                <S.InputGPS readOnly type="text" value={props.lat}></S.InputGPS>
                경도(LNG)
                <S.InputGPS readOnly type="text" value={props.lng}></S.InputGPS>
              </div>
            </S.LocationInput>
            <S.LocationInput>
              <S.SubTitle>주소</S.SubTitle>
              <S.InputBoxTitle
                type="text"
                placeholder="거래주소를 입력해주세요."
                {...props.register("useditemAddress.address")}
              />
              <S.InputBoxTitle
                type="text"
                placeholder="상세주소를 입력해주세요."
                {...props.register("useditemAddress.addressDetail")}
              />
            </S.LocationInput>
          </S.LocationDetail>
        </S.Location>
        <S.TitleInfo>
          <S.SubTitle>태그입력</S.SubTitle>
          <S.InputBoxTitle
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
            // defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          ></S.InputBoxTitle>
          <S.ErrorMessage></S.ErrorMessage>
        </S.TitleInfo>
        <S.TitleInfo>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.Img>
            {props.fileUrls.map((el, index) => (
              <UploadFile02
                key={uuidv4()}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
                index={index}
              />
            ))}
          </S.Img>
        </S.TitleInfo>
        <S.TitleInfo>
          <S.SubTitle>메인 사진 설정</S.SubTitle>
          <S.MainSet>
            <S.Label>
              <S.RadioButton type="radio" name="main" value="img1" id="img1" />
              사진 1
            </S.Label>
            <S.Label>
              <S.RadioButton type="radio" name="main" value="img2" id="img2" />
              사진 2
            </S.Label>
          </S.MainSet>
        </S.TitleInfo>
        <S.Submit>
          <S.SubmitBtn type="submit" formState={props.formState}>
            등록하기
            {/* {props.isEdit ? "수정하기" : "등록하기"} */}
          </S.SubmitBtn>
        </S.Submit>
      </S.Wrapper>
    </>
  );
}
