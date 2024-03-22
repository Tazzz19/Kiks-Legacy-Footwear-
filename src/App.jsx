import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';

function App() {
   return (
    <>
     <Navbar/>
     <Routes>
      < Route path= '/' element={<Shop/>}/>
      < Route path= '/mens' element={<ShopCategory  category="men"/>}/>
      < Route path= '/womens' element={<ShopCategory category="women"/>}/>
      < Route path= '/unisex' element={<ShopCategory category="unisex"/>}/>
      < Route path= "product" element={<Product/>}/>
      < Route path= ':productId' element={<Product/>}/>
     <Route/>

     < Route path= '/cart' element={<Cart/>}/>
     < Route path= '/login' element={<LoginSignup/>}/>

     </Routes>
    
    </>
  )
}

export default App
