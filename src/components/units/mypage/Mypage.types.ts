import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onchangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickResetPassword: () => void;
}
