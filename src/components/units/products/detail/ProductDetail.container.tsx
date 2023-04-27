import { useMutation, useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import {
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  ToggleUseditemPick,
} from "./ProductDetail.queries";
import { message } from "antd";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useEffect } from "react";
import { IPropsDetail } from "./ProductDetail.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductDetail(props: IPropsDetail) {
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
          `${props.addressSearch}`,
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
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.addressSearch]);

  console.log("렌더링");

  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: `${router.query.productId}` },
  });

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(ToggleUseditemPick);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const onClickItemPick = async () => {
    const result = await toggleUseditemPick({
      variables: { useditemId: `${router.query.productId}` },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: `${router.query.productId}` },
        },
      ],
      //
      // update(cache, { data }) {
      //   cache.modify({
      //     fields: {
      //       fetchUseditem: (prev) => {
      //         return [data?.toggleUseditemPick, ...prev];
      //       },
      //     },
      //   });
      // },
    });
  };

  const onClickDeleteItem = async () => {
    if (typeof router.query.productId !== "string") return;
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.productId },
        refetchQueries: [{ query: FETCH_USEDITEM }],
      });
      message.success({ content: "상품이 삭제되었습니다." });
      router.push("/products");
    } catch (error) {
      if (error instanceof Error) message.error({ content: error.message });
    }
  };

  return (
    <>
      <ProductDetailUI
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickItemPick={onClickItemPick}
        onClickDeleteItem={onClickDeleteItem}
        path={String(router.query.productId)}
      />
    </>
  );
}
