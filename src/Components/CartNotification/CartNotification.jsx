import React, { useContext } from 'react'
import { CiCircleCheck } from "react-icons/ci";
// import { UseCart } from '../context/UseCartProvider';
import { UseCart } from '../../Contexts/UseToCart';
import './Notification.css'

const CartNotification = () => {
  const { showNotification } = useContext(UseCart);

  if (!showNotification) return null;
   
  return (
    <div className='notification'>
      <div className='msg-content'>
        <CiCircleCheck />
        <p className='cart-msg'>Added to cart!</p>
        
      </div>
    </div>
  )
}

export default CartNotification;