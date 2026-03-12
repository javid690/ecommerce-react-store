import React, { useEffect, useRef, useState } from "react";
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import ad from "../../assets/images/ad.png";
import m from "../../assets/images/m.png";
import s from "../../assets/images/s.png";
import r from "../../assets/images/r.png";
import z from "../../assets/images/z.png";
import "./Partners.css";

const CompanyPartners = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const slideStep = 160; // approximate logo width + gap
    const slideInterval = 2000; // 2 seconds
    let scrollAmount = 0;

    const interval = setInterval(() => {
      scrollAmount += slideStep;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="company-partners">
      <h3>Company Partners</h3>
      <div
        className="partners-logos"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {[a, b, ad, m, s, r, z].map((logo, idx) => (
          <div className="logo" key={idx}>
            <img src={logo} alt={`Partner ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPartners;
