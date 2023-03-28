import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { IBoardRegisterUIProps } from "./BoardRegister.types";
import * as S from "./BoardRegisterStyles";

export default function BoardRegisterUI(props: IBoardRegisterUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.PageTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.PageTitle>
        <S.WriterInfo>
          <S.Item>
            <S.SubTitle>작성자</S.SubTitle>
            <S.InputBox
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
            ></S.InputBox>
            <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
          </S.Item>
          <S.Item>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.InputBox
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            ></S.InputBox>
            <S.ErrorMessage>{props.pwdError}</S.ErrorMessage>
          </S.Item>
        </S.WriterInfo>
        <S.TitleInfo>
          <S.SubTitle>제목</S.SubTitle>
          <S.InputBoxTitle
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          ></S.InputBoxTitle>
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.TitleInfo>
        <S.ContentsInfo>
          <S.SubTitle>내용</S.SubTitle>
          <S.TextBoxContents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          ></S.TextBoxContents>
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.ContentsInfo>
        <S.Address>
          <S.SubTitle>주소</S.SubTitle>
          <S.Zip>
            <S.ZipCode
              readOnly
              value={
                props.zipcode ||
                (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
              }
            ></S.ZipCode>
            <S.ZipCodeSearch onClick={props.onToggleModal}>
              우편번호 검색
            </S.ZipCodeSearch>
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
          </S.Zip>
          <S.InputBoxTitle
            readOnly
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
          ></S.InputBoxTitle>
          <S.InputBoxTitle
            type="text"
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          ></S.InputBoxTitle>
        </S.Address>
        <S.TitleInfo>
          <S.SubTitle>유튜브</S.SubTitle>
          <S.InputBoxTitle
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          ></S.InputBoxTitle>
          <S.ErrorMessage>{props.youtubeUrlError}</S.ErrorMessage>
        </S.TitleInfo>
        <S.TitleInfo>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.Img>
            <S.ImgAttach></S.ImgAttach>
            <S.ImgAttach></S.ImgAttach>
            <S.ImgAttach></S.ImgAttach>
          </S.Img>
        </S.TitleInfo>
        <S.TitleInfo>
          <S.SubTitle>메인 설정</S.SubTitle>
          <S.MainSet>
            <S.Label>
              <S.RadioButton
                type="radio"
                name="main"
                value="youtube"
                id="youtube"
              />
              유튜브
            </S.Label>
            <S.Label>
              <S.RadioButton type="radio" name="main" value="img" id="img" />
              사진
            </S.Label>
          </S.MainSet>
        </S.TitleInfo>
        <S.Submit>
          <S.SubmitBtn
            onClick={
              props.isEdit ? props.onClickUpdate : props.onClickValidation
            }
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.Submit>
      </S.Wrapper>
    </>
  );
}
