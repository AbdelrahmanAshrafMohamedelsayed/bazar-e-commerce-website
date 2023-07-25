import { styled } from "@mui/material";
// import { styled } from '@mui/system';
export const SecondCont = styled("div")``;

export const FirstCont = styled("div")`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: montserrat, sans-serif;
    font-size: 236px;
    font-weight: 200;
    margin: 0;
    color: #211b19;
    text-transform: uppercase;
  }
  h2 {
    text-align: center;
    width: 31rem;
    top: 55%;
    font-family: montserrat, sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    background: #fff;
    padding: 10px 5px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 148px;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 16px;
    }
    h1 {
      font-size: 86px;
    }
  }
  div {
    position: absolute;
    top: 69%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  a {
    font-family: montserrat, sans-serif;
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #ff6300;
    font-size: 18px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    text-align: center;
  }
  a:hover {
    color: #ff6300;
    background: #211b19;
  }
`;
