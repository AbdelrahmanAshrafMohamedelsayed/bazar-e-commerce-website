import { styled } from "@mui/material";
export const FooterCont = styled("div")`
  padding-top: 5rem;
  background-color: #000;
  color: rgb(148 148 148 /1);
  padding-bottom: 5rem;
  margin-top: 7rem;
`;
export const FirstCard = styled("div")`
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #fff;
  }
`;

export const Logo = styled("img")`
  width: 100%;
  max-width: 200px;
`;
export const Icons = styled("div")`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled("span")`
  padding: 0.5rem;
  :hover {
    color: #fff;
  }
`;
export const Card2 = styled("div")`
  h3 {
    margin-bottom: 1.5rem;
    color: #fff;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 1rem;
    margin: 1rem auto;
    cursor: pointer;
    transition: 0.3s;
    width: fit-content;
    :hover {
      color: #fff;
    }

    display: flex;
    /* justify-content: space-between; */
    gap: 0.25rem;
    align-items: center;
  }
  @media (min-width: 900px) {
    li {
      width: 100%;
    }
  }
`;
export const Form = styled("div")`
  color: #fff;
  border: 1px solid #fff;
  width: 100%;
`;
export const Form1 = styled("div")`
  border: 1px solid #fff;
  input::placeholder {
    color: #fff;
    font-size: 0.8rem;
  }
  input {
    color: #fff;
    padding: 0.5rem 1rem;
  }
`;
export const Btn = styled("button")`
  color: #fff;
  font-weight: bold;
  border: 1px solid #fff;
  width: 100%;
  background-color: #000;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: #d2c8c8;
    color: #000;
  }
`;
