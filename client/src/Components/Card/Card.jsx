import { Grid } from "@mui/material";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Image, Text, Caption, Card1 } from "./Card.styled";
import { test } from "../../assets";
import { useDispatch } from "react-redux";
import { CartActions } from "../../Store/cart";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Aos from "aos";

const Card = ({ product, productsNum }) => {
  const dispatch = useDispatch();
  const AddItemHandler = (e) => {
    e.preventDefault();
    console.log("addToCartHandler");
    // console.log("title", title, "price", price, "id", id);
    dispatch(
      CartActions.AddItem({
        id: product._id,
        title: product.title,
        oldPrice: +product.oldPrice,
        NewPrice: +product.price,
        image: product.image,
      })
    );
    toast.success(`${product.title} added to cart`);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Grid item xs={12} md={4} sm={6} lg={3} data-aos="fade-up">
        <Card1
          sx={{ boxShadow: 2 }}
          to={`product/${product._id}`}
          state={product}
        >
          <Image>
            <img src={product.image} alt="img" />
          </Image>
          <Caption>
            <Text>
              <h4>{product.title.substring(0, 15)}</h4>
              <p>{product.category}</p>
            </Text>
            <div className="pricesText">
              <p className="add" onClick={AddItemHandler}>
                add to cart
                <span>
                  <ArrowRightAltOutlined />
                </span>
              </p>
              <div className="prices">
                <span className="sale">${+product.oldPrice}</span>
                <span className="price">${+product.price}</span>
              </div>
            </div>
          </Caption>
        </Card1>
      </Grid>
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
    </>
  );
};

export default Card;
