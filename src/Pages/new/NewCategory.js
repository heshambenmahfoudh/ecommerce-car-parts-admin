import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Buttons from '../../Components/Forms/Buttons'
import Lables from '../../Components/Forms/Lables'
import Inputs from '../../Components/Forms/Inputs'
import FormHeader from '../../Components/Headers/FormHeader'
import { ApiPostRequest, ApiPutRequest } from '../../Lib/apiRequest'
import SelectInput from '../../Components/Forms/SelectInput'
import useFetchData from '../../hooks/useFetchData'

const NewCategory = ({ id, categoryData }) => {
  const [information, setInformtion] = useState()
  const [rederect, setRederect] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const { data: brands } = useFetchData(`/brands`)
  // render value when is id found
  useEffect(() => {
    if (id) {
      setInformtion(categoryData)
    }
  }, [categoryData, id])

  const changeData = (e) => {
    setInformtion({ ...information, [e.target.name]: e.target.value })
  }

  // added data or update data
  const newCategory = async (e) => {
    e.preventDefault()
    const data = {
      ...information,
    }
    id
      ? ApiPutRequest(
          `/categories/${id}`,
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/categories',
          'Category',
        )
      : ApiPostRequest(
          '/categories',
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/categories',
          'Category',
        )
  }

  if (rederect) {
    return <Navigate to={rederect} />
  }

  return (
    <div>
      <FormHeader
        url="../categories"
        title={id ? 'Update category' : 'New category'}
      />
      <form className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md bg-white shadow-md border-1 max-w-4xl">
        <div className="flex justify-between flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-5 ">
              <div className="w-full">
                <Lables text="Category Brand" />
                <SelectInput
                  name="brand"
                  options={brands}
                  changeValue={changeData}
                  option="Brand"
                  data={id && information?.brand?._id}
                />
              </div>
              <div className="w-full">
                <Lables text="Category Name" />
                <Inputs
                  type="text"
                  placeholder="Category Name"
                  name="name"
                  changeValue={changeData}
                  value={id && information?.name}
                />
              </div>
            </div>
          </div>
        </div>

        <Buttons
          text={id ? 'Update' : 'Create'}
          onClick={newCategory}
          loading={loading}
          title="Category"
          err={err}
        />
      </form>
    </div>
  )
}

export default NewCategory
