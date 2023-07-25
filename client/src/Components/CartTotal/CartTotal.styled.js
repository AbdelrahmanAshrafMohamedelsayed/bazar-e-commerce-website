import { styled } from "@mui/material";
export const Wrapper2 = styled("div")`
  background-color: #fafafa;
  padding: 1.5rem 1rem;
  .k {
    /* visibility: hidden; */
    display: none;
  }
  button.StripeCheckout {
    background: transparent !important;
    width: 100% !important;
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    font-weight: 600 !important;
    padding: 0.75rem 0 !important;
    border: none !important;
    outline: none !important;
    color: #fff !important;
    background-color: #000 !important;
    cursor: pointer !important;
    transition: 0.5s !important;
    :hover {
      background-color: rgb(31 41 55 / 1) !important;
    }
    &:active {
      background-color: #fff !important;
      color: red !important;
    }
    margin-bottom: 1rem !important;
  }
  button.StripeCheckout span {
    color: #fff !important;
    background: transparent !important;
    font-size: 1rem !important;
    border: none !important;
    outline: none !important;
    line-height: 1.5rem !important;
    box-shadow: none !important;
  }
`;

export const Wrapper = styled("div")`
  flex-basis: 33%;
  /* background-color: #fafafa;
  
  padding: 1.5rem 1rem; */
  /* background-color: #fafafa; */
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 1200px) {
    /* width: 1170px; */
    min-width: 22rem;
  }
  @media (max-width: 871px) {
    min-width: 0;
    max-width: 30rem;
  }
`;
export const TotalPrice = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;
  span.price {
    font-size: 1.125rem;
    font-weight: 700;
  }
  margin-bottom: 1rem;
`;
export const Shipping = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(224 225 228);
`;
export const Total2 = styled("div")`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;
export const Checkout = styled("button")`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  padding: 0.75rem 0;
  border: none;
  outline: none;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: rgb(31 41 55 / 1);
  }
  &:active {
    background-color: #fff;
    color: red;
  }
  margin-bottom: 1rem;
`;
