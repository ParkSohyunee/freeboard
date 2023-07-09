import { IQuery } from "../../../commons/types/generated/types";

export interface IPointChargeProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IPointOptionsProps {
  isOptionsOpen: boolean;
}
