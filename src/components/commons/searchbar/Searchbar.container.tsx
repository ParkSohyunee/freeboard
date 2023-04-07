import SearchbarUI from "./Searchbar.presenter";
import _ from "lodash";
import { ChangeEvent } from "react";
import { ISearchbarProps } from "./Searchbar.types";

export default function Searchbar(props: ISearchbarProps) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value }); // 검색어의 마지막페이지 처리과정
    props.onChangeKeyword(value);
  }, 500);

  const onChangeKeySearchbar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return <SearchbarUI onChangeKeySearchbar={onChangeKeySearchbar} />;
}
