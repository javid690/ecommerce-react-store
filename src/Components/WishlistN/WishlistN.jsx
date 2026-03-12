import React, { useContext } from 'react'
import { CiCircleCheck } from "react-icons/ci";
import './WishlisN.css'
import { UseWishlist } from '../../Contexts/UseWishlist';
const WishlistN = () => {
    const {notification} = useContext(UseWishlist)
    if(!notification)return null;
  return (
   <div className='notification'>
         <div className='msg-content'>
           <CiCircleCheck />
           <p className='wishlist-msg'>Added to Wishlist!</p>
         </div>
       </div>
  )
}

export default WishlistN