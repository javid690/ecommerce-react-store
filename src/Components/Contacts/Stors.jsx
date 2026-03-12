import React from "react";
import "./Stores.css";
const Stors = () => {
  return (
    <div className="stores-container">
      <div className="stores">
        <div className="store-one">
          <h3>Store in London</h3>
          <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</p>
          <a href="mailto:admin@dummymail.com">admin@dummymail.com</a>
          <a href="tel:+923189312180">0318 9312180</a>
        </div>
        <div className="store-two">
          <h3>Store in New York</h3>
          <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 United Kingdom</p>
          <a href="mailto:admin@dummymail.com">admin@dummymail.com</a>
          <a href="tel:+923189312180">0318 9312180</a>
        </div>
      </div>
    </div>
  );
};

export default Stors;
