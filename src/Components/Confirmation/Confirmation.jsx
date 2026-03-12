import React from "react";
import check from "../../assets/images/check.png";
import "./Confirmation.css"; // CSS file import karein

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      {/* Header Section */}
      <div className="confirmation-head">
        <img src={check} alt="check" />
        <h3>Your order is completed!</h3>
        <p>Thank you. Your order has been received.</p>
      </div>

      {/* Order Summary Bar */}
      <div className="order-summary-bar">
        <div className="summary-item">
          <span>Order Number</span>
          <strong>6058</strong>
        </div>
        <div className="summary-item border-left">
          <span>Date</span>
          <strong>12/03/2026</strong>
        </div>
        <div className="summary-item border-left">
          <span>Total</span>
          <strong>$69.00</strong>
        </div>
        <div className="summary-item border-left">
          <span>Payment Method</span>
          <strong>Direct Bank Transfer</strong>
        </div>
      </div>

      {/* Order Details Table */}
      <div className="order-details-section">
        <h3>ORDER DETAILS</h3>
        <div className="details-table">
          <div className="table-header">
            <span>PRODUCTS</span>
            <span>SUBTOTALS</span>
          </div>

          <div className="table-row">
            <span>Colorful Jacket x 1</span>
            <span>$69</span>
          </div>

          <div className="table-row">
            <strong>SUBTOTAL</strong>
            <span>$69.00</span>
          </div>

          <div className="table-row">
            <strong>SHIPPING</strong>
            <span>$5</span>
          </div>

          <div className="table-row">
            <strong>VAT</strong>
            <span>$11</span>
          </div>

          <div className="table-row total-row">
            <strong>TOTAL</strong>
            <strong>$85.00</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
