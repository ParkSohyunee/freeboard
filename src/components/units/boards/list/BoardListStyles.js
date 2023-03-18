import styled from "@emotion/styled"

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 1200px;
    border: none;
    border-top: 2px solid black;
`
export const HeaderRow = styled.div`
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    display: flex;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`
export const BodyRow = styled.div`
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    display: flex;
    border-top: 1px solid #BDBDBD;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4F4F4F;
    text-align: center;
`
export const ColumnID = styled.div`
    width: 25%;
`
export const ColumnTitle = styled.div`
    width: 30%;
`
export const ColumnWriter = styled.div`
    width: 20%;
`
export const ColumnDate = styled.div`
    width: 25%;
`
export const WrapperFooter = styled.div`
    padding-top: 40px;
    border-top: 2px solid black;
    display: flex;
    justify-content: end;
`
export const RegisterBtn = styled.button`
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 11px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
`
export const PencilImg = styled.img`
    width: 18px;
    height: 18px;
`