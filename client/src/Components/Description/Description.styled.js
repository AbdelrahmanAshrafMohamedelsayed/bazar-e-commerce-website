import { keyframes, styled } from "@mui/material";
export const DescContainer = styled("div")`
  text-align: center;
  margin: 3rem auto;
`;
export const Header = styled("h2")`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 3rem;
  background-color: #000;
  padding: 0.5rem 1rem;
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  :after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background-color: #000;
  }
`;
export const Txt = styled("p")`
  max-width: 700px;
  color: rgb(75 85 99 /1);
  margin-left: auto;
  margin-right: auto;
  /* margin: 1rem auto; */
  /* margin-bottom: 1rem; */
`;
