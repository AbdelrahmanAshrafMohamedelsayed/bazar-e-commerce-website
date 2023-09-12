import { useDispatch } from "react-redux";
import { googleLogo } from "../../assets";
import { auth } from "../../firebase/firebase.Config";
import { FirstCont } from "./Google.styled";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { CartActions } from "../../Store/cart";
import { userActions } from "../../Store/user";
import { redirect, useNavigate } from "react-router-dom";
const Google = ({ state }) => {
  const navigate = useNavigate();
  let isSignUp = state === "signup" ? "Sign up" : "Sign in";
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const GoogleHandler = async () => {
    try {
      const user = await signInWithPopup(auth, provider);
      // const userCredential = await createUserWithEmailAndPassword(
      //   auth,
      //   user.user.email,
      //   user.user.uid
      // );
      const userObj = {
        displayName: user.user.displayName,
        email: user.user.email,
        photoURL: user.user.photoURL,
        uid: user.user.uid,
      };
      console.log(userObj);
      console.log(user);

      dispatch(userActions.SignInGoogle(userObj));
      dispatch(userActions.setToken(user.user.accessToken));
      localStorage.setItem("token", user.user.accessToken);
      //
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());
      console.log(expiration.toISOString(), "from signup");
      // dispatch(userActions.setExpire(user.expiration.toISOString()));
      //
      navigate("/");
    } catch (err) {
      console.log(err);
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
