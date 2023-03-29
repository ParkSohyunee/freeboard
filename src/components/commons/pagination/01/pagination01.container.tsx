import { useState, MouseEvent } from "react";
import Pagination01UI from "./pagination01.presenter";
import { IPagination01Props } from "./pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const lastPage = props.count !== null ? Math.ceil(props.count / 10) : 0;
  //   console.log(lastPage);

  const onclickPage = (event: MouseEvent<HTMLDivElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) }); // const currentPage = Number(event.currentTarget.id);
    setCurrentPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10); // setStartPage(startPage - 10)
    void props.refetch({ page: startPage - 10 });
    setCurrentPage(startPage - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10); // setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
      setCurrentPage(startPage + 10);
    }
  };

  return (
    <>
      <Pagination01UI
        onclickPage={onclickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
        lastPage={lastPage}
        currentPage={currentPage}
      />
    </>
  );
}
