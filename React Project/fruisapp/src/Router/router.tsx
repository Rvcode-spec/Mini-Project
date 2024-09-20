import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import Shopdetail from '../pages/Shopdetails'
import Thanks from '../pages/Thanks'
import Contact from '../pages/Contact'
import Auth from '../pages/Admin/Auth'
import Profile from '../pages/Admin/Profile/Profile'
import ProfileAddEdir from '../pages/Admin/Profile/ProfileAddEdir'
import Category from '../pages/Admin/Category/Category'
import CatergoryAddEdit from '../pages/Admin/Category/CatergoryAddEdit'
import Order from '../pages/Admin/Order/Order'
import Vieworder from '../pages/Admin/Order/Vieworder'
import Product from '../pages/Admin/Product/Product'
import ProductAddEdit from '../pages/Admin/Product/ProductAddEdit'
import Notfound from '../pages/Notfound'
const Router = () => {
  return (
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/shopdetails" element={<Shopdetail />} />
    <Route path="/thanks" element={<Thanks />} />
    <Route path="/contact" element={<Contact />} />

    {/* Admin Routes */}
    <Route path="/admin" element={<Auth />}>
      {/* Profile */}
      <Route path="profile" element={<Profile />} />
      <Route path="profile/add" element={<ProfileAddEdir />} />
      <Route path="profile/edit" element={<ProfileAddEdir />} />

      {/* Category */}
      <Route path="category" element={<Category />} />
      <Route path="category/add" element={<CatergoryAddEdit />} />
      <Route path="category/edit" element={<CatergoryAddEdit />} />

      {/* Order */}
      <Route path="order" element={<Order />} />
      <Route path="order/view" element={<Vieworder />} />

      {/* Product */}
      <Route path="product" element={<Product />} />
      <Route path="product/add" element={<ProductAddEdit />} />
      <Route path="product/edit" element={<ProductAddEdit />} />
    </Route>

    {/* Fallback Route */}
    <Route path="*" element={<Notfound />} />
  </Routes>
  )
}

export default Router