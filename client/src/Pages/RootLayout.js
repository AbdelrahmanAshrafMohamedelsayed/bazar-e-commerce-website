import { Outlet, useSubmit } from "react-router-dom";
import Footer from "../Features/Footer/Footer";
import NavBar from "../Features/NavBar/NavBar";
import Search from "../Features/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTokenDuration } from "../util/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.Config";
import { toast } from "react-toastify";
import { userActions } from "../Store/user";
// import { Search } from "@mui/icons-material";

const RootLayout = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const token = useSelector((state) => state.cart.user).token;
  const submit = useSubmit();
  // console.log(token, "root");
  useEffect(() => {
    if (!token) {
      return;
    }
    const tokenDuration = getTokenDuration();
    console.log("tokenDuration", tokenDuration);

    setTimeout(() => {
      console.log("logoutggggg1");
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Log Out Successfully!");
          dispatch(userActions.Removedata());
          submit(null, { action: "/logout", method: "post" });
          console.log("logout");
        })
        .catch((error) => {
          console.log(error);
        });
      // submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit, dispatch]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
