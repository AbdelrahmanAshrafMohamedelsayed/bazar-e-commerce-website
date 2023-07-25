import { AppBar, Avatar, Badge, Checkbox, Container } from "@mui/material";
import {
  FirstCont,
  Header,
  LinksFirst,
  LinksSecond,
  Logo,
  MMContainer,
} from "./NavBar.styled";
import logo from "./../../assets/logoDark.png";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { avatarImage } from "../../assets/index";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useEffect, useState } from "react";
import {
  Form,
  Link,
  NavLink,
  useNavigate,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../Store/user";
import { auth } from "../../firebase/firebase.Config";
const NavBar = () => {
  const submit = useSubmit();
  const logoutHandler = async (e) => {
    e.preventDefault();
    // await signOut(auth);
    console.log("logout1");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // toast.success("Log Out Successfully!");
        dispatch(userActions.Removedata());
        submit(null, { action: "/logout", method: "post" });
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Menu, setMenu] = useState(false);
  // const [count, setCount] = useState(0);
  let state = Menu ? "flex" : "none";
  const Quantity = useSelector((state) => state.cart.cart.items.length);
  const user = useSelector((state) => state.cart.user).user;
  const token = useSelector((state) => state.cart.user).token;
  console.log(user);
  return (
    <FirstCont sx={{ boxShadow: 1 }}>
      <MMContainer>
        <Header>
          <Logo to="/">
            <img src={logo} alt="logo" />
          </Logo>
          <LinksFirst>
            {/* <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            > */}
            <LinksSecond dis={state}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  Pages
                </NavLink>
              </li> */}
              {token && (
                <li>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    onClick={logoutHandler}
                    end
                  >
                    Log Out
                  </NavLink>
                </li>
                //   <li>
                //   <Form method="post" action="/logout">
                //     <button>Logout</button>
                //   </Form>
                // </li>
              )}
              {!token && (
                <li>
                  <NavLink
                    to="/auth/signup"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    Sign Up
                  </NavLink>
                </li>
              )}
              {!token && (
                <li>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    end
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </LinksSecond>
            <span className="menu">
              <Checkbox
                onClick={() => setMenu(!Menu)}
                icon={
                  <MenuOutlinedIcon
                    sx={{
                      fontSize: "2rem",
                    }}
                  />
                }
                checkedIcon={
                  <MenuOpenIcon
                    sx={{
                      fontSize: "2rem",
                      color: "#f50057",
                    }}
                  />
                }
              />
            </span>
            <span className="ic">
              <Badge
                badgeContent={Quantity}
                color="success"
                max={9}
                overlap="circular"
              >
                <LocalMallOutlinedIcon
                  sx={{
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("cart")}
                />
              </Badge>
            </span>
            {token && user && user.photoURL && (
              <Avatar alt="Remy Sharp" src={user.photoURL} />
            )}
          </LinksFirst>
        </Header>
      </MMContainer>
    </FirstCont>
  );
};

export default NavBar;
