import React, { lazy, Suspense } from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import Collections from '../Components/Collection/Collections'
import Sale from '../Components/Sale/Sale'
import CartNotification from '../Components/CartNotification/CartNotification'
import Starting from '../Components/Starting/Starting'
import Gallery from '../Components/Gallery/Gallery'
import Delivery from '../Components/Delivery/Delivery'
const ProductContainer  = lazy(()=>import("../Components/Products/ProductContainer"))


const Home = () => {
  return (
    <>
    <HeroSection />
    <Collections />
    <Suspense fallback={<p className='loading-products'>Loading...</p>}>
       <ProductContainer />
    </Suspense>
    <Sale />
    <CartNotification />
    <Starting />
    <Gallery />
    <Delivery />
    </>
  )
}

export default Home