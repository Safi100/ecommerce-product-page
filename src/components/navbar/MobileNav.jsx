import React, { useState } from 'react'
import Close from "../../Assets/icon-close.svg"
const MobileNav = ({status, setStatus}) => {
  const [close,setClose] = useState(false)
  return (
    <div className={`MobileNav ${((status === false) ? "hide" : "")}`}>
     <div className="close" onClick={()=> setStatus(false)}><img src={Close} alt="Close icon" /></div>
     <ul className='mobile__list'>
      <li className='mobile__list__li'>Collections</li>
      <li className='mobile__list__li'>Men</li>
      <li className='mobile__list__li'>Women</li>
      <li className='mobile__list__li'>About</li>
      <li className='mobile__list__li'>Contact</li>
     </ul>
    </div>
  )
}

export default MobileNav
