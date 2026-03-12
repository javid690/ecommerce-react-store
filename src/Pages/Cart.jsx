import React, { useContext, useMemo, useState } from "react";
import { UseCart } from "../Contexts/UseToCart";
import "./Cart.css";
import CartDetail from "../Components/Cart/CartDetail";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Checkout from "../Components/Checkout/Checkout";
import Confirmation from "../Components/Confirmation/Confirmation";

const Cart = () => {
  const { cartitem, updateQty, removeFromCart } = useContext(UseCart);

  const totalPrice = useMemo(() => {
    return cartitem.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cartitem]);

  const vat = useMemo(() => totalPrice * 0.25, [totalPrice]);

  // Track which tab is active
  const [carttabactive, setCartTabActive] = useState("cart"); // "cart", "checkout", "confirmation"

  return (
    <div className="cart-hero-section">
      <h2 className="cart-title">Cart</h2>

      {/* tabs btn */}
      <div className="carts-top-bar">
        {/* Tab 1 */}
        <div
          className={`carts-tabs ${
            carttabactive === "cart" ? "active-cart-tab" : ""
          }`}
        >
          <button onClick={() => setCartTabActive("cart")}>
            01 shopping bag
          </button>
          <p>Manage your items list</p>
        </div>
        {/* Tab 2 */}
        <div
          className={`carts-tabs ${
            carttabactive === "checkout" ? "active-cart-tab" : ""
          }`}
        >
          <button onClick={() => setCartTabActive("checkout")}>
            02 shipping and checkout
          </button>
          <p>Checkout your items list</p>
        </div>
        {/* Tab 3 */}
        <div
          className={`carts-tabs ${
            carttabactive === "confirmation" ? "active-cart-tab" : ""
          }`}
        >
          <button onClick={() => setCartTabActive("confirmation")}>
            03 confirmation
          </button>
          <p>Review and submit your order</p>
        </div>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {carttabactive === "cart" && (
          <div className="cart-products-conatiner">
            <div className="cart-products-side">
              <div className="cart-product-leader-board">
                <div className="top-bar">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                </div>
              </div>

              <div className="cart-container">
                {cartitem.length === 0 && <p>Your cart is empty!</p>}

                {cartitem.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="product-info">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <div className="product-details">
                        <h3>{item.name}</h3>
                        <p className="reviews">Reviews 8k</p>
                      </div>
                    </div>

                    <div className="price-controls">
                      <span className="unit-price">${item.price}</span>

                      <div className="quantity-selector">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                        >
                          -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <IoIosCloseCircleOutline />
                      </button>
                      <span className="total-price">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <CartDetail totalPrice={totalPrice} cartitem={cartitem} vat={vat} />
          </div>
        )}

        {carttabactive === "checkout" && <Checkout />}
        {carttabactive === "confirmation" && <Confirmation />}
      </div>
    </div>
  );
};

export default Cart;
