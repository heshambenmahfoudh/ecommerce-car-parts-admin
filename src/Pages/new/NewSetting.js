import React, { useEffect, useState } from 'react'
import useFetchData from '../../hooks/useFetchData'
import Lables from '../../Components/Forms/Lables'
import Inputs from '../../Components/Forms/Inputs'
import TextAria from '../../Components/Forms/TextAria'
import FormHeader from '../../Components/Headers/FormHeader'
import Buttons from '../../Components/Forms/Buttons'
import { Navigate } from 'react-router-dom'
import {
  ApiPostImageRequest,
  ApiPostRequest,
  ApiPutRequest,
} from '../../Lib/apiRequest'
import SelectImage from '../../Components/Forms/SelectImage'

const NewSetting = () => {
  const [data, setData] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [rederect, setRederect] = useState('')
  const [err, setErr] = useState('')

  const { data: setting } = useFetchData(`/setting`)
  const id = setting?.[0]?._id
  useEffect(() => {
    if (id) {
      setData(setting?.[0])
      setImage(setting?.[0]?.img?.[0])
    }
  }, [setting, id])
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  //  CHANGE DATA IMG
  const changeImage = async (e) => {
    ApiPostImageRequest('/deploy', e, setImage)
  }
  //  ADD CATEGORY
  const addedSetting = async (e) => {
    e.preventDefault()
    const dataSetting = {
      title: data?.title,
      description: data?.description,
      img: image,
    }
    id
      ? ApiPutRequest(
          `/setting/${setting?.[0]?._id}`,
          e,
          dataSetting,
          setLoading,
          setRederect,
          setErr,
          '',
          'Setting',
        )
      : ApiPostRequest(
          `/setting`,
          e,
          dataSetting,
          setLoading,
          setRederect,
          setErr,
          '',
          'Setting',
        )
  }
  if (rederect) {
    return <Navigate to={rederect} />
  }

  return (
    <div>
      <FormHeader title={id ? 'Update setting' : 'New setting'} user={true} />
      <form className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md bg-white shadow-md border-1 max-w-4xl">
        <div className="flex justify-between flex-col gap-5">
          <SelectImage chaneValue={changeImage} img={image} />
          <div className="flex flex-col gap-1">
            <div className="w-full">
              <Lables text="Setting Title" />
              <Inputs
                type="text"
                placeholder="Setting Title"
                name="title"
                changeValue={changeData}
                value={id && data?.title}
              />
            </div>

            <div className="w-full">
              <Lables text="Setting Description" />
              <TextAria
                name="description"
                placeholder="setting description"
                changeValue={changeData}
                value={id && data?.description}
              />
            </div>
          </div>
        </div>
        <Buttons
          text={id ? 'Update' : 'Create'}
          onClick={addedSetting}
          loading={loading}
          title="Setting"
          err={err}
        />
      </form>
    </div>
  )
}

export default NewSetting
