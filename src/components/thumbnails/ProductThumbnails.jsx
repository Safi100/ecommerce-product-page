import React, { useEffect, useState } from 'react'
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"
import "./productThumbnails.css"
const ProductThumbnails = () => {
    const Images = [Img1,Img2,Img3,Img4]
    const [selectedIndex, setSelectedIndex] = useState(0)
    useEffect(()=>{
      console.log(selectedIndex);
    },[selectedIndex])
  return (
    <div className='thumbnails'>
      <div className="Selected__photo">
        <img src={Images[selectedIndex]} alt={`img${selectedIndex}`} />
      </div>
      <div className="group__photo">
        {Images.map((img, index) => (<div onClick={()=> setSelectedIndex(index)} className={`img__div ${(selectedIndex === index) ? "selected" : ""}`} key={index}><img className={`${(selectedIndex === index) ? "selected__inside" : ""}`} src={img} alt={`img${index}`} /></div>))}
      </div>
    </div>
  )
}

export default ProductThumbnails
