import { styled } from "@mui/material";
import { Link } from "react-router-dom";
export const Wrapper = styled("div")`
  padding-top: 5rem;
  padding-bottom: 5rem;
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    margin-top: 2rem;
  }
  @media (max-width: 815px) {
    text-align: center;
  }
`;
export const Image = styled("div")`
  height: 15rem;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
export const Content = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 992px) {
    /* flex-direction: column; */
    gap: 2rem;
  }
  @media (max-width: 871px) {
    flex-direction: column-reverse;
    gap: 0;
    align-items: center;
  }
  /* align-items: center; */
`;
export const BtnReset = styled("button")`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background-color: rgb(239 68 68 /1);
  color: white;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: 0.5s;
  width: 8.3rem;
  :hover {
    background-color: rgb(153 27 27 /1);
  }
`;
export const Wrap = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 1.75rem;
  @media (max-width: 560px) {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
`;

export const GoShop = styled(Link)`
  width: fit-content;
  color: rgb(156 163 175 / 1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  text-decoration: none;
  transition: 0.5s;
  gap: 0.25rem;
  font-size: 1.15rem;
  @media (max-width: 560px) {
    font-size: 1.5rem;
  }
  :hover {
    color: #000;
  }
`;
export const GoShop2 = styled(Link)`
  color: rgb(156 163 175 / 1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  gap: 0.25rem;
  font-size: 1.5rem;

  :hover {
    color: #000;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const NoElements = styled("div")`
  p {
    color: rgb(234 88 12 / 1);
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
