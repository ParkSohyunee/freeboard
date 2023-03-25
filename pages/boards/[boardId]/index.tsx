import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import BoardCommentRegister from "../../../src/components/units/comment/register/CommentRegister.container";
import BoardCommentList from "../../../src/components/units/comment/list/CommentBoardList.container";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentRegister />
      <BoardCommentList />
    </>
  );
}
