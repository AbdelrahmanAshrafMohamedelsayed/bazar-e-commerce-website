import { useSelector } from "react-redux";
import {
  Checkout,
  Shipping,
  Total2,
  TotalPrice,
  Wrapper,
  Wrapper2,
} from "./CartTotal.styled";
import { useRef, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Box } from "@mui/material";

const CartTotal = () => {
  const userInfo = useSelector((state) => state.cart.user);
  const refCheckout = useRef();
  console.log();
  const Amount = +useSelector((state) => state.cart.cart.totalAmount).toFixed(
    3
  );
  const [pay, setpay] = useState(false);
  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: Amount * 100,
      token: token,
    });
  };
  const HandlePay = () => {
    if (!userInfo.token) {
      toast.error("Please Login First");
      setpay(false);
      return;
    }
    refCheckout.current.children[0].click();
    setpay(true);
  };
  return (
    <Wrapper>
      <Wrapper2>
        <h2>cart totals</h2>
        <TotalPrice>
          <span>Subtotal</span>
          <span className="price">${+Amount}</span>
        </TotalPrice>
        <Shipping>
          <span>Shipping</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
            veritatis.
          </p>
        </Shipping>
        <Total2>
          <span>Total</span>
          <span className="price">${+Amount}</span>
        </Total2>
        <Checkout onClick={HandlePay}>proceed to checkout</Checkout>
        {
          <div className="k" ref={refCheckout}>
            <StripeCheckout
              stripeKey="pk_test_51NXlhpAO90IZK0xDVRLwtVAwDh456fgi2nsacGOQ5ZLCrc4WJHFduy1PlLcrV77YN5MKfINnFc3gjReQutmNH6wo00ZMWNCrzD"
              name="Bazar Online Shopping"
              amount={Amount * 100}
              label="Pay to bazar"
              description={`Your Payment amount is $${Amount}`}
              token={payment}
              email={userInfo.user.email}
            />
          </div>
        }
      </Wrapper2>
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

export default CartTotal;
