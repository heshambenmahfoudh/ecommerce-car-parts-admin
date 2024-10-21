import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'
import NewCategory from '../new/NewCategory'

const Category = () => {
  const categoryId = useParams().id
  const { data: category } = useFetchData(`/categories/find/${categoryId}`)

  return <NewCategory id={categoryId} categoryData={category} />
}

export default Category
