import React, { useEffect, useState } from 'react'
import Cart from "../cart/Cart"
import "./productinfo.css"
import cart_logo from "../../Assets/icon-cart.svg"
import Plus from "../../Assets/icon-plus.svg"
import Minus from "../../Assets/icon-minus.svg"
const ProductInfo = ({price, discount_percentage, priceAfterDiscount, setCounterInsideCart}) => {
  const [counter, setCounter] = useState(0)
  const HandlePlusCounter = () => {
    if(counter <10){
      setCounter(counter+1)
    }
  }
  const HandleMinusCounter = () => {
    if(counter > 0) {
      setCounter(counter-1)
    }
  }
  const HandleAddToCart = () => {
    if(counter !== 0){
      setCounterInsideCart(counter)
    }
  }
  return (
    <div className='product_container'>
      <p className='company_name'>sneaker company</p>
      <h2 className='product_name'>fall limited edition sneakers</h2>
      <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className="price_container">
        <div className="left">
         <span className='price_after'>{`$${priceAfterDiscount}.00`}</span>
         <span className='discount_percentage'>{`${discount_percentage}%`}</span>
        </div>
        <div className="right">
         <span className='price_before'>{`$${price}.00`}</span>
        </div>
      </div>
      <div className="cart_counter">
        <span className='minus' onClick={HandleMinusCounter}><img src={Minus} alt="Minus icon" /></span>
        <span className='counter'>{counter}</span>
        <span className='plus' onClick={HandlePlusCounter}><img src={Plus} alt="Plus icon" /></span>
      </div>
      <button className='add_to_cart' onClick={HandleAddToCart}><span className='btn_cart_logo'><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg></span> Add to cart</button>
    </div>
  )
}

export default ProductInfo
