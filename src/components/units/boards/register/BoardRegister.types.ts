import { ChangeEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardRegisterProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IVariables {
    title?: string
    contents?: string
}

export interface IBoardRegisterUIProps {
    writerError: string
    pwdError: string
    titleError: string
    contentsError: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onClickValidation: () => void
    onClickUpdate: () => void
    isActive: boolean
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface ISubmitBtnProps {
    isActive: boolean
}