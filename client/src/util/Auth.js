import { redirect } from "react-router-dom";

export const getToken = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
  return token;
};
export const tokenLoader = () => {
  return getToken();
};
export const tokenCheckLoader = () => {
  const token = getToken();
  if (!token) {
    return redirect("/auth/login");
  }
  return null;
};
