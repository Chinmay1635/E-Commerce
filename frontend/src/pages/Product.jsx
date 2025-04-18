import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((product) => product.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} /> 
      <ProductDisplay product={product} />
    </div>
  )
}
