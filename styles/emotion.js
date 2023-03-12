import styled from '@emotion/styled'

// Making a styled components with emotion and tagged template literals
export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 60px 100px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 25px;
`
// 게시물 등록 타이틀
export const PageTitle = styled.div`
    width: 100%;
    padding-bottom: 60px;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
`
// 작성자 & 비밀번호
export const WriterInfo = styled.div`
    width: 100%;
    // padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Item = styled.div`
    width: 486px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const SubTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`
export const InputBox = styled.input`
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px; // height 지정이 아닌 line-height와 font-size로 조정
    border: 1px solid #BDBDBD;
`
export const InputBoxTitle = styled.input`
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #BDBDBD;
`
// 제목
export const TitleInfo = styled.div`
    width: 100%;
    // padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
// 내용
export const ContentsInfo = styled.div`
    width: 100%;
    // padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const TextBoxContents = styled.textarea`
    height: 466px;
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #BDBDBD;
    resize: none;
`
// 주소
export const Address = styled.div`
    width: 100%;
    // padding-bottom: 37px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Zip = styled.div`
    display: flex;
    gap: 16px;
`
export const ZipCode = styled.input`
    width: 72px;
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #BDBDBD;
`
export const ZipCodeSearch = styled.div`
    width: 124px;
    padding: 14px 16px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    background: #000000;
`
// 사진첨부
export const Img = styled.div`
    display: flex;
    gap: 24px;
`
export const ImgAttach = styled.div`
    width: 78px;
    height: 78px;
    background: #BDBDBD;
`
// 메인설정
export const MainSet = styled.div`
    display: flex;
    gap: 22px;
`
export const Label = styled.div`
    display: flex;
    align-items: center;
`
export const RadioButton = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
// 등록하기
export const Submit = styled.div`
    display: flex;
    justify-content: center;
`
export const SubmitBtn = styled.button`
    cursor: pointer;
    background: #FFD600;
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    line-height: 24px;
`
// 에러메세지
export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
`