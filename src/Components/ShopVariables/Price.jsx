import React, { useState } from 'react'
import './ShopVariable.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const Price = () => {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = ()=>{
    setCollapse(!collapse)
  }
   const [min, setMin] = useState(20);
  const [max, setMax] = useState(69);
  return (
    <div className='price-container'>
      <div className="varibles-head" onClick={handleCollapse}>
        <h4>Color</h4>
        <div className="collapse" >
          <MdKeyboardArrowDown className={collapse ? 'rotate' : ''}/>
        </div>
      </div>
      <div className={`price-filtered ${collapse ? 'show' : ''}`}>
      <div className="slider-wrapper">
        <div className="base-track"></div>
        <div 
          className="active-track" 
          style={{ left: `${min}%`, right: `${100 - max}%` }}
        ></div>
        <input
          type="range"
          min="0"
          max="100"
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
          className="thumb thumb-right"
        />
      </div>

      <div className="price-labels">
        <span>Min Price: <strong>${min}</strong></span>
        <span>Max Price: <strong>${max}</strong></span>
      </div>
    </div>
    </div>
  )
}

export default Price