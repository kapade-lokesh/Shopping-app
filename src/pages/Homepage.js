import React from 'react'
import NavBar from '../components/NavBar'
import Product from '../features/products/Product'
const Homepage = () => {
  return (
    <div>
         <NavBar>
             <Product/>
         </NavBar>
    </div>
  )
}

export default Homepage