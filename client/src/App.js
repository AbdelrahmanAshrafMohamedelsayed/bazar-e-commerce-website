import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Features/Footer/Footer";
import NavBar from "./Features/NavBar/NavBar";
// import HomePage, { loaderProducts } from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import CartPage from "./Pages/CartPage/CartPage";
import Error from "./Pages/Error/error";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { tokenLoader } from "./util/Auth";
import { LogoutAction } from "./Pages/logout";
import HomePage, { loaderProducts } from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      loader: tokenLoader,
      id: "root",
      children: [
        { index: true, element: <HomePage />, loader: loaderProducts },
        { path: "product/:id", element: <ProductPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "auth/login", element: <Login /> },
        { path: "auth/signup", element: <SignUp /> },
        { path: "logout", action: LogoutAction },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
