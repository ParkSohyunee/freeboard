import {WrapperDetail, LeftHead, Avatar, Writer, WriterName, Date, WrapperTop, Line
, BoardTitle, ImgBox, BoardContent, Video, BoardBtn, BtnStyle} from "../../../styles/emotion"

export default function BoardsDetailPage(){

    return (
        <>
        <WrapperDetail>
            <WrapperTop>
                <LeftHead>
                    <Avatar src="/ic_profile-56px.png"></Avatar>
                    <Writer>
                        <WriterName>작성자</WriterName>
                        <Date>Date : 2021.02.18</Date>
                    </Writer>
                </LeftHead>
                <Line></Line>
                <BoardTitle>게시글 제목입니다.</BoardTitle>
                <ImgBox></ImgBox>
                <BoardContent>내용</BoardContent>
                <Video>비디오재생</Video>
            </WrapperTop>
            <BoardBtn>
                <BtnStyle>목록보기</BtnStyle>
                <BtnStyle>수정하기</BtnStyle>
                <BtnStyle>삭제하기</BtnStyle>
            </BoardBtn>
        </WrapperDetail>           
        </>
    )
}