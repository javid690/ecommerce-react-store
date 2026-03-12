import React from 'react'
import footerLogo from '../../assets/images/footer-logo.png'
import { FaP, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterest } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import payment from '../../assets/images/payment.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-row">
     <div className="footer-column">
      <div className="column-content">
        <img src={footerLogo} alt="footer-logo" />
        <p>1418 River Drive, Suite 35 Cottonhall, <br /> CA 9622 United States</p>
        <h3>sale@uomo.com <br /> +1 246-345-0695</h3>
        <div className="socail-icon">
        <li><FaFacebookF /></li>
        <li><FaXTwitter /></li>
        <li><FaInstagram /></li>
        <li><IoLogoYoutube /></li>
        <li><FaPinterest /></li>
        </div>
      </div>
    </div>   
    {/* two */}
    <div className="footer-column">
      <div className="column-content">
        <h3 className="column-tite">Company</h3>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/about'>Career</Link></li>
        <li><Link to='/notfound'>Affilates</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </div>
    </div>  
     {/*three  */}
     <div className="footer-column">
      <div className="column-content">
        <h3 className="column-tite">Shop</h3>
        <li><Link to='/shop'>New Arrivals</Link></li>
        <li><Link to='/shop'>Accessories</Link></li>
        <li><Link to='/shop'>Men</Link></li>
        <li><Link to='/shop'>Women</Link></li>
        <li><Link to='/shop'>Shop All</Link></li>
      </div>
    </div>  
    {/* four */}
     <div className="footer-column">
      <div className="column-content">
        <h3 className="column-tite">Help</h3>
        <li><Link to='/contact'>Customer Service</Link></li>
        <li><Link to='/login'>My Account</Link></li>
        <li><Link to='/contact'>Find a Store</Link></li>
        <li><Link to='/privacy'>Legal & Privacy</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </div>
    </div>  
    {/* five */}
     <div className="footer-column">
      <div className="column-content">
        <h3 className="column-tite">Subscribe</h3>
       <p>Be the first to get the latest news about 
       trends, promotions, and much more!</p>
       <div className="email-addres">
        <input type="email" name="" id="" placeholder='Your Emaill Address'/>
        <button>Join</button>
       </div>
       <h3>Secure Payments</h3>
       <img src={payment} alt="payment" />
      </div>
    </div>  
    </div>
    </div>
  )
}

export default Footer