import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Card1 = styled(Link)`
  text-decoration: none;
  display: block;
  color: #000;
  border: 1px solid #ccc;
  :hover img {
    transform: scale(1.1) rotate(-3deg);
  }
  :hover p.add {
    transform: translateX(9px);
  }
  :hover .prices {
    transform: translateX(200%);
  }
`;
export const Image = styled("div")`
  position: relative;
  overflow: hidden;

  :after {
    content: "Sale";
    position: absolute;
    top: 1rem;
    right: 0rem;
    padding: 0.5rem 1rem;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    font-size: 0.8rem;
    /* width: 100px; */
  }
  img {
    transition: 0.5s;
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }
  @media (min-width: 600px) {
    /* height: 7rem; */
    img {
      height: 20rem;
    }
  }
`;
export const Caption = styled("div")`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem 0.5rem;
  @media (min-width: 600px) {
    height: 7rem;
  }
  .pricesText {
    padding-right: 5px;
    position: relative;
    overflow: hidden;
    width: 105px;
    display: flex;
    justify-content: flex-end;
  }
  p.add {
    margin: 0;
    padding: 0;
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    white-space: pre;
    transition: 0.5s;
    transform: translateX(-200%);
    color: #858585;
    font-weight: 300;
    font-style: italic;
    /* transform: translateX(13px); */
    gap: 6px;
  }

  .prices {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    align-self: flex-start;
    transition: 0.5s;
  }

  span.sale {
    text-decoration: line-through;
    color: #858585;
    font-weight: 300;
    font-style: italic;
  }
  span.price {
    font-weight: 600;
    color: #000;
    font-style: italic;
  }
`;
export const Text = styled("div")`
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
  }
`;
