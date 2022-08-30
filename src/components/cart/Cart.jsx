import React from 'react'
import "./cart.css"
import Trash from "../../Assets/icon-delete.svg"
import ProductImage from "../../Assets/image-product-1-thumbnail.jpg"
const Cart = ({counterInsideCart, setCounterInsideCart, price}) => {
  const HandleClearCart = () => {
    setCounterInsideCart(0)
  }
  return (
    <div className='cart'>
      <div className="cart__heading">Cart</div>
      {(counterInsideCart == 0) && <div className="cart__empty">Your cart is empty.</div>}
      {(counterInsideCart > 0) && <div className="cart__product">
        <div className="cart-content__product">
          <div className="cart-content__product__right">
            <div className="product__img"><img src={ProductImage} alt="Product Image" /></div>
            <div className="cart__product__description">
              <div className="product__name">fall limited edition sneakers</div>
              <div className="product__price"><span className='price__amount'>{`$${price}.00 x ${counterInsideCart}`}</span><span className='total'>{`$${(price * counterInsideCart)}.00`}</span></div>
            </div>
          </div>
          <div className="left"><div className="trash" onClick={HandleClearCart}><img src={Trash} alt="Trash icon" /></div></div>
        </div>
        <button className='checkout'>Checkout</button>
      </div>}
    </div>
  )
}

export default Cart
