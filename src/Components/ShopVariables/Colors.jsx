import React, { useState } from 'react'
import './ShopVariable.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const Colors = () => {
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = ()=>{
    setCollapse(!collapse)
  }

  // Define your 10 colors
  const colors = [
    '#0b2472', 
    '#d6bb4f', 
    '#030303', 
    '#b0d6e8', 
    '#9c7539', 
    '#d29b47', 
    '#e5ae95', 
    '#d76b67', 
    '#b9b9b9', 
    '#bfdcc4'  
  ];
  return (
    <div className='color-filter-container'>
      <div className="varibles-head"  onClick={handleCollapse}>
        <h4>Color</h4>
        <div className="collapse">
          <MdKeyboardArrowDown className={collapse ? 'rotate' : ''}/>
        </div>
      </div>
      <div className={`color-btns ${collapse ?  'show' : ''}`} >
         {colors.map((color, index) => (
          <button
            key={index}
            className="color-btn"
            style={{ backgroundColor: color }}
            title={color} // optional: show color hex on hover
          />
        ))}
      </div>
    </div>
  )
}

export default Colors