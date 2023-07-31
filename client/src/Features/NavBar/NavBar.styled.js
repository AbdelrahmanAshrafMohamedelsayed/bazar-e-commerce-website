import { styled } from "@mui/material";
import { Link } from "react-router-dom";
// import { styled } from '@mui/system';

export const FirstCont = styled("div")`
  border-bottom: 1px solid red;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
`;

export const Header = styled("div")`
  .ic {
    display: block;
  }
  .ic:hover {
    border-radius: 50%;
    background-color: rgba(25, 118, 210, 0.04);
    color: #f50057;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
export const Logo = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;
  width: 7rem;
  img {
    width: 100%;
  }
`;
export const LinksFirst = styled("div")`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  @media (min-width: 992px) {
    .menu {
      display: none;
    }
  }
  /* Large */
  @media (max-width: 768px) {
    .menu {
      display: block;
    }
  }
`;
export const LinksSecond = styled("ul")`
  display: flex;

  gap: 1.25rem;
  align-items: center;
  li {
    padding: 0.5rem;
    /* transition: 0.5s; */
  }
  a {
    transition: 0.3s;
  }
  a.active,
  a:hover {
    color: #f50057;
    text-decoration: underline;
  }
  @media (max-width: 990px) {
    flex-direction: column;
    position: absolute;
    top: calc(100% + 2px);
    gap: 0;
    /* right: 6rem; */
    left: 0;
    background-color: #f2f2f2;
    li {
      width: 100vw;
      display: block;
      color: #fff;
      border-bottom: 1px solid #fff;
    }
    a {
      padding: 0.5rem;
      display: block;
    }
    button {
      padding: 0.5rem;
      display: block;
    }

    li:hover {
      background-color: #2e7d32;
      text-decoration: none;
    }
    a.active {
      color: #fff;
      text-decoration: none;
    }
    li:has(.active) {
      background-color: #f50057;
    }
    li:hover a,
    li:hover button,
    li a:hover {
      color: #fff;
      text-decoration: none;
      padding-left: 1rem;
    }
  }
  @media (max-width: 992px) {
    display: ${(props) => props.dis};
  }
  /* Medium */
  li button {
    background-color: #ffff;
    border: none;
    outline: none;
  }
`;

// export const LinksSecond = styled("ul")({
//   display: {
//     xs: "none",
//     md: "flex",
//   },

//   //   display: "flex",
//   gap: "1.25rem",
//   alignItems: "center",
//   li: {
//     padding: "0.5rem",
//   },
//   a: {
//     "&:hover": {
//       color: "#f50057",
//       textDecoration: "underline",
//     },
//   },
// });

export const MMContainer = styled("div")`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  height: 5rem;

  /* Small */
  @media (min-width: 768px) {
    width: 750px;
  }
  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }
  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
