import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import { UseCart } from "../../Contexts/UseToCart";
import { UseWishlist } from "../../Contexts/UseWishlist";
const Navbar = () => {
  const [activenav, setactiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartitem } = useContext(UseCart);
  const { wishlistItem } = useContext(UseWishlist);
  return (
    <header>
      {/* logo */}
      <nav>
        {/* toggle */}
        <div className="toggle-icon" onClick={() => setMenuOpen(true)}>
          <FaBarsStaggered />
        </div>
        <div className="logo-menu-side">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
          {/* menu */}
          <ul className={menuOpen ? "open-menu" : ""}>
            <div className="close-toggle" onClick={() => setMenuOpen(false)}>
              <IoClose />
            </div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Shop
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Contact
              </NavLink>
            </li>
            {/* navbar icons */}
            <div className="navbar-icons-side">
              <div className="search-bar">
                <input type="text" placeholder="Enter Search..." />
                <CiSearch />
              </div>
              <div className="loggin-icon">
                <Link to="/login">
                  <FaUserShield />
                </Link>
              </div>
              {/*cart icon */}
              <div className="cart-icon">
                <div className="cart-shopper">
                  <Link to="/cart">
                    <IoCart />
                  </Link>
                  <span>{cartitem.length}</span>
                </div>
              </div>
              {/* heart */}
              <div className="wishlist-icons">
                <div className="wishlist">
                  <Link to="/wishlist">
                    <CiHeart />
                  </Link>
                  <span>{wishlistItem.length}</span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
