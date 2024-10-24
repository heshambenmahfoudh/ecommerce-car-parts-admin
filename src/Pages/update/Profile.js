import React, { useEffect, useState } from 'react'
import Buttons from '../../Components/Forms/Buttons'
import Lables from '../../Components/Forms/Lables'
import Inputs from '../../Components/Forms/Inputs'
import SelectImage from '../../Components/Forms/SelectImage'
import { ApiPostImageRequest, ApiPutRequestProfile } from '../../Lib/apiRequest'
import { useStateContextAuth } from '../../contexts/AuthContext'
import useFetchData from '../../hooks/useFetchData'
import { FixedHeader } from '../../Components/Headers/FixedHeader'

const Profile = () => {
  const { admin, dispatch, loading } = useStateContextAuth()
  const id = admin?._id
  const { data: adminData } = useFetchData(`/users/find/${id}`)
  const [information, setInformation] = useState()
  const [image, setImage] = useState(undefined)

  // render value when is id found
  useEffect(() => {
    setInformation(adminData)
    setImage(adminData?.img)
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
  const updatedProfile = (e) => {
    const data = {
      ...information,
      img: image,
    }
    ApiPutRequestProfile('users', e, id, data, dispatch, 'Profile')
  }

  return (
    <div>
      <FixedHeader link="" text="Update Profile" user={{}} />
      <form
        className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md
       bg-white shadow-md border-1 max-w-4xl ssm:mt-7"
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
                  value={information?.firstname}
                />
              </div>
              <div className="w-full">
                <Lables text="Last Name" />
                <Inputs
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  changeValue={changeData}
                  value={information?.lastname}
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
                value={information?.username}
              />
            </div>
            <div className="w-full">
              <Lables text="Password" />
              <Inputs
                type="password"
                name="password"
                placeholder="Password"
                changeValue={changeData}
                value={information?.password}
              />
            </div>
          </div>
        </div>
        <Buttons
          text={'Update'}
          onClick={updatedProfile}
          loading={loading}
          title="Profile"
        />
      </form>
    </div>
  )
}

export default Profile
