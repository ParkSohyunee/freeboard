import { useEffect } from "react";
import { IQuery } from "../../../commons/types/generated/types";

// 로벌 스코프에 위치한 kakao라는 객체의 타입 지정 => Cannot find name 'kakao'.ts(2304)
declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoProps {
  address: string;
  data?: Pick<IQuery, "fetchUseditem">;
}

export default function Kakaomap(props: IKakaoProps) {
  // 페이지가 마운트된 이후 document 객체가 생성된 이후 카카오맵 호출하기
  useEffect(() => {
    // Mount 될 때 실행 될 코드보다 먼저 선언되어야 할 스크립트 만들기
    // 로딩이 끝나는 시점에 콜백을 통해 객체에 접근할 수 있도록 해 준다. 로딩 스크립트 주소에 파라메터로 autoload=false 를 지정해 주어야 한다.
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
          props.address
            ? props.address
            : props.data?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                // image: markerImage, // 마커이미지 설정
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      {/* 지도를 담을 영역을 설정해주기 => 영역설정을 안하면 지도가 띄어지지 않음 */}
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}
