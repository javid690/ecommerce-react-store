import React from 'react'
import './Collection.css'
import { useNavigate } from 'react-router-dom'
const Collections = () => {
    const navigate = useNavigate()
  return (
    <div className="collection-section">
  <div className="collections-container">

    {/* LEFT BIG */}
    <div className="collection-card women">
      <div className="collection-content">
        <span>HOT LIST</span>
        <h2>WOMEN COLLECTION</h2>
        <a  onClick={()=> navigate('/shop')}>SHOP NOW</a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="rightSide-collection">

      <div className="collection-card men">
        <div className="collection-content">
          <span>HOT LIST</span>
          <h2>MEN COLLECTION</h2>
          <a onClick={()=> navigate('/shop')}>SHOP NOW</a>
        </div>
      </div>

      <div className="bottom-row">
        <div className="collection-card kids">
          <div className="collection-content">
            <span>HOT LIST</span>
            <h2>KIDS COLLECTION</h2>
            <a onClick={()=> navigate('/shop')}>SHOP NOW</a>
          </div>
        </div>

        <div className="collection-card gift">
          <div className="collection-content">
            <h2>E-GIFT CARDS</h2>
            <p>SURPRISE SOMEONE WITH THE GIFT THEY REALLY WANT</p>
            <a onClick={()=> navigate('/shop')}>SHOP NOW</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
  )
}

export default Collections