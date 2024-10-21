import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineCancel, MdOutlineLogout } from 'react-icons/md'
import avatar from '../data/avatar.jpg'
import { RiEmpathizeLine } from 'react-icons/ri'
import { useStateContext } from '../contexts/ContextProvider.js'
import { useStateContextAuth } from '../contexts/AuthContext'

const Profile = () => {
  const { userProfile, setUserProfile } = useStateContext()
  const {admin ,dispatch} = useStateContextAuth()
  return (
    <div className="relative">
      <div className="flex gap-2 items-center cursor-pointer">
        <img
          className=" rounded-full w-8 h-8 "
          src={ admin?.img?.[0]
                        ? process.env.REACT_APP_PUBLIC_FOLDER + admin?.img?.[0]
                        : avatar}
          alt="hisham mohammed saleh"
          onClick={() => setUserProfile((prev) => !prev)}
        />
      </div>
      {userProfile && (
        <div
          className="w-72  h-auto bg-white  shadow  nav-item p-6 
        absolute top-12 right-0 rounded-lg"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold ">User profile</h2>
            <span className="text-[18px] cursor-pointer ">
              <MdOutlineCancel
                onClick={() => setUserProfile((prev) => !prev)}
              />
            </span>
          </div>
          <div className="flex items-center mt-3 gap-4 pb-4 border-b-1">
            <img className="w-14 h-14 rounded-[50%]" src={ admin?.img?.[0]
                        ? process.env.REACT_APP_PUBLIC_FOLDER + admin?.img?.[0]
                        : avatar} alt="" />
            <div>
              <h4 className=" text-[17px] font-semibold ">{admin?.firstname + " "+ admin?.lastname }</h4>
              <p className=" text-sm font-semibold text-basic ">
                {admin?.username}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 py-2 border-b-1">
              <span className="text-[19px] bg-bg-basic p-2 rounded-md">
                <FiSettings />
              </span>
              <div>
                <h4 className=" text-14 font-semibold ">My profile</h4>
                <p className=" text-sm ">
                  Account settings <br />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2  border-b-1">
              <span className="text-[19px] bg-bg-basic p-2 rounded-md">
                <RiEmpathizeLine />
              </span>
              <div>
                <h4 className=" text-14 font-semibold ">My inbox</h4>
                <p className=" text-sm ">Message and email</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2  border-b-1">
              <span className="text-[19px] bg-bg-basic p-2 rounded-md">
                <MdOutlineLogout />
              </span>
              <div>
                <h4 className=" text-14 font-semibold ">My profile</h4>
                <p className=" text-sm ">
                  Account settings <br />
                </p>
              </div>
            </div>
            <button className="h-full w-full text-center mt-4
             font-semibold bg-bg-basic p-2 rounded-md"
             onClick={() => dispatch({type:'LOG_OUT'})}
             >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
