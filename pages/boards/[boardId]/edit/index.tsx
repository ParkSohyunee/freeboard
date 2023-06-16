import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import BoardRegister from "../../../../src/components/units/boards/register/BoardRegister.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      images
    }
  }
`;
export default function BoardEditPage() {
  const router = useRouter();

  // string이 아니면
  // if (typeof router.query.boardId !== "string") {
  //   void router.push("/");
  //   return <></>;
  // }

  // string이면
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  return (
    <>{BoardRegister({ isEdit: true, data: data })}</>
    // <BoardRegister isEdit={true} data={data} />
  );
}
