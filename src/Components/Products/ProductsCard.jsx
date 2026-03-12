import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { UseDetail } from '../../Contexts/UseContext';
import { UseCart } from '../../Contexts/UseToCart';
import { UseWishlist } from '../../Contexts/UseWishlist';

const ProductsCard = ({ product }) => {
  const {addToWishlist , wishlistItem} = useContext(UseWishlist)
  const {addToCart} = useContext(UseCart);
   const navigate = useNavigate();
  const { setSelectedProduct } = useContext(UseDetail);


  const handleClick = () => {
    setSelectedProduct(product);   
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="product-card">
      <div className="product-img">
        <img onClick={handleClick}
          src={product.image} 
          alt={product.name}
        />
        <button className="add-to-cart" onClick={()=> addToCart(product)}>Add To Cart</button>
      </div>
      <div className="card-content">
        <p className="category">{product.category}</p> {/* dynamic category */}
        <CiHeart className="heart-icon" onClick={()=> addToWishlist(product)}  />
      </div>
      <h3 className="product-name">{product.name}</h3> {/* dynamic name */}
      <p className="price">${product.price}</p> {/* dynamic price */}
      <div className="review">{product.reviews} Reviews</div> {/* dynamic reviews */}
    </div>
  )
}

export default ProductsCard
