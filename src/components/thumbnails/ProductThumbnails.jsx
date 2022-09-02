import React, { useEffect, useState } from 'react'
import Pop from '../pop_thumbnails/Pop'
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"

import "./productThumbnails.css"
const ProductThumbnails = () => {
    const Images = [Img1,Img2,Img3,Img4]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [open, setOpen] = useState(false)
    
  return (
    <div className='thumbnails'>
      <div className="Selected__photo" onClick={()=> setOpen(true)}>
        <img src={Images[selectedIndex]} alt={`img${selectedIndex}`} />
      </div>
      <div className="group__photo">
        {Images.map((img, index) => (<div onClick={()=> setSelectedIndex(index)} className={`img__div ${(selectedIndex === index) ? "selected" : ""}`} key={index}><img className={`${(selectedIndex === index) ? "selected__inside" : ""}`} src={img} alt={`img${index}`} /></div>))}
      </div>
      {open && <Pop selected={selectedIndex} open={open} setOpen={setOpen}/>}
    </div>
  )
}

export default ProductThumbnails
