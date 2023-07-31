import { useDispatch } from "react-redux";
import { githubLogo } from "../../assets";
import { auth } from "../../firebase/firebase.Config";
import { FirstCont } from "./Github.styled";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { userActions } from "../../Store/user";
import { useNavigate } from "react-router-dom";

const Github = ({ state }) => {
  const provider = new GithubAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const GithubHandler = async () => {
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
  };
  let isSignUp = state === "signup" ? "Sign up" : "Sign in";
  return (
    <FirstCont onClick={GithubHandler}>
      <img src={githubLogo} alt="google" />
      {state && <span>{isSignUp} with Github</span>}
    </FirstCont>
  );
};

export default Github;
