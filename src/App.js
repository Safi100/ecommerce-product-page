import React, { useEffect, useState } from 'react'
import "./app.css"
import Navbar from './components/navbar/Navbar'
import ProductInfo from './components/productInfo/ProductInfo'
import MobileSlider from './components/thumbnails/MobileSlider'
import ProductThumbnails from './components/thumbnails/ProductThumbnails'
const App = () => {
  const [counterInsideCart , setCounterInsideCart] = useState(0)
  const [price, setPrice] = useState(250)
  const [discount_percentage, setDiscount_percentage] = useState(50)
  const [priceAfterDiscount,setPriceAfterDiscount] = useState(0)
  useEffect(()=>{
    if((price - ((price * discount_percentage)/100)) < 0){
      setPriceAfterDiscount(0)
    }else{
      setPriceAfterDiscount(price - ((price * discount_percentage)/100))
    }
  },[discount_percentage, price])
  return (
    <div>
      <Navbar
      counterInsideCart={counterInsideCart}
      setCounterInsideCart={setCounterInsideCart}
      price={priceAfterDiscount}
      />
      <MobileSlider/>
      <div className='wrapper large_screen'>
       <ProductThumbnails />
       <ProductInfo
        price={price}
        discount_percentage={discount_percentage}
        priceAfterDiscount={priceAfterDiscount}
        setCounterInsideCart={setCounterInsideCart}
       />
      </div>
      
    </div>
  )
}

export default App
