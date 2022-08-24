import React, { useState } from 'react'
import Menu from "../../Assets/icon-menu.svg"
import Logo from "../../Assets/logo.svg"
import cart from "../../Assets/icon-cart.svg"
import user from "../../Assets/image-avatar.png"
import "./navbar.css"
import MobileNav from './MobileNav'
import Blur from '../blur/Blur'
const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='navbar'>
     <div className="wrapper">
      <div className="right">  
        <div className="menu" onClick={()=>{ setOpen(true)}}><img src={Menu} alt="menu" /></div>
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
        <div className="cart">
         <img src={cart} alt="cart" />
         <span className='number_of_items'>3</span>
         </div>
        <div className="user_img"><img src={user} alt="user" /></div>
      </div>

     </div>
    <MobileNav status={open} setStatus={setOpen} />
    {open && <Blur/>}
    </div>
  )
}

export default Navbar
