import { useQuery } from "@apollo/client";
import Profile01UI from "./Profile01.presenter";
import { IQuery } from "../../../commons/types/generated/types";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "./Profile01.queries";

export default function Profile01() {
  const [isOpen, setIsOpen] = useState(false);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return <Profile01UI data={data} isOpen={isOpen} onClickOpen={onClickOpen} />;
}
