import { Alert, styled } from "@mui/material";
export const FirstCont = styled("div")`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: #7fa998 !important;
    border: 1px solid #7fa998 !important;
    color: #fff !important;
    box-shadow: 0px 10px 19px -16px rgba(0, 0, 0, 0.29) !important;
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 1rem;
    border-radius: 0.25rem !important;
    margin-top: 1rem;
    transition: 0.3s;
  }
  button:hover {
    background-color: #547c6c !important;
  }
  button:active {
    background-color: #fff !important;
    color: #7fa998 !important;
  }
`;
export const SecondCont = styled("div")`
  margin-left: auto;
  margin-right: auto;
  width: 25rem;
  border-radius: 5px;
  box-shadow: 0px 10px 34px -15px rgba(0, 0, 0, 0.24);
  display: flex;
  @media (max-width: 940px) {
    flex-direction: column-reverse;
    .MuiAvatar-root.MuiAvatar-circular {
      width: 15rem;
    }
    max-width: 70%;
  }
  @media (max-width: 600px) {
    max-width: 98%;
  }
`;
export const Formm = styled("div")`
  padding: 3rem;
  border-radius: 5px;
  flex-basis: 100%;
  h3 {
    text-align: center;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const Input = styled("div")`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
  flex-direction: column;
  label {
    font-weight: 400;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 0.5rem;
    height: 40px;
    background: #fff;
    color: #000;
    font-size: 18px;
    border-radius: 0;
    border-color: ${(props) => {
      console.log(props.notvalid + "jj");
      return props.notvalid ? "#d32f2f" : "rgba(0, 0, 0, 0.1)";
    }};
    background-color: ${(props) => {
      console.log(props.notvalid + "jj");
      return props.notvalid ? "rgba(0, 0, 0, 0.06)" : "";
    }};
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 15px;
  }
`;
export const Btn = styled("div")`
  width: 100%;
`;
export const StyledAlert = styled(Alert)`
  background: transparent;
  padding: 0;
  margin: 0;
  color: #d32f2f;
`;
