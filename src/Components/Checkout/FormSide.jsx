import React from "react";
import "./CheckoutForm.css";
const FormSide = () => {
  return (
    <div className="checkout-form">
      <h3>Billing Details</h3>
      <form>
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="text" placeholder="Company Name (optional)" />

        <select>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="usa">USA</option>
        </select>

        <input type="text" placeholder="Street Address*" required />
        <input type="text" placeholder="Apartment, suite, etc. (optional)" />
        <input type="text" placeholder="Town / City *" required />
        <input type="text" placeholder="Postcode / ZIP *" required />
        <input type="tel" placeholder="Phone *" required />
        <input type="email" placeholder="Your Mail *" required />
        <textarea placeholder="Order Notes (Optional)"></textarea>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default FormSide;
