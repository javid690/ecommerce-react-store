import React, { useState } from 'react'
import './ShopVariable.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const Sizes = () => {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse(!collapse)
  }
  return (
    <div className='size-container'>
      <div className="varibles-head" onClick={handleCollapse}>
        <h4>sizes</h4>
        <div className="collapse" >
          <MdKeyboardArrowDown  className={collapse ? 'rotate' : ''}/>
        </div>
      </div>
      <div className={`size-btns ${collapse ? 'show' : ''}`}>
        <button data-category="xl">Xs</button>
        <button data-category="s">s</button>
        <button data-category="ml">m</button>
        <button data-category="l">l</button>
        <button data-category="xl">xl</button>
        <button data-category="xxl">Xxl</button>
      </div>
    </div>
  )
}

export default Sizes