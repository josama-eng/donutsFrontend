import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect } from "react";

const PaymentComponent = ({ ck }) => {
  const stripe = useStripe();
  const elements = useElements();

  const payHandler = () => {
    if (!stripe || !elements || !ck) {
      console.log("error");
    }

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://stalwart-nougat-a2bd57.netlify.apporder/order",
      },
    });
  };

  return (
    <>
      {stripe && (
        <div className="paymentContainer">
          <PaymentElement />
          <button onClick={payHandler}>Pay</button>
        </div>
      )}
    </>
  );
};

export default PaymentComponent;
