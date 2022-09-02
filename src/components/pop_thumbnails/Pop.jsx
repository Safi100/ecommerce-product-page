import React from 'react'
import Blur from '../blur/Blur'
import ProductThumbnailsPop from './ProductThumbnailsPop'
import "./pop.css"

const Pop = ({selected}) => {
  return (
    <div className='pop'>
     <Blur />
     <ProductThumbnailsPop selected={selected}/> 
    </div>
  )
}

export default Pop
