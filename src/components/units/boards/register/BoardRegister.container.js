import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardRegisterUI from "./BoardRegister.presenter"
import { CREATE_BOARD } from "./BoardRegister.queries"

export default function BoardRegister() {

    const router = useRouter()

    const [MyComponent] = useMutation(CREATE_BOARD)

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

    const onClickValidation = async () => {
        // console.log(writer);
    
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
                            writer: writer, // shorthand-property
                            password: password,
                            title: title,
                            contents: contents
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
            onClickValidation={onClickValidation} />
        </>
    )
}