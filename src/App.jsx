import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
const Shop = lazy(() => import("./Pages/Shop"));
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Detail from "./Pages/Detail";
import CartProiver from "./Contexts/UseContext";
import UseCartProvier from "./Contexts/UseToCart";
import UseWishlistProvider from "./Contexts/UseWishlist";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound";
import CartNotification from "./Components/CartNotification/CartNotification";
import WishlistN from "./Components/WishlistN/WishlistN";
import Email from "./Components/Emaill/Email";
import Blog from "./Pages/Blog";

function App() {
  return (
    <UseWishlistProvider>
      <CartProiver>
        <UseCartProvier>
          <BrowserRouter>
            <Navbar />
            <CartNotification />
            <WishlistN />
            <Email />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route
                element={
                  <Suspense fallback={<h2>Loading Shop...</h2>}>
                    <Shop />
                  </Suspense>
                }
                path="/shop"
              />
              <Route element={<Blog />} path="/blog" />
              <Route element={<About />} path="/about" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Login />} path="/login" />
              <Route element={<Cart />} path="/cart" />
              <Route element={<Wishlist />} path="/wishlist" />
              <Route element={<Detail />} path="/product/:id" />
              <Route element={<NotFound />} path="*" />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UseCartProvier>
      </CartProiver>
    </UseWishlistProvider>
  );
}

export default App;
