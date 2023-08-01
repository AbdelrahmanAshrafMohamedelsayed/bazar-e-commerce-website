import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import axios from "axios";
import Banner from "./../../Features/Banner/Banner";
import Shopping from "./../../Features/Shopping/Shopping";
import Search from "../../Features/Search/Search";

const HomePage = () => {
  // const products = useLoaderData().data;
  const products = useRouteLoaderData("home").data;

  console.log(products);
  return (
    <>
      <Search />
      <Banner />
      <Shopping products={products} />
    </>
  );
};

export default HomePage;
export const loaderProducts = async () => {
  axios.defaults.headers.common["Accept"] = "application/json";
  let resposnd;
  try {
    const response = await axios(
      "https://fakestoreapiserver.reactbd.com/products",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    resposnd = response;
  } catch (error) {
    // console.log(error.response.data);
    throw json(
      { message: "Cannot Fetch Products" },
      {
        status: 500,
      }
    );
  }
  console.log(resposnd);
  return resposnd;
};
