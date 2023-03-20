import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsUIProps {
    data?: Pick<IQuery, "fetchBoards"> // 백엔드에서 data를 받아올수도, 받아오지 못할수도
}