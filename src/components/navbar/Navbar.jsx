import React, { useState } from 'react'
import Cart from '../cart/Cart'
import Menu from "../../Assets/icon-menu.svg"
import Logo from "../../Assets/logo.svg"
import cart_icon from "../../Assets/icon-cart.svg"
import user from "../../Assets/image-avatar.png"
import "./navbar.css"
import MobileNav from './MobileNav'
import Blur from '../blur/Blur'

const Navbar = ({counterInsideCart,setCounterInsideCart, price}) => {
  const [openMenu,setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className='navbar'>
       {openCart && <Cart counterInsideCart={counterInsideCart} setCounterInsideCart={setCounterInsideCart} price={price}/>}
     <div className="wrapper">
      <div className="right">  
        <div className="menu" onClick={()=>{ setOpenMenu(true)}}><img src={Menu} alt="menu" /></div>
        <a href='/' className="logo"><img src={Logo} alt="logo" /></a>
        <ul className='list'>
         <li className='list__li'>Collections</li>
         <li className='list__li'>Men</li>
         <li className='list__li'>Women</li>
         <li className='list__li'>About</li>
         <li className='list__li'>Contact</li>
        </ul>
      </div>
      <div className="left">
        <div className="cart_notification" onClick={()=>{setOpenCart(!openCart)}}>
         <img src={cart_icon} alt="cart" />
         {(counterInsideCart > 0) && <span className='number_of_items'>{counterInsideCart}</span>}
         </div>
        <div className="user_img"><img src={user} alt="user" /></div>
      </div>

     </div>
    <MobileNav status={openMenu} setStatus={setOpenMenu} />
    {openMenu && <Blur/>}
    </div>
  )
}

export default Navbar
