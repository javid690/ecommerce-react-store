import React, { useContext, useEffect, useState } from 'react'
import Products from '../../Api/Products';
import { Link, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import '../../Components/Products/ProductContainer.css'
import { UseWishlist } from '../../Contexts/UseWishlist';
import { UseCart } from '../../Contexts/UseToCart';
import { UseDetail } from '../../Contexts/UseContext';

import './ShopProduct.css'

const ShopProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // cart system
    const { addToWishlist } = useContext(UseWishlist)
    const { addToCart } = useContext(UseCart);
    const navigate = useNavigate();
    const { setSelectedProduct } = useContext(UseDetail);

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
    }, []);

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

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < 2) { // sirf 2 pages hain
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='shop-products'>
            <div className="top-bar">
                <div className="bread-crumb">
                    <Link to="/">HOME</Link>
                    <span>/</span>
                    <Link to="/shop">THE SHOP</Link>
                </div>
                <div className="rating">
                    <select>
                        <option value="default">Default Sorting</option>
                        <option value="low-to-high">Low To High</option>
                        <option value="high-to-low">High To Low</option>
                        <option value="best-selling">Best Selling</option>
                    </select>
                </div>
            </div>

            <div className="shop-products-container">
                {currentProducts.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className="product-img">
                            <img 
                                onClick={() => {
                                    setSelectedProduct(item);
                                    navigate(`/product/${item.id}`);
                                }}
                                src={item.image}
                                alt={item.name}
                            />
                            <button className="add-to-cart" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                        <div className="card-content">
                            <p className="category">{item.category}</p>
                            <CiHeart className="heart-icon" onClick={() => addToWishlist(item)} />
                        </div>
                        <h3 className="product-name">{item.name}</h3>
                        <p className="price">${item.price}</p>
                        <div className="review">{item.reviews} Reviews</div>
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="pagenation-container">
                <div className="pagenation-btns">
                    <div className="prev-btn">
                        <button className='prev' onClick={handlePrev}>Prev</button>    
                    </div>   
                    <div className="number-btn">
                        <button 
                            className={`n-btn ${currentPage === 1 ? 'active' : ''}`} 
                            onClick={() => handlePageChange(1)}
                        >1</button> 
                        <button 
                            className={`n-btn ${currentPage === 2 ? 'active' : ''}`} 
                            onClick={() => handlePageChange(2)}
                        >2</button> 
                    </div>
                    <div className="next-btn">
                        <button className='next' onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ShopProducts