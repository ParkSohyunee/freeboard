import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickPayment: () => void;
  onChangePoint: (event: ChangeEvent<HTMLSelectElement>) => void;
}
