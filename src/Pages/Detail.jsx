import React, { useContext } from 'react'
import './Detail.css'
import { UseDetail } from '../Contexts/UseContext';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import MoreInfo from '../Components/MoreInfo/MoreInfo';
import { UseCart } from '../Contexts/UseToCart';
import { UseWishlist } from '../Contexts/UseWishlist';
const Detail = (product) => {

  const {addToCart} = useContext(UseCart);
 const {addToWishlist , wishlistItem}=useContext(UseWishlist)
  const navigate = useNavigate()
  const { selectedProduct } = useContext(UseDetail);

  if (!selectedProduct) return <h2>No product selected</h2>;
  
  return (
    <div className='product-detail-section'>
      <div className="detail-container">
        <div className="prouct-images-gallery">
          <div className="small-images-side">
            <img src={selectedProduct.images[0]} alt="part1-img" />
            <img src={selectedProduct.images[1]} alt="part1-img" />
            <img src={selectedProduct.images[2]} alt="part1-img" />
          </div>
          {/* bg img */}
          <div className="big-img">
            <img src={selectedProduct.image} alt="main-img" />
          </div>
        </div>

        <div className="products-conetnt-side">
          {/* bread crumb */}
          <div className="bread-crumbs">
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate('/shop')}>To Shop</a>
          </div>
          <h2 className='product-title'>{selectedProduct.name}</h2>
          <p>8k+ reviews</p>
          <h4 className="price">{selectedProduct.price}</h4>
          <p className="detail-desc">{selectedProduct.description}</p>
          <div className="product-size">
            <h3 className="size-title">Size</h3>
            <button>{selectedProduct.sizes[0]}</button>
            <button>{selectedProduct.sizes[1]}</button>
            <button>{selectedProduct.sizes[2]}</button>
            <button>{selectedProduct.sizes[3]}</button>
            <button>{selectedProduct.sizes[4]}</button>
          </div>
          <div className="products-colors">
            <h3 className="color-title">Colors</h3>

            <div className="color-buttons">
            <button className='black' title='black'></button>
            <button className='gray' title='gray'></button>
            <button className='red' title='red'></button>
            </div>
          </div>
          <div className="products-carts-btns">
           <div className="products-quantaties">
            <button>-</button>
            <button>0</button>
            <button>+</button>
           </div>
           <div className="cart-btn">
            <button className='toCart-btn' onClick={()=>addToCart(selectedProduct)}>add to cart</button>
           </div>
          </div>
          <div className="wishlist-share">
            <button className='add-wishlist' onClick={()=>addToWishlist(selectedProduct)}> <CiHeart /> Add to wishlist</button>
            <button className='share-btn'> <CiShare2 /> Share</button>
          </div>
          <div className="tags">
           <p>TAGS</p> 
           <span>{selectedProduct.tags}</span>
          </div>
        </div>
      </div>
      <MoreInfo />
    </div>
  )
}

export default Detail