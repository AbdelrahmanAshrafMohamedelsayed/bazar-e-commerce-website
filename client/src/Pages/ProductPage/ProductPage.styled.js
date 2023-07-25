import { styled } from "@mui/material";
export const Wrapper = styled("div")`
  display: flex;
  /* align-items: center; */
  /* gap: 3rem; */
  margin-top: 3rem;
  margin-bottom: 3rem;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Image = styled("div")`
  width: 45%;
  object-fit: cover;
  position: relative;
  img {
    width: 100%;
    height: 550px;
  }
  :after {
    content: "Sale";
    position: absolute;
    top: 1rem;
    right: 0rem;
    padding: 0.5rem 2.5rem;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
    /* width: 100px; */
  }
  @media (max-width: 600px) {
    width: 100%;
    img {
      height: 450px;
    }
  }
`;
export const Content = styled("div")`
  @media (max-width: 600px) {
    width: 100%;
  }
  width: 50%;
  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  .prices {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  span.sale {
    text-decoration: line-through;
    color: #858585;
    font-weight: 300;
    font-size: 1.25rem;
  }
  span.price {
    font-size: 1.75rem;
    font-weight: bold;
  }
`;
export const Ratingc = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  span {
    color: #858585;
    font-weight: 300;
    font-style: italic;
  }
`;
export const Desc = styled("p")`
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(107 114 128 /1);
`;
export const Add = styled("div")`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button.add {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
    border: none;
    background-color: #000;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    button:hover {
      background-color: #fff;
      color: #000;
    }
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
