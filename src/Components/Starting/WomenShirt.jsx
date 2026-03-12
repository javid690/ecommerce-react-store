import React from 'react'
import { useNavigate } from 'react-router-dom'

const WomenShirt = () => {
    const navigate = useNavigate()
  return (
    <div className='women-banner'>
     <div className="women-content">
     <h3>Starting At $19</h3>    
     <h2>Women's T-shirts</h2>
     <a onClick={()=>navigate('./shop')}>Shop Now</a>
    </div>   
    </div>
  )
}

export default WomenShirt