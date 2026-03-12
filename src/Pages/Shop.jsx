import React from 'react'
import CategoriesSide from '../Components/ShopVariables/CategoriesSide'
import ShopProducts from '../Components/ShopProducts/ShopProducts'
import './Shop.css'
import '../Components/ShopVariables/ShopVariable.css'
const Shop = () => {
  return (
    <div className='shop-container'>
     <CategoriesSide /> 
     <ShopProducts />
    </div>
  )
}

export default Shop