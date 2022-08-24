import React from 'react'
import Next from "../../Assets/icon-next.svg"
import Prev from "../../Assets/icon-previous.svg"
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"

import "./mobileslider.css"
const MobileSlider = () => {
  const ImageArray =[Img1,Img2,Img3,Img4]
  console.log(ImageArray);
  return (
    <div className='mobile__slider__container'>
      <div className="mobile__slider">
        {
          ImageArray.map((img) => (
            <div className="mobile__slider_item"  key={img}><img src={img} alt="img" /></div>
          ))
        }
      </div>
      <div className="slider-mob__control">
        <div className="mobile__slider__prev-btn"><img src={Prev} alt="prev icon" /></div>
        <div className="mobile__slider__next-btn"><img src={Next} alt="next icon" /></div>
      </div>
    </div>
  )
}

export default MobileSlider
