import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MyPageUI from "../../../src/components/units/mypage/Mypage.presenter";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

function MyPage() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <MyPageUI data={data} />;
}

// MyPage 실행되기 전 withAuth 라는 hoc가 먼저 실행하여 로그인 권한분기 검증!!
export default withAuth(MyPage);
