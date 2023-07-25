import { redirect } from "react-router-dom";
import { userActions } from "../Store/user";
import { useDispatch } from "react-redux";

export const LogoutAction = () => {
  localStorage.removeItem("token");

  //   localStorage.removeItem("expiration");
  return redirect("/");
};
