import React, { useEffect, useState } from 'react'
import Next from "../../Assets/icon-next.svg"
import Prev from "../../Assets/icon-previous.svg"
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"

import "./mobileslider.css"
const MobileSlider = () => {
  const ImageArray =[Img1,Img2,Img3,Img4]
  const [index,setIndex] = useState(0)
  const HandleIndex = (button) => {
   if(button === "Right") {
    let a = (index < 3) ? setIndex(index+1) : ""
   }
   if(button === "Left") {
    let a =(index > 0) ? setIndex(index-1) : ""
   }

  }
  useEffect(()=>{
    document.querySelector('.mobile__slider').style.transform=`translateX(${-(index * 100)}vw)`
  },[index])

  return (
    <div className='mobile__slider__container'>
      <div className="mobile__slider">
        {
          ImageArray.map((img,index) => (
            <div className="mobile__slider_item"  key={index}><img src={img} alt={`Product ${index}`} /></div>
           
          ))
        }
      </div>
      <div className="slider-mob__control">
        <div className="mobile__slider__prev-btn" onClick={()=> HandleIndex("Left")}><img src={Prev} alt="prev icon" /></div>
        <div className="mobile__slider__next-btn" onClick={()=> HandleIndex("Right")}><img src={Next} alt="next icon" /></div>
      </div>
    </div>
  )
}

export default MobileSlider
