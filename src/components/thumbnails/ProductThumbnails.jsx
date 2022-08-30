import React from 'react'
import Img1 from "../../Assets/image-product-1.jpg"
import Img2 from "../../Assets/image-product-2.jpg"
import Img3 from "../../Assets/image-product-3.jpg"
import Img4 from "../../Assets/image-product-4.jpg"
import "./productThumbnails.css"
const ProductThumbnails = () => {
    const Images = [Img1,Img2,Img3,Img4]
  return (
    <div className='thumbnails'>
      <div className="Selected__photo">
        <img src={Img1} alt="" />
      </div>
      <div className="group__photo">
        {Images.map((img, index) => (<div className='img__div' key={index}><img src={img} alt={`img${index}`} /></div>))}
      </div>
    </div>
  )
}

export default ProductThumbnails
