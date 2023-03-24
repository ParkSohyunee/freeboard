import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../list/BoardList.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
    const router = useRouter() 

    // console.log(router.query.boardId); // ... 즉, boardId 반환            

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            boardId: String(router.query.boardId)}
    })

    // console.log(data); // undefined
    // console.log(data?.fetchBoard.writer); // 옵셔널 체이닝

    const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD)
    const onClickDelete = async () => {
        if (typeof router.query.boardId !== "string") return;
        await deleteBoard({
            variables: {
                boardId: router.query.boardId
            },
            refetchQueries: [{
                query: FETCH_BOARDS
            }]
        })
        alert("게시물이 정상적으로 삭제되었습니다.")
        router.push("/boards/")
    } 

    const onClickMoveToEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`)
    }

    return ( <BoardDetailUI 
            data={data}
            onClickDelete={onClickDelete}
            onClickMoveToEdit={onClickMoveToEdit}/>
    )
}