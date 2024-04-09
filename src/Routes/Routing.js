import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SiginPage from '../pages/SiginPage'
import { LoginPage } from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import CheckOutPage from '../pages/CheckOutPage'
import ProductDetailPage from '../pages/ProductDetailPage'
const Routing = () => {
  return (
    <div>
     
      <Router>
           <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/signin' element={<SiginPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/checkout' element={<CheckOutPage/>}/>
                <Route path='/productdetail' element={<ProductDetailPage/>}/>
           </Routes>
      </Router>

    </div>
  )
}

export default Routing