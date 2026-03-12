import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import './ShopVariable.css'
import { IoSearch } from "react-icons/io5";
const Brands = () => {
  // search
  const [filteredBrands, setFilteredBrands] = useState([])
  const searchRef = useRef()
  const debounceTimeout = useRef(null)
  useEffect(() => {
    setFilteredBrands(brands)
  }, [])

  const handleSearch = () => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      const query = searchRef.current.value.toLowerCase()
      const filtered = brands.filter(brand =>
        brand.name.toLowerCase().includes(query)
      )
      setFilteredBrands(filtered)
    }, 300) // 300ms delay
  }


  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  const brands = [
    { name: "Adidas", count: 2 },
    { name: "Balmain", count: 7 },
    { name: "Balenciaga", count: 10 },
    { name: "Burberry", count: 39 },
    { name: "Kenzo", count: 95 },
    { name: "Givenchy", count: 1092 },
    { name: "Zara", count: 48 },
  ];
  return (
    <div className='brands-container'>
      <div className="varibles-head"  onClick={handleCollapse}>
        <h4>Brands</h4>
        <div className="collapse">
          <MdKeyboardArrowDown className={collapse ? 'rotate' : ''} />
        </div>
      </div>
      <div className={`brands-btns-container ${collapse ? 'show' : ''}`} >
        {/* Search Input Section */}
        <div className="search-box">
          <input type="text" placeholder="SEARCH" 
          ref={searchRef} 
            onChange={handleSearch}
          />
          <span className="search-icon"><IoSearch /></span>
        </div>

        {/* Brands List Section */}
         <div className="brands-btns">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand, index) => (
              <div key={index} className="brand-item">
                <div className="brand-left">
                  <input type="checkbox" id={`brand-${index}`} />
                  <label htmlFor={`brand-${index}`}>{brand.name}</label>
                </div>
                <span className="brand-count">{brand.count}</span>
              </div>
            ))
          ) : (
            <p className="no-results">No brands found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Brands