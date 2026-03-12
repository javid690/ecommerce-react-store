import React, { useEffect, useState } from 'react'
import './ProductContainer.css'
import ProductsCard from './ProductsCard'
import Products from '../../Api/Products' // named import from your Products.js
import { useNavigate } from 'react-router-dom'

const ProductContainer = () => {
    const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      if (!Products || Products.length === 0) {
        throw new Error("Products data is empty")
      }

      setProducts(Products)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="loading-center">
        <div className="loader-3d"></div>
      </div>
    )
  }

  if (error) {
    return <p className="error-message">{error}</p>
  }

  return (
    <div className='products-section'>
      <div className="products-titles">
        <h2>Our Trendy <span>Products</span></h2>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        
      </div>
      <div className="discover-btn">
        <a href="" onClick={() => navigate('/shop')}>Descover More</a>
      </div>
    </div>

  )
}

export default ProductContainer
