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
import {
  IBoardRegisterProps,
  IVariables,
  IinputsType,
} from "./BoardRegister.types";
import { Modal, message } from "antd";
import { FETCH_BOARDS } from "../list/BoardList.queries";

const DEFAULT_VALUE = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  addressDetail: "",
  youtubeUrl: "",
};

export default function BoardRegister(props: IBoardRegisterProps) {
  const router = useRouter();

  // prettier-ignore
  const [MyComponent] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  // prettier-ignore
  const [MyComponentUpdate] = useMutation<Pick<IMutation, "updateBoard">,IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const [inputs, setInputs] = useState<IinputsType>(DEFAULT_VALUE);

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [writerError, setWriterError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [youtubeUrlError, setYoutubeUrlError] = useState("");
  const [addressError, setAddressError] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // ** 게시글 항목 입력 이벤트 핸들러
  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [event.target.id]: event.target.value }));

    if (inputs.writer) setWriterError("");
    if (inputs.password) setPwdError("");
    if (inputs.title) setTitleError("");
    if (inputs.contents) setContentsError("");
    if (inputs.addressDetail) setAddressError("");
    if (inputs.youtubeUrl) setYoutubeUrlError("");

    for (const key in inputs) {
      if (inputs[key] !== "" && event.target.value) setIsActive(true);
      else setIsActive(false);
    }
  };

  // ** 이미지 업로드
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls]; // ["", "", ""]
    newFileUrls[index] = fileUrl; // 새로운 배열의 index번째에 fileUrl을 넣어줘
    setFileUrls(newFileUrls); // ex) ["", "", "강아지.jpg"]
  };

  // 만약 이미지가 있다면 배열에 넣어줘
  useEffect(() => {
    if (props.data?.fetchBoard.images)
      // default value에 넣어줘
      setFileUrls([...props.data?.fetchBoard.images]); // ["", "", "강아지.jpg"]

    // fileUrls state가 바뀌고 화면이 리렌더링 되면서 빈화면 -> 이미지 넣어진 화면으로 전환
  }, [props.data]);

  // ** 주소 모달
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // ** 주소 이벤트 핸들러
  const handleComplete = (data: Address) => {
    onToggleModal();
    setZipcode(data.zonecode);
    setAddress(data.address);
  };

  // ** 게시글 등록
  const onClickValidation = async () => {
    if (!inputs.writer) setWriterError("작성자를 입력해주세요.");
    if (!inputs.password) setPwdError("비밀번호를 입력해주세요.");
    if (!inputs.title) setTitleError("제목을 입력해주세요.");
    if (!inputs.contents) setContentsError("내용을 입력해주세요.");
    if (!inputs.addressDetail) setAddressError("상세주소를 입력해주세요.");
    if (!inputs.youtubeUrl) setYoutubeUrlError("유튜브 주소를 입력해주세요.");

    for (const key in inputs) {
      if (inputs[key] === "") return;
    }
    try {
      const result = await MyComponent({
        variables: {
          createBoardInput: {
            writer: inputs.writer,
            password: inputs.password,
            title: inputs.title,
            contents: inputs.contents,
            boardAddress: {
              zipcode,
              address,
              addressDetail: inputs.addressDetail,
            },
            youtubeUrl: inputs.youtubeUrl,
            images: fileUrls, // ["", "", "강아지.jpg"]
          },
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      router.push(`/boards/${result.data?.createBoard?._id}`);
    } catch (error) {
      alert(error);
    }
  };

  // ** 게시글 수정
  const onClickUpdate = async () => {
    // 이미지가 변경되었는지 비교 (배열을 문자열로 만들어서 비교, 주소가 다르므로)
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangeFiles = currentFiles !== defaultFiles; // true : 이미지 변경

    if (!inputs.password) {
      message.warning({ content: "비밀번호를 입력해주세요." });
      return;
    }

    if (
      !inputs.title &&
      !inputs.contents &&
      !zipcode &&
      !address &&
      !inputs.addressDetail &&
      !inputs.youtubeUrl &&
      !isChangeFiles
    ) {
      message.info({ content: "수정한 내용이 없습니다." });
      return;
    }

    const updateBoardInput: IVariables = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl) updateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (address || zipcode || inputs.addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (inputs.addressDetail)
        updateBoardInput.boardAddress.addressDetail = inputs.addressDetail;
    }
    if (isChangeFiles) updateBoardInput.images = fileUrls;
    console.log(updateBoardInput);

    try {
      if (typeof router.query.boardId !== "string") return;
      const result = await MyComponentUpdate({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput,
        },
      });
      message.success({ content: "수정이 완료되었습니다." });
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.warning({ content: error.message });
      }
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
        onChangeInputs={onChangeInputs}
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
        fileUrls={fileUrls}
      />
    </>
  );
}
