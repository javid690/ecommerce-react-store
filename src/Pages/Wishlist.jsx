import React, { useContext } from 'react';
import './Wishlist.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { UseWishlist } from '../Contexts/UseWishlist';
import { UseCart } from '../Contexts/UseToCart';

const Wishlist = () => {
  // cart
  const {addToCart} = useContext(UseCart)
  const { wishlistItem, removeFromWishlist } = useContext(UseWishlist);

  // Ensure we always work with a clean array and drop any null/undefined items
  const safeWishlistItems = Array.isArray(wishlistItem)
    ? wishlistItem.filter(Boolean)
    : [];

  return (
    <div className='wishlist-hero-section'>
      <h2 className="wishlist-title">Wishlist</h2>

      <div className="wishlist-top-bar">
        <div className="wishlist-tabs">
          <button>01 shopping bag</button>
          <p>Manage your items list</p>
        </div>
      </div>

      {/* table */}
      <div className="wishlist-products-container">

        {/* header */}
        <div className="wishlist-header">
          <p>Product name</p>
          <p>Unit price</p>
          <p>Stock status</p>
          <p></p>
        </div>

        {/* rows */}
        {safeWishlistItems.length === 0 ? (
          <p className="empty-wishlist">Your wishlist is empty.</p>
        ) : (
          safeWishlistItems.map((item) => (
            <div className="wishlist-product-detail" key={item.id}>
              <div className="product-info">
                <IoIosCloseCircleOutline
                  className='remove-wishlist'
                  onClick={() => removeFromWishlist(item.id)}
                />
                <img src={item.image} alt={item.name || ''} />
                <span className='wishlist-product-name'>{item.name}</span>
              </div>
              <p>${item.price}</p>
              <p className="stock">In Stock</p>
              <button className="cart-btn" onClick={()=>addToCart(item)}>Add to Cart</button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Wishlist;