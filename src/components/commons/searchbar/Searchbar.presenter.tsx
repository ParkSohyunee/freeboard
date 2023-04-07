import { ISearchbarUIProps } from "./Searchbar.types";
import * as S from "./SearchbarStyles";

export default function SearchbarUI(props: ISearchbarUIProps) {
  return (
    <>
      <S.WrapperSearchTab>
        <S.SearchKeyword
          type="text"
          onChange={props.onChangeKeySearchbar}
          placeholder="검색할 제목을 입력해주세요."
        />
        <S.SearchDate type="text" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.WrapperSearchTab>
    </>
  );
}
