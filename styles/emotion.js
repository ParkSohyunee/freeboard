import styled from '@emotion/styled'

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    padding: 60px 100px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`
export const PageTitle = styled.div`
    width: 100%;
    padding-bottom: 80px;
    font-weight: 700;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
`
export const WriterInfo = styled.div`
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Item = styled.div`
    width: 486px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const SubTitle = styled.div`
    padding-bottom: 16px;
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
export const TitleInfo = styled.div`
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ContentsInfo = styled.div`
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
// export const InputBoxContents = styled.input`
//     text-align: left;
//     height: 466px;
//     padding: 14px;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 24px;
//     border: 1px solid #BDBDBD;
// `
export const TextBoxContents = styled.textarea`
    height: 466px;
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #BDBDBD;
    resize: none;
`
// export const AddressInfo = styled.div`
//     width: 100%;
//     padding-bottom: 37px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `
export const Address = styled.div`
    width: 100%;
    padding-bottom: 37px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ZipCode = styled.input`
    width: 72px;
    padding: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`
export const Zip = styled.div`
    width: 220px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
`