import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import './Delivery.css'
const Delivery = () => {
  const deliveryData = [
    {
       title: "Fast And Free Delivery",
       description: "Free delivery for all orders over $140",
       icon: <FaBagShopping /> 
    },
     {
       title: "24/7 Customer Support",
       description: "Friendly 24/7 customer support",
       icon: <FaBagShopping /> 
    },
     {
       title: "Money Back Guarantee",
       description: "We return money within 30 days",
       icon: <FaBagShopping /> 
    }
  ]  
  return (
    <div className="delivery-container">
      <div className="delivery-card">
        {deliveryData.map((item) => (
          <div key={item.id} className="deliver-card-content">
            <div className="card-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Delivery