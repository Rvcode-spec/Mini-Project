import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import Shopdetails from '../pages/Shopdetails'
import Thanks from '../pages/Thanks'
import Contact from '../pages/Contact'
import Homepage from '../pages/Homepage'

const Router = () => {
  return (
    <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/shop" element={<Shop/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/shopdetails" element={<Shopdetails/>}/>
<Route path="/thanks" element={<Thanks/>}/>
<Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Router