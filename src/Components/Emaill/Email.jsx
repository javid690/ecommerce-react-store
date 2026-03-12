import React, { useState } from 'react';
import email from '../../assets/images/email.jpg';
import { IoClose } from "react-icons/io5";
import './Email.css';

const Email = () => {
  // Page load pe popup hamesha open
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false); // sirf current session ke liye band
  };

  if (!isOpen) return null;

  return (
    <div className='email-container'>
      <div className="email-box">
        <div className="close-email-box" onClick={handleClose}>
          <IoClose />
        </div>
        <div className="box-content">
          <div className="email-img-side">
            <img src={email} alt="email-img" />
          </div>
          <div className="email-text-side">
            <h2>Sign Up to Our Newsletter</h2>
            <p>Be the first to get the latest news about trends, promotions, and much more!</p>
            <div className="email-input">
              <input type="email" placeholder='Your Email Address' />
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;