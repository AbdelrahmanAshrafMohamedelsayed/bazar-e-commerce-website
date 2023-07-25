import { Select, styled } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export const Former = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    color: rgb(118 118 118 /1);
  }
`;
export const SelectStyle = styled(Select)`
  width: 5rem;
`;
