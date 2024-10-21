import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Lables from '../../Components/Forms/Lables'
import FormHeader from '../../Components/Headers/FormHeader'
import Buttons from '../../Components/Forms/Buttons'
import CheckBoxInput from '../../Components/Forms/CheckBoxInput'
import {
  ApiPostImageRequest,
  ApiPostRequest,
  ApiPutRequest,
} from '../../Lib/apiRequest'
import Inputs from '../../Components/Forms/Inputs'
import SelectImage from '../../Components/Forms/SelectImage'

const NewAdmin = ({ adminData, id }) => {
  const [information, setInformation] = useState()
  const [admin, setAdmin] = useState(false)
  const [image, setImage] = useState(undefined)
  const [err, setErr] = useState(null)
  const [rederect, setRederect] = useState('')
  const [loading, setLoading] = useState(false)

  // render value when is id found
  useEffect(() => {
    setInformation(adminData)
    setImage(adminData?.img)
    setAdmin(adminData?.isAdmin)
  }, [adminData])

  // take data from input
  const changeData = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value })
  }

  // take string of img from input
  const changeImage = async (e) => {
    ApiPostImageRequest('/deploy', e, setImage)
  }

  // added data or update data
  const addedUser = async (e) => {
    const data = {
      ...information,
      img: image,
      isAdmin: admin,
    }
    id
      ? ApiPutRequest(
          `/users/${id}`,
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          admin === true ? '/admins' : '/users',
          admin === true ? 'Admin' : 'User',
          admin,
        )
      : ApiPostRequest(
          '/auth/register',
          e,
          data,
          setLoading,
          setRederect,
          setErr,
          admin === true ? '/admins' : '/users',
          admin === true ? 'Admin' : 'User',
          admin,
        )
  }

  if (rederect) {
    return <Navigate to={rederect} />
  }
  return (
    <div>
      <FormHeader url="../admins" title={id ? 'Update admin' : 'New admin'} />
      <form
        className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md
       bg-white shadow-md border-1 max-w-4xl"
      >
        <div className="flex justify-between flex-col gap-5">
          <SelectImage chaneValue={changeImage} img={image} />
          <div className="flex flex-col gap-1 ">
            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="First Name" />
                <Inputs
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  changeValue={changeData}
                  value={id && information?.firstname}
                />
              </div>
              <div className="w-full">
                <Lables text="Last Name" />
                <Inputs
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  changeValue={changeData}
                  value={id && information?.lastname}
                />
              </div>
            </div>
            <div className="w-full">
              <Lables text="Username Email" />
              <Inputs
                type="email"
                name="username"
                placeholder="You@gmail.com"
                changeValue={changeData}
                value={id && information?.username}
              />
            </div>
            <div className="w-full">
              <Lables text="Password" />
              <Inputs
                type="password"
                name="password"
                placeholder="Password"
                changeValue={changeData}
                value={id && information?.password}
              />
            </div>
            <div className=" flex flex-col">
              <Lables text="isAdmin" />
              <CheckBoxInput
                name="isadmin"
                changeAdmin={() => setAdmin((prev) => !prev)}
                checked={admin}
              />
            </div>
          </div>
        </div>
        <Buttons
          text={id ? 'Update' : 'Create'}
          onClick={addedUser}
          loading={loading}
          title="Admin"
          err={err}
        />
      </form>
    </div>
  )
}

export default NewAdmin
