import React from 'react'
import WomenShirt from './WomenShirt'
import MenShirt from './MenShirt'
import './StartingBanners.css'
const Starting = () => {
  return (
    <div className='starting-container'>
      <WomenShirt />  
      <MenShirt />
    </div>
  )
}

export default Starting