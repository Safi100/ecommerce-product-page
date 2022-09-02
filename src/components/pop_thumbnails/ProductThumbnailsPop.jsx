import React, { useState } from 'react'
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"
import "../thumbnails/productThumbnails.css"
const ProductThumbnailsPop = ({selected}) => {
    const Images = [Img1,Img2,Img3,Img4]
    const [selectedIndex, setSelectedIndex] = useState(selected)
    const [open, setOpen] = useState(true)
  return (
    <div className='thumbnails pop_thumbnails'>
        <div className="close"><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg></div>
      <div className="Selected__photo" onClick={()=> setOpen(true)}>
        <img src={Images[selectedIndex]} alt={`img${selectedIndex}`} />
      </div>
      <div className="group__photo">
        {Images.map((img, index) => (<div onClick={()=> setSelectedIndex(index)} className={`img__div ${(selectedIndex === index) ? "selected" : ""}`} key={index}><img className={`${(selectedIndex === index) ? "selected__inside" : ""}`} src={img} alt={`img${index}`} /></div>))}
      </div>
    </div>
  )
}

export default ProductThumbnailsPop
