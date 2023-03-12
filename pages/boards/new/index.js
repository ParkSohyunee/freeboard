import { useState } from 'react'
import {Wrapper, PageTitle, WriterInfo, Item, InputBox, ErrorMessage, SubTitle, 
    InputBoxTitle, TitleInfo, ContentsInfo, TextBoxContents, Address, Zip, 
    ZipCode, ZipCodeSearch, Img, ImgAttach, MainSet, Label, 
    RadioButton, Submit, SubmitBtn} from '../../../styles/emotion'

export default function Board() {

    const [ writer, setWriter] = useState("")
    const [ password, setPassword] = useState("")
    const [ title, setTitle] = useState("")
    const [ contents, setContents] = useState("")

    const [ writerError, setWriterError] = useState("")
    const [ pwdError, setPwdError] = useState("")
    const [ titleError, setTitleError] = useState("")
    const [ contentsError, setContentsError] = useState("")

    const onChangeWriter = (event) => setWriter(event.target.value)
    const onChangePassword = (event) => setPassword(event.target.value)
    const onChangeTitle = (event) => setTitle(event.target.value)
    const onChangeContents = (event) => setContents(event.target.value)

    const onClickValidation = () => {
        console.log(writer);
    
        if (!writer) { 
            setWriterError("작성자를 입력해주세요.") 
        } else {
            setWriterError("")
        }
        if (!password) { 
            setPwdError("비밀번호를 입력해주세요.") 
        } else {
            setPwdError("")
        }
        if (!title) { 
            setTitleError("제목을 입력해주세요.") 
        } else {
            setTitleError("")
        }
        if (!contents) { 
            setContentsError("내용을 입력해주세요.") 
        } else {
            setContentsError("")
        }
        if (writer && password && title && contents){
            alert("게시물 등록이 완료되었습니다.")
        }
    }

    return (
        <Wrapper>
            <PageTitle>게시물 등록</PageTitle>
            <WriterInfo>
                <Item>
                    <SubTitle>작성자</SubTitle>
                    <InputBox type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter}></InputBox>
                    <ErrorMessage>{writerError}</ErrorMessage>
                </Item>
                <Item>
                    <SubTitle>비밀번호</SubTitle>
                    <InputBox type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}></InputBox>
                    <ErrorMessage>{pwdError}</ErrorMessage>
                </Item>
            </WriterInfo>
            <TitleInfo>
                <SubTitle>제목</SubTitle>
                <InputBoxTitle type="text" placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></InputBoxTitle>
                <ErrorMessage>{titleError}</ErrorMessage>
            </TitleInfo>
            <ContentsInfo>
                <SubTitle>내용</SubTitle>
                <TextBoxContents placeholder='내용을 작성해주세요.' onChange={onChangeContents}></TextBoxContents>
                <ErrorMessage>{contentsError}</ErrorMessage>
            </ContentsInfo>
            <Address>
                <SubTitle>주소</SubTitle>
                <Zip>
                    <ZipCode type="number"></ZipCode>
                    <ZipCodeSearch>우편번호 검색</ZipCodeSearch>
                </Zip>
                <InputBoxTitle type="text"></InputBoxTitle>
                <InputBoxTitle type="text"></InputBoxTitle>
            </Address>
            <TitleInfo>
                <SubTitle>유튜브</SubTitle>
                <InputBoxTitle type="text" placeholder='링크를 복사해주세요.'></InputBoxTitle>
            </TitleInfo>
            <TitleInfo>
                <SubTitle>사진 첨부</SubTitle>
                <Img>
                    <ImgAttach></ImgAttach>
                    <ImgAttach></ImgAttach>
                    <ImgAttach></ImgAttach>
                </Img>
            </TitleInfo>
            <TitleInfo>
                <SubTitle>메인 설정</SubTitle>
                <MainSet>
                    <Label>
                        <RadioButton type="radio" name="main" value="youtube" id='youtube' />
                        유튜브
                    </Label>
                    <Label>
                        <RadioButton type='radio' name='main' value='img' id='img'/>
                        사진
                    </Label>
                </MainSet>
            </TitleInfo>
            <Submit>
                <SubmitBtn onClick={onClickValidation}>등록하기</SubmitBtn>
            </Submit>
        </Wrapper>
    )
}