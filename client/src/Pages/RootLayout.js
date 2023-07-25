import { Outlet } from "react-router-dom";
import Footer from "../Features/Footer/Footer";
import NavBar from "../Features/NavBar/NavBar";

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
