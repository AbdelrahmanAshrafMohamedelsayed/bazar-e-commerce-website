import { styled } from "@mui/material";
export const Wrapper = styled("div")`
  flex-basis: 66%;
  margin-bottom: 2rem;
`;
export const First = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 815px) {
    gap: 1rem;
  }
  @media (max-width: 560px) {
    /* display: none; */
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 815px) {
    /* display: none; */
    margin-top: 1rem;
  }
`;
export const FirstCont = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.25rem;
    line-height: 1.75rem;
    cursor: pointer;
    color: rgb(75 85 99 / 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 560px) {
    span {
      display: none;
    }
  }
`;
export const Image = styled("div")`
  width: 8rem;
  height: 8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SecondCont = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  .title {
    font-weight: bold;
    width: 13rem;
  }
  @media (max-width: 1200px) {
    /* width: 1170px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 815px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 750px) {
    /* min-width: 0; */
    flex-direction: column;
  }
`;
export const AddCont = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  p.price {
    width: 2.5rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 815px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const Quantity = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgb(224 225 228);
  p {
    color: rgb(107 114 128 /1);
  }

  padding: 0.75rem;
  .cont {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  button.icon {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    background-color: #fff;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: rgb(107 114 128 /1);
    border: 1px solid rgb(224 225 228);
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
  }
  button.icon:hover {
    background-color: #374151;
    color: #fff;
  }
  span.num {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: rgb(107 114 128 /1);
  }
`;
