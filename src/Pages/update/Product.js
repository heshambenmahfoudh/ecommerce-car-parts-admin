import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../../hooks/useFetchData'
import NewProduct from '../new/NewProduct'

const Product = () => {
  const productId = useParams().id
  const { data: product } = useFetchData(`/products/find/${productId}`)

  return <NewProduct id={productId} productData={product} />
}

export default Product
