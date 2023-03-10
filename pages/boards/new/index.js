import {Wrapper, PageTitle, WriterInfo, Item, InputBox, SubTitle, 
    InputBoxTitle, TitleInfo, ContentsInfo, TextBoxContents, Address, Zip, ZipCode} from '../../../styles/emotion'

export default function Board() {

    return (
        <Wrapper>
            <PageTitle>게시물 등록</PageTitle>
            <WriterInfo>
                <Item>
                    <SubTitle>작성자</SubTitle>
                    <InputBox type="text" placeholder='이름을 적어주세요.'></InputBox>
                </Item>
                <Item>
                    <SubTitle>비밀번호</SubTitle>
                    <InputBox type="password" placeholder='비밀번호를 입력해주세요.'></InputBox>
                </Item>
            </WriterInfo>
            <TitleInfo>
                <SubTitle>제목</SubTitle>
                <InputBoxTitle type="text" placeholder='제목을 작성해주세요.'></InputBoxTitle>
            </TitleInfo>
            <ContentsInfo>
                <SubTitle>내용</SubTitle>
                {/* <InputBoxContents type="text" placeholder='내용을 작성해주세요.'></InputBoxContents> */}
                <TextBoxContents placeholder='내용을 작성해주세요.'></TextBoxContents>
            </ContentsInfo>
            <Address>
                <SubTitle>주소</SubTitle>
                <Zip>
                    <ZipCode type="number"></ZipCode>
                    <ZipCode type="number"></ZipCode>
                    {/* <Search></Search> */}
                </Zip>
                <InputBoxTitle type="text"></InputBoxTitle>
                <InputBoxTitle type="text"></InputBoxTitle>
            </Address>
            <TitleInfo>
                <SubTitle>유튜브</SubTitle>
                <InputBoxTitle type="text" placeholder='링크를 복사해주세요.'></InputBoxTitle>
            </TitleInfo>
        </Wrapper>
    )
}