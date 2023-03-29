import { Rate } from "antd";
import * as S from "./CommentRegisterStyles";
import { IBoardCommentRegisterProps } from "./CommnetRegister.types";

export default function BoardCommentUI(props: IBoardCommentRegisterProps) {
  return (
    <S.Wrapper>
      <S.Headers>
        <S.PencilIcon src="/yellow-pencil-img.png" />
        <S.HeadersTitle>댓글</S.HeadersTitle>
        <Rate
          tooltips={props.desc}
          onChange={props.onChangeStar}
          value={props.star}
        />
      </S.Headers>
      <S.InputWrapper>
        <S.Input
          onChange={props.onChangeWriter}
          type="text"
          placeholder="작성자"
        ></S.Input>
        <S.Input
          onChange={props.onChangePassword}
          type="password"
          placeholder="비밀번호"
        ></S.Input>
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          onChange={props.onChangeContents}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></S.Contents>
      </S.ContentsWrapper>
      <S.BottomWrapper>
        <S.ContentsLength>{props.contents.length} / 100</S.ContentsLength>
        <S.Button onClick={props.onClickSubmit} isActive={props.isActive}>
          등록하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}