import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restoreCart } from "../redux/cart.slicer";
import { placeOrder } from "../services/order.service";

const Order = () => {
  const [redirectStatus, setRedirectStatus] = useState("");
  const [searchParams] = useSearchParams();
  const cart = useSelector((store) => store.cart.cart);
  const user = useSelector((store) => store.cart.user);
  const userId = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const cartTotal = useSelector((store) => store.cart.totalPrice);

  const payload = {
    items: cart,
    userDetails: user,
    user: userId._id,
    total: cartTotal,
  };

  useEffect(() => {
    setRedirectStatus(searchParams.get("redirect_status"));
  }, [searchParams]);

  useEffect(() => {
    if (cartTotal > 0) {
      placeOrder(payload)
        .then((response) => {
          dispatch(restoreCart());
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("error");
    }
  }, [cart]);

  const renderMessage = () => {
    if (!redirectStatus || redirectStatus !== "succeeded")
      return <p>Something went wrong with payment.</p>;
    return (
      <p>
        You have successfully placed your order. You will receive a notification
        on the phone number you provided when creating the order when our
        courier arrives at your address.Thank you for your purchase.
      </p>
    );
  };
  return (
    <div className="orderWrapper">
      <div className="content">
        <h2>Your order have been recived.</h2>
        {renderMessage()}
      </div>
    </div>
  );
};

export default Order;
