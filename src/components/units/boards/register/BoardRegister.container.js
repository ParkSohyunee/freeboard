import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardRegisterUI from "./BoardRegister.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardRegister.queries"

export default function BoardRegister(props) {

    const router = useRouter()

    const [MyComponent] = useMutation(CREATE_BOARD)
    const [MyComponentUpdate] = useMutation(UPDATE_BOARD)

    const [isActive, setIsActive] = useState(false)

    const [ writer, setWriter] = useState("")
    const [ password, setPassword] = useState("")
    const [ title, setTitle] = useState("")
    const [ contents, setContents] = useState("")

    const [ writerError, setWriterError] = useState("")
    const [ pwdError, setPwdError] = useState("")
    const [ titleError, setTitleError] = useState("")
    const [ contentsError, setContentsError] = useState("")

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if (event.target.value && password && title && contents) (setIsActive(true))
        else (setIsActive(false))
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if (writer && event.target.value && title && contents) (setIsActive(true))
        else (setIsActive(false))
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if (writer && password && event.target.value && contents) (setIsActive(true))
        else (setIsActive(false))
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if (writer && password && title && event.target.value) (setIsActive(true))
        else (setIsActive(false))
    }
    console.log(writer, password, title, contents);

    const onClickValidation = async () => {
    
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
            try {
                const result = await MyComponent({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents
                        }
                    }
                })
                // console.log(result);
                // console.log(result.data.createBoard);
                router.push(`/boards/${result.data.createBoard._id}`)
            }
            catch(error) {
                alert(error.message)
                console.log(error.message);
            }
        }
    }

    const onClickUpdate = async () => {
        try {
            const result = await MyComponentUpdate({
                variables: {
                    updateBoardInput: {
                        title,
                        contents
                    },
                    password,
                    boardId: router.query.boardId
                }
            }) 
            console.log(result);
            router.push(`/boards/${result.data.updateBoard._id}`)
        } 
        catch(error) {
            alert(error.message)
        }
    } 

    return (
        <>
            <BoardRegisterUI
            writerError={writerError}
            pwdError={pwdError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickValidation={onClickValidation}
            onClickUpdate={onClickUpdate}
            isActive={isActive} 
            isEdit={props.isEdit}/>
        </>
    )
}