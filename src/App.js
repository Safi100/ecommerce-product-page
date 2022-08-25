import React from 'react'
import "./app.css"
import Navbar from './components/navbar/Navbar'
import ProductInfo from './components/productInfo/ProductInfo'
import MobileSlider from './components/thumbnails/MobileSlider'

const App = () => {
  return (
    <div>
      <Navbar />
      <MobileSlider />
      <ProductInfo price={250} discount_percentage={50}/>
    </div>
  )
}

export default App
