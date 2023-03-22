import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardRegisterUI from "./BoardRegister.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardRegister.queries";
import { IBoardRegisterProps, IVariables } from "./BoardRegister.types";

export default function BoardRegister(props: IBoardRegisterProps) {
  const router = useRouter();

  const [MyComponent] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD); // IMutationCreateBoardArgs: 인자타입
  const [MyComponentUpdate] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && password && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (writer && event.target.value && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && password && event.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (writer && password && title && event.target.value) setIsActive(true);
    else setIsActive(false);
  };
  // console.log(writer, password, title, contents);
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    onToggleModal();
    setZipcode(data.zonecode);
    setAddress(data.address);
  };

  const onClickValidation = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    } else {
      setWriterError("");
    }
    if (!password) {
      setPwdError("비밀번호를 입력해주세요.");
    } else {
      setPwdError("");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    } else {
      setTitleError("");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    } else {
      setContentsError("");
    }
    if (writer && password && title && contents) {
      try {
        const result = await MyComponent({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(result);
        console.log(result.data?.createBoard);
        router.push(`/boards/${result.data?.createBoard?._id}`);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    // console.log(title); // ""

    if (!title && !contents && !zipcode && !address && !addressDetail) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateBoardInput: IVariables = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (address || zipcode || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await MyComponentUpdate({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      // console.log(result);
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      console.log(error);
    }
  };

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
        isEdit={props.isEdit}
        data={props.data}
        handleComplete={handleComplete}
        onToggleModal={onToggleModal}
        isModalOpen={isModalOpen}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        onChangeAddressDetail={onChangeAddressDetail}
      />
    </>
  );
}
