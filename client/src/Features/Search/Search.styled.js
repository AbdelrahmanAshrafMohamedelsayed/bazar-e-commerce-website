import { styled } from "@mui/material";
import { Link } from "react-router-dom";
export const Cont1 = styled("div")`
  width: 100%;
  background-color: #f5f5f3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* padding: 2rem; */
  height: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const ContSearch = styled("div")`
  position: relative;
  background-color: #fff;
  width: 100%;
  @media (min-width: 960px) {
    width: 600px;
  }
  color: rgb(38 38 38 /1);
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  height: 50px;
  position: relative;
  input {
    outline: 2px solid transparent;
    outline-offset: 2px;
    flex: 1 1;
    height: 100%;
    border: none;
    outline: none;
  }
  input::placeholder {
    color: #c4c4c4;
    font-size: 14px;
  }
  span.icon {
    font-size: 1.5rem;
    color: #000;
  }
`;
export const SearchItems = styled("div")`
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  border-radius: 0.5rem;
  overflow-y: scroll;

  max-height: 24rem;
`;
export const SearchItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(243 244 246/1);
  :hover {
    background-color: rgb(243 244 246/0.5);
  }
  gap: 0.75rem;
  min-height: 7rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  img {
    width: 13rem;
    height: 7rem;
    max-width: 6rem;
  }
  div.txt {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  p.title {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  p.price {
    span {
      color: rgb(38 38 38/1);
      font-weight: bold;
    }
  }
  p.desc {
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
