import { useDispatch } from "react-redux";
import { googleLogo } from "../../assets";
import { auth } from "../../firebase/firebase.Config";
import { FirstCont } from "./Google.styled";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { CartActions } from "../../Store/cart";
import { userActions } from "../../Store/user";
import { redirect, useNavigate } from "react-router-dom";
const Google = ({ state }) => {
  const navigate = useNavigate();
  let isSignUp = state === "signup" ? "Sign up" : "Sign in";
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const GoogleHandler = async () => {
    if (state === "signup") {
      try {
        const user = await signInWithPopup(auth, provider);
        const userObj = {
          displayName: user.user.displayName,
          email: user.user.email,
          photoURL: user.user.photoURL,
          uid: user.user.uid,
        };
        console.log(user);
        dispatch(userActions.SignInGoogle(userObj));
        dispatch(userActions.setToken(user.user.accessToken));
        localStorage.setItem("token", user.user.accessToken);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  };
  return (
    <FirstCont onClick={GoogleHandler}>
      <img src={googleLogo} alt="google" />
      {state && <span>{isSignUp} with Google</span>}
    </FirstCont>
  );
};

export default Google;
