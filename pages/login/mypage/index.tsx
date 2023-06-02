import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import Mypage from "../../../src/components/units/mypage/Mypage.container";

function MyPage() {
  return <Mypage />;
}

// MyPage 실행되기 전 withAuth 라는 hoc가 먼저 실행하여 로그인 권한분기 검증!!
export default withAuth(MyPage);
