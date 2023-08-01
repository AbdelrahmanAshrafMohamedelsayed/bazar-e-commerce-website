import { Outlet } from "react-router-dom";
import Footer from "../Features/Footer/Footer";
import NavBar from "../Features/NavBar/NavBar";
import Search from "../Features/Search/Search";
// import { Search } from "@mui/icons-material";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
