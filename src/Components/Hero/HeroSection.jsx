import React from 'react'
import banner from '..//../assets/images/banner.png'
import './HeroSction.css'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className='hero-section'>
        {/*content side  */}
        <div className="hero-container">
           <div className="hero-content">
            <h3>New Trend</h3>
            <h2 className="title">
                Summer Sale <br />
                 Stylish
            </h2>
            <p className="desc">Limited Time Offer - Up to 60% off & Free Shipping</p>
            <a onClick={()=> navigate('/shop')}>Descover More</a>

            </div> 
           <div className="hero-banner-side">
            <img src={banner} alt="banner-img" className='banner-img' />

           </div>
        </div>
    </div>
  )
}

export default HeroSection