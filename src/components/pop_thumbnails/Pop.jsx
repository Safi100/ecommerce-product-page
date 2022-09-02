import React from 'react'
import Blur from '../blur/Blur'
import ProductThumbnailsPop from './ProductThumbnailsPop'
import "./pop.css"

const Pop = ({selected, open, setOpen}) => {
  return (
     <ProductThumbnailsPop selected={selected} open={open} setOpen={setOpen}/> 
  )
}

export default Pop
