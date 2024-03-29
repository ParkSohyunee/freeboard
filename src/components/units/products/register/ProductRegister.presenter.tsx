import { Modal } from "antd";
import UploadFile from "../../../commons/upload/Upload.container";
import { IProductUIProps } from "./ProductRegister.types";
import * as S from "./ProductStyles";
import { v4 as uuidv4 } from "uuid";
import DaumPostcodeEmbed from "react-daum-postcode";
import Kakaomap from "../../../commons/kakaomap/kakaomap";

export default function ProductRegisterUI(props: IProductUIProps) {
  return (
    <>
      <S.Wrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onclickSubmit
        )}
      >
        <S.PageTitle>상품 {props.isEdit ? "수정하기" : "등록하기"}</S.PageTitle>
        <S.ProductInfo>
          <S.Item>
            <S.SubTitle>상품명</S.SubTitle>
            <S.InputBox
              type="text"
              placeholder="상품명을 작성해주세요."
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name ?? ""}
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
              defaultValue={props.data?.fetchUseditem.price ?? ""}
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
            defaultValue={props.data?.fetchUseditem.remarks ?? ""}
          ></S.InputBoxTitle>
          <S.ErrorMessage>
            {props.formState.errors.remarks?.message}
          </S.ErrorMessage>
        </S.TitleInfo>
        <S.ContentsInfo>
          <S.SubTitle>상품설명</S.SubTitle>
          <props.ReactQuill
            theme="snow"
            onChange={props.handleChange}
            placeholder="내용을 작성해주세요."
          />
          <S.ErrorMessage>
            {props.formState.errors.contents?.message}
          </S.ErrorMessage>
        </S.ContentsInfo>
        <S.Location>
          <S.kakaoMap>
            <S.SubTitle>거래위치</S.SubTitle>
            <S.Map>
              <Kakaomap address={props.address} data={props.data} />
            </S.Map>
          </S.kakaoMap>
          <S.LocationDetail>
            <S.LocationInput>
              <S.AddressSearch type="button" onClick={props.onToggleModal}>
                주소검색
              </S.AddressSearch>
              <Modal
                open={props.isModalOpen}
                onOk={props.onToggleModal}
                onCancel={props.onToggleModal}
                destroyOnClose={true}
                okText="확인"
                cancelText="취소"
              >
                <DaumPostcodeEmbed onComplete={props.handleComplete} />
              </Modal>
              <S.InputBoxTitle
                readOnly
                placeholder="주소를 검색해주세요."
                value={
                  (props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address) ??
                  ""
                }
              />
              <S.InputBoxTitle
                type="text"
                placeholder="상세주소를 입력해주세요."
                {...props.register("useditemAddress.addressDetail")}
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                }
              />
            </S.LocationInput>
          </S.LocationDetail>
        </S.Location>
        <S.TitleInfo>
          <S.SubTitle>태그입력</S.SubTitle>
          <S.InputBoxTitle
            type="text"
            placeholder="스페이스바(spacebar)로 태그를 넣어주세요."
            onKeyUp={props.onKeyUp}
          />
          <div>
            {props.tagArr.map((el, index) => (
              <S.TagWrapper
                key={index}
                id={el}
                onClick={props.onClickDeleteTag}
              >
                {el} x
              </S.TagWrapper>
            ))}
          </div>
          <S.ErrorMessage></S.ErrorMessage>
        </S.TitleInfo>
        <S.TitleInfo>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.Img>
            {props.fileUrls.map((el, index) => (
              <UploadFile
                key={uuidv4()}
                fileUrl={el}
                deleteFileByIndex={props.deleteFileByIndex}
                onChangeFileUrls={props.onChangeFileUrls}
                index={index}
              />
            ))}
          </S.Img>
        </S.TitleInfo>
        <S.Submit>
          <S.SubmitBtn type="submit" formState={props.formState}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.Submit>
      </S.Wrapper>
    </>
  );
}
