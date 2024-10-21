import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import NewBrand from '../new/NewBrand'

const Brand = () => {
  const brandId = useParams().id
  const { data: brand } = useFetchData(`/brands/find/${brandId}`)

  return <NewBrand id={brandId} brandData={brand} />
}

export default Brand
