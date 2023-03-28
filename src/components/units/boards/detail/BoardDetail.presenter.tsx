import ReactPlayer from "react-player";
import { IBoardDetailProps } from "./BoardDetail.types";
import * as S from "./BoardDetailStyles";

export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <>
      <S.WrapperDetail>
        <S.WrapperTop>
          <S.LeftHead>
            <S.Avatar src="/ic_profile-56px.png"></S.Avatar>
            <S.Writer>
              <S.WriterName>{props.data?.fetchBoard.writer}</S.WriterName>
              <S.Date>{props.data?.fetchBoard.createdAt}</S.Date>
            </S.Writer>
          </S.LeftHead>
          <S.Line></S.Line>
          <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>
          <S.ImgBox></S.ImgBox>
          <S.BoardContent>{props.data?.fetchBoard.contents}</S.BoardContent>
          <S.PlayerWrapper>
            <ReactPlayer
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              muted={true}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
            />
          </S.PlayerWrapper>
          <S.Reaction>
            <S.ReactionBox onClick={props.onClickLikeCount}>
              <S.LikeIcon />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.ReactionBox>
            <S.ReactionBox onClick={props.onClickDislikeCount}>
              <S.DislikeIcon />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.ReactionBox>
          </S.Reaction>
        </S.WrapperTop>
        <S.BoardBtn>
          <S.BtnStyle>목록보기</S.BtnStyle>
          <S.BtnStyle onClick={props.onClickMoveToEdit}>수정하기</S.BtnStyle>
          <S.BtnStyle onClick={props.onClickDelete}>삭제하기</S.BtnStyle>
        </S.BoardBtn>
      </S.WrapperDetail>
    </>
  );
}
