import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Shop } from './pages/Shop.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Cart } from './pages/Cart.jsx'
import { Product } from './pages/Product.jsx'
import { ShopCategory } from './pages/ShopCategory.jsx'
import Footer from './Components/Footer/Footer.jsx'
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category='men'/>} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category='women'/>} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category='kids'/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':id' element={<Product/>}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App