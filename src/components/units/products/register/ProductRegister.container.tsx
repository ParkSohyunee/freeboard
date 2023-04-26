import ProductRegisterUI from "./ProductRegister.presenter";
import { useForm } from "react-hook-form";
import { IProductForm } from "./ProductRegister.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM } from "./ProductRegister.queries";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Address } from "react-daum-postcode";

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

// dynamic import => 빌드되는 시점에서 호출하지 않고 런타임 시점(이미 documnet 가 선언된 이후)에서 모듈을 호출
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  // const [files, setFiles] = useState<File[]>([]);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);

  const router = useRouter();

  // react-hook-form => setValue & trigger (onChange 값 저장)
  //  prettier-ignore
  const { register, handleSubmit, formState, setValue, trigger } = useForm<IProductForm>({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  // 페이지가 마운트된 이후 document 객체가 생성된 이후 카카오맵 호출하기
  useEffect(() => {
    // Mount 될 때 실행 될 코드보다 먼저 선언되어야 할 스크립트 만들기
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services`;
    document.head.appendChild(script);

    // script가 완료되고, kakao 로드가 완료되면 그때 실행해줘
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          "제주특별자치도 제주시 첨단로 242",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              console.log(coords);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // var infowindow = new window.kakao.maps.InfoWindow({
              //   content:
              //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );

        // // 지도를 클릭한 위치에 표출할 마커
        // const marker = new window.kakao.maps.Marker({
        //   position: map.getCenter(), // 지도 중심좌표에 마커를 생성
        //   // image: markerImage, // 마커이미지 설정
        // });
        // marker.setMap(map); // 지도에 마커를 표시

        // // 지도에 클릭 이벤트를 등록(지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출)
        // window.kakao.maps.event.addListener(map, "click", (mouseEvent: any) => {
        //   const latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보

        //   marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮기기

        //   setLng(Math.round(latlng.getLng() * 1000000) / 1000000);
        //   setLat(Math.round(latlng.getLat() * 1000000) / 1000000);
        // });
      });
    };
  }, []);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl; // 인덱스 위치에서 변경된 임시 url 저장
    setFileUrls(newFileUrls);
  };

  // ReactQuil의 onChange는 개발자가 만들어 놓은 커스텀 요소
  const handleChange = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어줌 => react-hook-form 으로
    setValue("contents", value === "<p><br><p>" ? "" : value);

    // onChange 여부 => react-hook-form 전달
    trigger("contents");
  };

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (value: Address) => {
    onToggleModal();
    setValue("useditemAddress.address", value.address);
    trigger("useditemAddress.address");
    console.log(value.address); // [object] 인지 확인
    setAddress(value.address);
  };

  const onclickSubmit = async (data: IProductForm) => {
    console.log(data); // 로그

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
            images: fileUrls,
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
        address={address}
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        ReactQuill={ReactQuill}
        lng={lng}
        lat={lat}
        fileUrls={fileUrls}
        handleChange={handleChange}
        handleComplete={handleComplete}
        onChangeFileUrls={onChangeFileUrls}
        onclickSubmit={onclickSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formState={formState}
      />
    </>
  );
}
