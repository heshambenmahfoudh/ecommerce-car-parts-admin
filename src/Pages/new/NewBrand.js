import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Buttons from '../../Components/Forms/Buttons'
import Lables from '../../Components/Forms/Lables'
import Inputs from '../../Components/Forms/Inputs'
import FormHeader from '../../Components/Headers/FormHeader'
import { ApiPostImageRequest, ApiPostRequest, ApiPutRequest } from '../../Lib/apiRequest'
import TextAria from '../../Components/Forms/TextAria'
import SelectImage from '../../Components/Forms/SelectImage'

const NewBrand = ({ id, brandData }) => {
  const [information, setInformtion] = useState()
  const [image, setImage] = useState(null)
  const [rederect, setRederect] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  // render value when is id found
  useEffect(() => {
    if (id) {
      setInformtion(brandData)
      setImage(brandData?.img?.[0])
    }
  }, [brandData, id])

  const changeData = (e) => {
    setInformtion({ ...information, [e.target.name]: e.target.value })
  }
  // take string of img from input
  const changeImage = async (e) => {
     ApiPostImageRequest('/deploy', e, setImage)
  }

  // added data or update data
  const NewBrand = async (e) => {
    e.preventDefault()
    const data = {
      ...information,
      img: image,
    }
    id
      ? ApiPutRequest(
          `/brands/${id}`,
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/brands',
          'Brand',
        )
      : ApiPostRequest(
          '/brands',
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          '/brands',
          'Brand',
        )
  }

  if (rederect) {
    return <Navigate to={rederect} />
  }

  return (
    <div>
      <FormHeader url="../brands" title={id ? 'Update brand' : 'New brand'} />
      <form className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md bg-white shadow-md border-1 max-w-4xl">
        <div className="flex justify-between flex-col gap-5">
          <SelectImage chaneValue={changeImage} img={image} />
          <div className="flex flex-col gap-1.5">
            <div className="w-full">
              <Lables text="Brand Name" />
              <Inputs
                type="text"
                placeholder="Brand Name"
                name="name"
                changeValue={changeData}
                value={id && information?.name}
              />
            </div>
            <div className="w-full">
              <Lables text="Brand Description" />
              <TextAria
                name="description"
                placeholder="Brand Description"
                changeValue={changeData}
                value={id && information?.description}
              />
            </div>
          </div>
        </div>

        <Buttons
          text={id ? 'Update' : 'Create'}
          onClick={NewBrand}
          loading={loading}
          title="Brand"
          err={err}
        />
      </form>
    </div>
  )
}

export default NewBrand
