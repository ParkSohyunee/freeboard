import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./ProductRegister.queries";
import { useEffect, useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄요약을 입력해주세요."),
  contents: yup.string().required("상품에 대한 상세설명을 적어주세요."),
  price: yup
    .string()
    .required("상품가격을 입력해주세요.")
    .matches(
      /^[0-9]{4,7}$/,
      "숫자만 입력해주세요. (최소가격: 1,000 ~ 최대가격: 1,000,000)"
    ),
});

// 로벌 스코프에 위치한 kakao라는 객체의 타입 지정 => Cannot find name 'kakao'.ts(2304)
declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductRegister() {
  const [fileUrls, setFileUrls] = useState<string[]>(["", "", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<IProductForm>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  // 페이지가 마운트된 이후 document 객체가 생성된 이후 카카오맵 호출하기
  useEffect(() => {
    // Mount 될 때 실행 될 코드보다 먼저 선언되어야 할 스크립트 만들기
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}`;
    document.head.appendChild(script);

    // script가 완료되고, kakao 로드가 완료되면 그때 실행해줘
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도를 클릭한 위치에 표출할 마커
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(), // 지도 중심좌표에 마커를 생성
          // image: markerImage, // 마커이미지 설정
        });
        marker.setMap(map); // 지도에 마커를 표시

        // 지도에 클릭 이벤트를 등록(지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출)
        window.kakao.maps.event.addListener(map, "click", (mouseEvent: any) => {
          const latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보

          marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮기기

          setLng(Math.round(latlng.getLng() * 1000000) / 1000000);
          setLat(Math.round(latlng.getLat() * 1000000) / 1000000);
        });
      });
    };
  }, []);

  const onChangeFileUrls = (fileUrl: string, index: number, file: File) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl; // 인덱스 위치에서 변경된 임시 url 저장
    setFileUrls(newFileUrls);

    const tempFiles = [...files];
    tempFiles[index] = file; // 인덱스 위치에서 변경된 파일 저장
    setFiles(tempFiles);
  };

  const onclickSubmit = async (data: IProductForm) => {
    console.log(data); // 로그

    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [resultsFile0, resultsFile1 ...] // [{data: {…}}, {…}, {…}]

    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, ...]
    console.log(resultUrls); // ['', 'codecamp-file-storage/2023/4/19/testimonior_image2.jpg']

    // if (!resultUrls) return;
    // if (typeof resultUrls !== "undefined") return;

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags.split(" "),
            useditemAddress: {
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
              lat: lat,
              lng: lng,
            },
            images: resultUrls,
          },
        },
      });
      console.log(result.data?.createUseditem); // 로그
      //
      router.push(`/products/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  return (
    <>
      <ProductRegisterUI
        lng={lng}
        lat={lat}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
      />
    </>
  );
}