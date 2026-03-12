import React, { useEffect, useState } from 'react'
import './Sale.css'
import { useNavigate } from 'react-router-dom';

const Sale = () => {
  const navigate = useNavigate()
  const targetDate = new Date("2026-04-01T00:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='sale-section'>
      <div className="sale-content-wrapper">
        <div className="sale-content">
          <h4>Deal of the Week</h4>
          <h2 className='sale-title'>Spring Collection</h2>

          {/* ✅ a tag */}
          <a onClick={() => navigate('/shop')}>Shop Now</a>

          {/* ✅ countdown — a ke neeche */}
          <div className="countdown">
            <div className="time-box">
              <h2>{String(timeLeft.days).padStart(2, "0")}</h2>
              <p>DAYS</p>
            </div>

            <span className="colon">:</span>

            <div className="time-box">
              <h2>{String(timeLeft.hours).padStart(2, "0")}</h2>
              <p>HOURS</p>
            </div>

            <span className="colon">:</span>

            <div className="time-box">
              <h2>{String(timeLeft.minutes).padStart(2, "0")}</h2>
              <p>MINUTES</p>
            </div>

            <span className="colon">:</span>

            <div className="time-box">
              <h2>{String(timeLeft.seconds).padStart(2, "0")}</h2>
              <p>SECONDS</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sale;