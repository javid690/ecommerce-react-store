import React from "react";
import FormSide from "./FormSide";
import CheckoutDetail from "./CheckoutDetail";

const Checkout = () => {
  return (
    <div className="checkout-form-container">
      <FormSide />
      <CheckoutDetail />
    </div>
  );
};

export default Checkout;
