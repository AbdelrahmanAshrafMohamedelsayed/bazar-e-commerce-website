import { useDispatch } from "react-redux";
import { test } from "../../assets";
import {
  AddCont,
  First,
  FirstCont,
  Image,
  Quantity,
  SecondCont,
  Wrapper,
} from "./CartItem.styled";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { CartActions } from "../../Store/cart";
import { ToastContainer, toast } from "react-toastify";
const CartItem = ({ item }) => {
  console.log(item.title);
  const dispatch = useDispatch();
  const AddItemHandler = (e) => {
    e.preventDefault();
    console.log("addToCartHandler");
    // console.log("title", title, "price", price, "id", id);
    dispatch(
      CartActions.AddItem({
        id: item.id,
        title: item.title,
        oldPrice: +item.oldPrice,
        NewPrice: +item.NewPrice,
        image: item.image,
      })
    );
    toast.success(`${item.title} added to cart`);
  };
  const RemoveItemHandler = (e) => {
    e.preventDefault();
    console.log(item.id);
    // console.log("title", title, "price", price, "id", id);
    dispatch(CartActions.DecreaseAmountItem(item.id));
    toast.error(`${item.title} is removed`);
  };
  const RemoveItemAllHandler = (e) => {
    dispatch(CartActions.RemoveItem(item.id));
    toast.error(`${item.title} is removed`);
  };
  return (
    <Wrapper>
      <First>
        <FirstCont>
          <span onClick={RemoveItemAllHandler}>
            <RemoveShoppingCartIcon />
          </span>
          <Image>
            <img src={item.image} alt="1" />
          </Image>
        </FirstCont>
        <SecondCont>
          <p className="title">{item.title}</p>
          <AddCont>
            <p className="price">${item.NewPrice}</p>
            <Quantity>
              <p>Quantity</p>
              <div className="cont">
                <button className="icon" onClick={RemoveItemHandler}>
                  -
                </button>
                <span className="num">{item.TotalQuantity}</span>
                <button className="icon" onClick={AddItemHandler}>
                  +
                </button>
              </div>
            </Quantity>
            <p className="price">${item.TotalAmount}</p>
          </AddCont>
        </SecondCont>
      </First>
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
  );
};

export default CartItem;
