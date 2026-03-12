import React from "react";
import "./CheckoutForm.css";
const CheckoutDetail = () => {
  return (
    <div className="checkout-detail-container">
      <div className="order-summary">
        <h4>Your Order</h4>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Subtotals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Colorful Jacket × 1</td>
              <td>$69</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>$69.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>VAT</td>
              <td>$11</td>
            </tr>
            <tr className="total">
              <td>Total</td>
              <td>$85.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-methods">
        <div className="payment-option">
          <label>
            <input type="radio" name="payment" defaultChecked />
            Direct Bank Transfer
          </label>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        <div className="payment-option">
          <label>
            <input type="radio" name="payment" />
            Check Payments
          </label>
          <p>
            Phasellus sed volutpat orci. Fusce eget lorem mauris vehicula
            elementum gravida nec dui. Aenean aliquam varius ipsum, non
            ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
            aliquet magna posuere eget.
          </p>
        </div>

        <div className="payment-option">
          <label>
            <input type="radio" name="payment" />
            Cash on delivery
          </label>
          <p>
            Phasellus sed volutpat orci. Fusce eget lorem mauris vehicula
            elementum gravida nec dui. Aenean aliquam varius ipsum, non
            ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
            aliquet magna posuere eget.
          </p>
        </div>

        <div className="payment-option">
          <label>
            <input type="radio" name="payment" />
            Paypal
          </label>
          <p>
            Phasellus sed volutpat orci. Fusce eget lorem mauris vehicula
            elementum gravida nec dui. Aenean aliquam varius ipsum, non
            ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
            aliquet magna posuere eget.
          </p>
        </div>

        <p className="privacy-note">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default CheckoutDetail;
