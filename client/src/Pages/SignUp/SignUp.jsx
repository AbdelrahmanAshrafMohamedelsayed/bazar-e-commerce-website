import { useDispatch, useSelector } from "react-redux";
import Github from "../../Components/Github/Github";
import Google from "../../Components/Google/Google";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
  FirstCont,
  Formm,
  Input,
  SecondCont,
  StyledAlert,
  StyledCircularProgress,
  UploadImage,
} from "./SignUp.styled";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Alert, Avatar, CircularProgress } from "@mui/material";
import { avatarImage2 } from "../../assets";
import { doc, getDoc, setDoc } from "firebase/firestore";
import ImageUpload from "../../Components/ImageUpload/ImageUpload";
import useInput from "./../../Hooks/useInput";
import { auth, db, storage } from "../../firebase/firebase.Config";
import { userActions } from "../../Store/user";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [Submit, setSubmit] = useState(false);
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

  const NameRegex = /^[a-zA-Z]+$/;
  const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const [nameError, setnameError] = useState("");
  const PasswordRegex = /^[a-zA-Z0-9]{6,}$/;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [downloadURL, setdownloadURL] = useState("");
  console.log(downloadURL);
  // const validateName = (value) => {
  //   if (value.trim() === "") {
  //     setnameError("Name is required");
  //     return false;
  //   }
  // };

  const {
    value: fullName,
    inputValid: fullNameValid,
    InputTouched: fullNameTouched,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: fullNameBlurHandler,
    reset: resetfullName,
  } = useInput((value) => value.trim() !== "" && NameRegex.test(value));
  useEffect(() => {
    // Validation function
    const validateName = (value) => {
      if (value.trim() === "") {
        setnameError("Name is required");
      } else if (!NameRegex.test(value)) {
        setnameError("Invalid Name (only letters)");
      } else {
        setnameError("");
      }
    };
    console.log(nameError + "ddd");
    validateName(fullName);
  }, [fullName]);

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
  const [Image, setImage] = useState(null);

  const SubmitHandler = async (e) => {
    e.preventDefault();

    fullNameBlurHandler();
    onBlurHandlerEmail();
    onBlurHandlerPassword();

    if (!fullNameValid || !EmailValid || !PasswordValid) {
      toast.error(`Please fill the form correctly`);
      return;
    }
    if (!Image) {
      toast.error(`Please upload your image`);
      return;
    }
    setSubmit(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      Email,
      Password
    );
    const user = userCredential.user;

    console.log(user + "ddd");

    const imagename = `${user.uid}+${Image.raw.name}`;
    const storageRef = ref(storage, imagename);
    const uploadTask = uploadBytesResumable(storageRef, Image.raw);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
        return;
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // .then((downloadURL) => {
        //   console.log("File available at", downloadURL);
        // //   setdownloadURL(downloadURL);

        // });
        // const userObj = {
        //   displayName: fullName,
        //   email: user.email,
        //   photoURL: Image.preview,
        //   uid: user.uid,
        // };
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
          displayName: fullName,
          photoURL: downloadURL,
        }).then(async () => {
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
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        });
      }
    );
    /* image upload */

    resetEmail();
    resetPassword();
    resetfullName();
    setImage(null);
    setSubmit(false);
    toast.success(`Welcome ${fullName}`);
    Navigate("/");
  };
  /* inputs validation */
  /* image upload */
  const imageChangeHandler = (image) => {
    setImage(image);
    console.log(image);
  };
  /* image upload */

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
              <h3>Sign Up</h3>
              <Input notvalid={fullNameTouched && !fullNameValid}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Joe Doh"
                  value={fullName}
                  onChange={nameChangeHandler}
                  onBlur={fullNameBlurHandler}
                />
                {fullNameTouched && !fullNameValid && (
                  <StyledAlert severity="error">
                    {nameError || "Invalid Name (only letters)"}
                  </StyledAlert>
                )}
              </Input>
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
              <button type="submit" disabled={Submit}>
                {Submit ? <StyledCircularProgress /> : "Sign Up"}
              </button>
              <Google state={"signup"} />
              <Github state={"signup"} />
            </form>
          </Formm>
          <ImageUpload onChangeImage={imageChangeHandler} />
        </SecondCont>
      </FirstCont>
    </>
  );
};

export default SignUp;
