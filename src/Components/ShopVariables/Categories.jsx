import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import './ShopVariable.css'

const Categories = () => {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <div className='cateory-btns-container'>
      <div className="varibles-head" onClick={handleCollapse}>
        <h4>Products Categories</h4> 
        <div className="collapse" >
          <MdKeyboardArrowDown 
            className={collapse ? 'rotate' : ''} 
          />
        </div>
      </div>

      <div className={`category-btns ${collapse ? 'show' : ''}`}>
        <button data-category="dresses">Dresses</button>
        <button data-category="shorts">Shorts</button>
        <button data-category="sweatshirt">Sweatshirt</button>
        <button data-category="swimwear">Swimwear</button>
        <button data-category="jackets">Jeckits</button>
        <button data-category="tshirt">T-shirt & Top</button>
        <button data-category="jeans">Jeans</button>
        <button data-category="trousers">Tourse</button>
        <button data-category="men">Men</button>
        <button data-category="jumpers">Jumpers</button>
      </div>
    </div>
  )
}

export default Categories