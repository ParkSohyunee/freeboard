import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function MyPage() {
  return (
    <>
      <div>마이페이지</div>
    </>
  );
}

// MyPage 실행되기 전 withAuth 라는 hoc가 먼저 실행하여 로그인 권한분기 검증!!
export default withAuth(MyPage);
