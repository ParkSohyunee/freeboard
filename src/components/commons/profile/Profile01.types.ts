import { IQuery } from "../../../commons/types/generated/types";

export interface IProfileUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  isOpen: boolean;
  onClickOpen: () => void;
}
