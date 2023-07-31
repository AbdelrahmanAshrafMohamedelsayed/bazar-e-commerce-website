import { useLocation, useParams } from "react-router-dom";
// import { MMContainer } from "../Shopping/Shopping.styled";
import {
  Add,
  Content,
  Desc,
  Image,
  Quantity,
  Ratingc,
  Wrapper,
} from "./ProductPage.styled";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { CartActions } from "../../Store/cart";
import { ToastContainer, toast } from "react-toastify";
import { MMContainer } from "../../Features/Shopping/Shopping.styled";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [product, setproduct] = useState(null);
  const [Num, setNum] = useState(1);
  const IncreaseHandler = () => {
    setNum((prev) => prev + 1);
  };
  const DecreaseHandler = () => {
    if (Num !== 1) setNum((prev) => prev - 1);
  };
  const AddItemHandler = (e) => {
    e.preventDefault();
    console.log("addToCartHandler");
    dispatch(
      CartActions.AddItemByQuantity({
        item: {
          id: product._id,
          title: product.title,
          oldPrice: +product.oldPrice,
          NewPrice: +product.price,
          image: product.image,
        },
        quantity: Num,
      })
    );
    toast.success(`${product.title} added to cart`);
  };
  console.log(product);
  useEffect(() => {
    setproduct(location.state);
  }, [location]);
  return (
    <MMContainer>
      <Wrapper>
        <Image>
          <img src={product && product.image} alt="img" />
        </Image>
        <Content>
          <h1>{product && product.title}</h1>
          <div className="prices">
            <span className="sale">${product && product.oldPrice}</span>
            <span className="price">${product && product.price}</span>
          </div>
          <Ratingc>
            <Rating
              name="disabled"
              value={product && product.rating}
              disabled
            />
            <span>({product && product._id} Customer review)</span>
          </Ratingc>
          <Desc>{product && product.description}</Desc>
          <Add>
            <Quantity>
              <p>Quantity</p>
              <div className="cont">
                <button className="icon" onClick={DecreaseHandler}>
                  -
                </button>
                <span className="num">{Num}</span>
                <button className="icon" onClick={IncreaseHandler}>
                  +
                </button>
              </div>
            </Quantity>
            <button className="add" onClick={AddItemHandler}>
              Add to cart
            </button>
          </Add>
        </Content>
      </Wrapper>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </MMContainer>
  );
};

export default ProductPage;
