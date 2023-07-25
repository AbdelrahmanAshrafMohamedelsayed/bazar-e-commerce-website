import { styled } from "@mui/material";

export const FirstCont = styled("div")`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  border-radius: 0.375rem;
  letter-spacing: 0.025em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid rgb(156 163 175 /1);
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 3rem;
  span {
    font-size: 1rem;
    color: rgb(17 24 39 /1);
  }

  img {
    width: 2rem;
  }
`;
