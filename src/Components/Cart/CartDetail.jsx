import React from 'react'

const CartDetail = ({totalPrice ,cartitem , vat}) => {
  return (
    <div className="cart-product-detail-side">
          <div className="cart-totals">
            <h3>Cart Totals</h3>
            <div className="totals-row">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="totals-row">
              <p>Items</p>
              <p>{cartitem.length}</p>
            </div>
            <div className="totals-row">
              <p>VAT (25%)</p>
              <p>${vat.toFixed(2)}</p>
            </div>
            <div className="totals-row total">
              <p>Total</p>
              <p>${(totalPrice + 5 + vat).toFixed(2)}</p>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
  )
}

export default CartDetail