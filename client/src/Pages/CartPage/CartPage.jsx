import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import CartTotal from "../../Components/CartTotal/CartTotal";
import { MMContainer } from "../../Features/Shopping/Shopping.styled";
import {
  BtnReset,
  Content,
  GoShop,
  GoShop2,
  Image,
  NoElements,
  Wrap,
  Wrapper,
} from "./CartPage.styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CartActions } from "../../Store/cart";
import { ToastContainer, toast } from "react-toastify";
const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cart.items);
  console.log("items", items);
  const ResetCartHandler = (e) => {
    dispatch(CartActions.ClearCart());
    toast.error(`Cart is cleared`);
  };
  return (
    <>
      <Image>
        <img
          src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
        />
      </Image>
      <Wrapper>
        <MMContainer>
          {items.length !== 0 && (
            <Content>
              <div>
                <h2>shopping cart</h2>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <Wrap>
                  <BtnReset onClick={ResetCartHandler}>Reset cart</BtnReset>
                  <GoShop to={"/"}>
                    <KeyboardBackspaceIcon />
                    go shopping
                  </GoShop>
                </Wrap>
              </div>
              <CartTotal />
            </Content>
          )}
          {items.length === 0 && (
            <NoElements>
              <p>
                Your Cart is Empty. Please go back to Shopping and add products
                to Cart.
              </p>
              <GoShop2 to={"/"}>
                <span>
                  <KeyboardBackspaceIcon
                    sx={{
                      fontSize: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </span>
                go shopping
              </GoShop2>
            </NoElements>
          )}
        </MMContainer>
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
      </Wrapper>
    </>
  );
};

export default CartPage;
