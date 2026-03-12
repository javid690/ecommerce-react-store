import React from 'react'
import { useNavigate } from 'react-router-dom'

const MenShirt = () => {
    const navigate = useNavigate()
  return (
    <div className='men-banner'>
     <div className="men-content">
        <h3>Starting At $39</h3>   
        <h2>Men's Sportswear</h2>
        <a onClick={()=>navigate('./shop')}>Shop Now</a>
        </div>
    </div>
  )
}

export default MenShirt