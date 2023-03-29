import { IPagination01UIProps } from "./pagination01.types";
import * as S from "./pagination01Styles";

export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <>
      <S.PagesBtn onClick={props.onClickPrevPage}>{`< `}</S.PagesBtn>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Pages
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onclickPage}
              isActive={index + props.startPage === props.currentPage}
            >
              {index + props.startPage}
            </S.Pages>
          )
      )}
      {/* id={page} -> Type 'number' is not assignable to type 'string'.ts(2322) HTML은 id="" */}
      <S.PagesBtn onClick={props.onClickNextPage}>{` >`}</S.PagesBtn>
    </>
  );
}
