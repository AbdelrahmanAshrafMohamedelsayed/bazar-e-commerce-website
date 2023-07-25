import { Pagination, styled } from "@mui/material";

export const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  p {
    margin: 0;
    padding: 0;
    font-weight: 200;
    font-style: italic;
    color: gb(109 109 109/1);
  }
`;
export const StyledPagination = styled(Pagination)`
  button {
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
  }
  .Mui-selected {
    background-color: #000 !important;
    color: #fff !important;
  }
  button:hover {
    border: 1px solid #000;
  }
`;
