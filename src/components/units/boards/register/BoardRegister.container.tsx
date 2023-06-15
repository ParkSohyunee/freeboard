import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardRegisterUI from "./BoardRegister.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardRegister.queries";
import { IBoardRegisterProps, IVariables } from "./BoardRegister.types";
import { Modal, message } from "antd";
import { FETCH_BOARDS } from "../list/BoardList.queries";

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
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeUrlError, setYoutubeUrlError] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents && youtubeUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPwdError("");
    }
    if (writer && event.target.value && title && contents && youtubeUrl) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents && youtubeUrl)
      setIsActive(true);
    else setIsActive(false);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value && youtubeUrl)
      setIsActive(true);
    else setIsActive(false);
  };
  // console.log(writer, password, title, contents);
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    if (event.target.value !== "") {
      setAddressError("");
    }
    if (
      writer &&
      password &&
      title &&
      contents &&
      event.target.value &&
      youtubeUrl
    )
      setIsActive(true);
    else setIsActive(false);
  };
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
    if (event.target.value !== "") {
      setYoutubeUrlError("");
    }
    if (writer && password && title && contents && event.target.value)
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls]; // ["", "", ""]
    newFileUrls[index] = fileUrl; // 새로운 배열의 index번째에 fileUrl을 넣어줘
    setFileUrls(newFileUrls); // ex) ["", "", "강아지.jpg"]
  };

  // 만약 이미지가 있다면 배열에 넣어줘
  useEffect(() => {
    if (props.data?.fetchBoard.images)
      // props.data?.fetchBoard.images.length
      // Type 'Maybe<string[]> | undefined' is not an array type.

      // default value에 넣어줘
      setFileUrls([...props.data?.fetchBoard.images]); // ["", "", "강아지.jpg"]

    // props.data가 바뀔때 실행 -> 즉 수정페이지에서 fetchBoard로 데이터를 받아올때 useEffect 실행
    // fileUrls state가 바뀌고 화면이 리렌더링 되면서 빈화면 -> 이미지 넣어진 화면으로 전환
  }, [props.data]);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    onToggleModal();
    setZipcode(data.zonecode);
    setAddress(data.address);
  };

  const onClickValidation = async () => {
    if (!writer) setWriterError("작성자를 입력해주세요.");
    if (!password) setPwdError("비밀번호를 입력해주세요.");
    if (!title) setTitleError("제목을 입력해주세요.");
    if (!contents) setContentsError("내용을 입력해주세요.");
    if (!addressDetail) setAddressError("상세주소를 입력해주세요.");
    if (!youtubeUrl) setYoutubeUrlError("유튜브 주소를 입력해주세요.");

    if (writer && password && title && contents && youtubeUrl) {
      try {
        const result = await MyComponent({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: fileUrls, // ["", "", "강아지.jpg"]
            },
          },
          refetchQueries: [{ query: FETCH_BOARDS }],
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
    // 이미지가 변경되었는지 비교 (배열을 문자열로 만들어서 비교, 주소가 다르므로)
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangeFiles = currentFiles !== defaultFiles; // true : 이미지 변경

    if (!password) {
      message.warning({ content: "비밀번호를 입력해주세요." });
      return;
    } // return이 대괄호 밖에 쓰이면 아래 실행문을 실행하지 않음 (주의!)
    // console.log(title); // ""

    if (
      !title &&
      !contents &&
      !zipcode &&
      !address &&
      !addressDetail &&
      !youtubeUrl &&
      !isChangeFiles
    ) {
      message.info({ content: "수정한 내용이 없습니다." });
      return;
    }

    const updateBoardInput: IVariables = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (address || zipcode || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangeFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await MyComponentUpdate({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      console.log(result);
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.warning({ content: error.message });
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
        addressError={addressError}
        youtubeUrlError={youtubeUrlError}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onChangeFileUrls={onChangeFileUrls}
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
        fileUrls={fileUrls}
      />
    </>
  );
}
