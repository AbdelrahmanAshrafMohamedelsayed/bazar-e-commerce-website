import { useNavigate } from "react-router-dom";
import Github from "../../Components/Github/Github";
import Google from "../../Components/Google/Google";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useInput from "../../Hooks/useInput";
import { userActions } from "../../Store/user";
import { auth } from "../../firebase/firebase.Config";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase/firebase.Config";
import {
  FirstCont,
  Formm,
  Input,
  SecondCont,
  StyledAlert,
  UploadImage,
} from "./Login.styled";
import { Alert } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { StyledCircularProgress } from "../SignUp/SignUp.styled";
const Login = () => {
  const [Submit, setSubmit] = useState(false);
  const [submitError, setsubmitError] = useState(null);
  /* token Handle */
  const token = useSelector((state) => state.cart.user).token;
  const Navigate = useNavigate();
  useEffect(() => {
    if (token) {
      console.log("token");
      Navigate("/");
    }
  }, [token, Navigate]);
  /* token Handle */
  const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const PasswordRegex = /^[a-zA-Z0-9]{6,}$/;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* Inputs validation */
  const {
    value: Email,
    inputValid: EmailValid,
    InputTouched: EmailTouched,
    onChangeHandler: onChangeHandlerEmail,
    onBlurHandler: onBlurHandlerEmail,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && EmailRegex.test(value));

  const {
    value: Password,
    inputValid: PasswordValid,
    InputTouched: PasswordTouched,
    onChangeHandler: onChangeHandlerPassword,
    onBlurHandler: onBlurHandlerPassword,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "" && PasswordRegex.test(value));
  const SubmitHandler = async (e) => {
    e.preventDefault();
    onBlurHandlerEmail();
    onBlurHandlerPassword();
    if (!EmailValid || !PasswordValid) {
      toast.error("Invalid Inputs");
      return;
    }
    setSubmit(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const user = userCredential.user;

      // ...
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const photoURL = docSnap.data().photoURL;
        const displayName = docSnap.data().displayName;
        const userObj = {
          displayName,
          email: user.email,
          photoURL,
          uid: user.uid,
        };
        console.log(user);
        dispatch(userActions.SignInGoogle(userObj));
        dispatch(userActions.setToken(user.accessToken));
        localStorage.setItem("token", user.accessToken);
        setsubmitError(null);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const startIndex = errorCode.indexOf("/") + 1;
      if (startIndex !== -1) {
        const resultString = errorCode.substring(startIndex);
        console.log(resultString);
        setsubmitError(resultString);
        const err =
          resultString === "user-not-found"
            ? "User Not Found"
            : resultString === "wrong-password"
            ? "Wrong Password"
            : resultString === "The email address is badly formatted."
            ? "Invalid Email"
            : "";
        toast.error(err);
        setSubmit(false);
      }
      // ..
      // console.log(errorMessage);
      // console.log(errorCode);
      // console.log(error);
      return;
    }
    if (submitError) {
      console.log("submit", submitError);
      return;
    } else {
      resetEmail();
      resetPassword();
      setSubmit(false);
      toast.success("Login Successfully");
    }
    navigate("/");
  };
  /* Inputs validation */
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <FirstCont>
        <SecondCont>
          <Formm>
            <form onSubmit={SubmitHandler}>
              <h3>Login</h3>

              <Input notvalid={!EmailValid && EmailTouched}>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="body1562001@gmail.com"
                  value={Email}
                  onChange={onChangeHandlerEmail}
                  onBlur={onBlurHandlerEmail}
                />
                {!EmailValid && EmailTouched && (
                  <StyledAlert severity="error">Invalid Email</StyledAlert>
                )}
              </Input>
              <Input notvalid={!PasswordValid && PasswordTouched}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={onChangeHandlerPassword}
                  onBlur={onBlurHandlerPassword}
                />
                {!PasswordValid && PasswordTouched && (
                  <StyledAlert severity="error">
                    Invalid Password (at least 6 characters)
                  </StyledAlert>
                )}
              </Input>
              {/* <button type="submit">Login</button> */}
              <button type="submit" disabled={Submit}>
                {Submit ? (
                  <StyledCircularProgress
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                ) : (
                  "Login"
                )}
                {/* <StyledCircularProgress /> */}
              </button>
              {/* {submitError && (
                <StyledAlert severity="error">
                 
                </StyledAlert>
              )} */}
              <Google state={"Login"} />
              <Github state={"Login"} />
            </form>
          </Formm>
        </SecondCont>
      </FirstCont>
    </>
  );
};

export default Login;
