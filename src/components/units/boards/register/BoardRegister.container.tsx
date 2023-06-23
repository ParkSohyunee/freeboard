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

export default function BoardRegister(props: IBoardRegisterProps) {
  const router = useRouter();

  // prettier-ignore
  const [MyComponent] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  // prettier-ignore
  const [MyComponentUpdate] = useMutation<Pick<IMutation, "updateBoard">,IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const [inputs, setInputs] = useState<IinputsType>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
  });

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [addressError, setAddressError] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // ** 게시글 항목 입력 이벤트 핸들러
  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // input과 textArea 함께 태그 타입 지정
  ) => {
    setInputs((prev) => ({
      ...prev, // prev는 즉, ...inputs, inputs는 writer: inputs.writer, password: ...

      // 객체는 key를 중복으로 쓸 수 있고, 나중에 오는 값으로 덮어씌워진다.
      // 객체에 key 이름을 값으로 생성할 경우 => []
      // id값으로 각 key 이름을 공통으로 묶고 리팩토링
      [event.target.id]: event.target.value,
    }));

    const errorText: HTMLElement | null = document.getElementById(
      `${event.target.id}Error`
    );

    if (event.target.value === "") {
      if (errorText !== null) errorText.innerText = "빈칸을 입력해주세요.";
    } else {
      if (errorText !== null) errorText.innerText = "";
    }

    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== "" &&
      inputs.youtubeUrl !== "" &&
      event.target.value
    )
      setIsActive(true);
    else setIsActive(false);
  };

  // ** 주소입력 이벤트 핸들러
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    if (event.target.value !== "") {
      setAddressError("");
    }
    if (
      inputs.writer &&
      inputs.password &&
      inputs.title &&
      inputs.contents &&
      event.target.value &&
      inputs.youtubeUrl
    )
      setIsActive(true);
    else setIsActive(false);
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
    for (let key in inputs) {
      if (inputs[key] === "") {
        message.warning({ content: "필수값을 입력해주세요." });
        break; // forEach 사용하면 break문으로 빠져나오지 못하여 메세지가 반복됨
      }
    }

    if (
      isActive &&
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== "" &&
      inputs.youtubeUrl !== ""
    ) {
      try {
        const result = await MyComponent({
          variables: {
            createBoardInput: {
              ...inputs,
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
        router.push(`/boards/${result.data?.createBoard?._id}`);
      } catch (error) {
        alert(error);
      }
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
      !addressDetail &&
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
        errorMessage={errorMessage}
        addressError={addressError}
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
        addressDetail={addressDetail}
        onChangeAddressDetail={onChangeAddressDetail}
        fileUrls={fileUrls}
      />
    </>
  );
}
