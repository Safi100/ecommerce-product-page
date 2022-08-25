import React, { useState } from 'react'
import "./productinfo.css"
import cart_logo from "../../Assets/icon-cart.svg"
const ProductInfo = ({price, discount_percentage}) => {
    const [counter, setCounter] = useState(0)
    const HandleCounter = () => {

    }
  return (
    <div className='product_container'>
      <p className='company_name'>sneaker company</p>
      <h2 className='product_name'>fall limited edition sneakers</h2>
      <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className="price_container">
        <div className="left">
         <span className='price_after'>{`${(price * discount_percentage)/100}.00`}</span>
         <span className='discount_percentage'>{`${discount_percentage}%`}</span>
        </div>
        <div className="right">
         <span className='price_before'>{`${price}.00`}</span>
        </div>
      </div>
      <div className="cart_counter">
        <span className='plus'></span>
        <span className='counter'>0</span>
        <span className='minus'></span>
      </div>
      <button className='add_to_cart'><span><img src={cart_logo} alt="cart_logo" /></span> Add to cart</button>
    </div>
  )
}

export default ProductInfo
