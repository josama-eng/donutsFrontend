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
        return_url: "https://tubular-sundae-150fb1.netlify.app/order",
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
