import React from 'react'
import avatar from "../data/images/avatar.jpg"
import { RiNotification3Line } from 'react-icons/ri'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider.js'

const Notification = () => {
  const { notification, setNotification } = useStateContext()
  return (
    <div className=" relative ">
      <span
        className="text-[19px] cursor-pointer "
        onClick={() => setNotification((prev) => !prev)}
      >
       <small
          className="absolute -top-2 left-2 text-[10px] bg-[red] 
        rounded-full px-[6px] py-[1px] text-white"
        >
          22
        </small>
        <RiNotification3Line className=" text-basic" />
      </span>
      {notification && (
        <div
          className="w-72  h-auto   bg-white shadow  nav-item p-6 
          absolute  top-11
           right-0 rounded-xl"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="bold">Notfication</h2>
            <span
              className="text-[18px]"
              onClick={() => setNotification((prev) => !prev)}
            >
              <MdOutlineCancel className="cursor-pointer" />
            </span>
          </div>
          <div>
            <div className="flex items-center py-3 gap-3  border-b-1">
              <div>
                <img className=" rounded-full  h-10 w-10" src={avatar} alt="" />
              </div>
              <div>
                <h4 className=" text-14 font-semibold ">
                  hisham mohammed saleh
                </h4>
                <p className=" text-sm ">
                  saeed send new message <br />
                </p>
              </div>
            </div>
            <div className="flex items-center py-3 gap-3  border-b-1">
              <div>
                <img
                  className=" rounded-full  h-10 w-10"
                  src={avatar}
                  alt="hisham mohammed saleh"
                />
              </div>
              <div>
                <h4 className=" text-14 font-semibold ">saeed ali nasser</h4>
                <p className=" text-sm ">
                  ahmed send new message <br />
                </p>
              </div>
            </div>
            <div className="flex items-center py-3 gap-3  border-b-1">
              <div>
                <img
                  className=" rounded-full  h-10 w-10"
                  src={avatar}
                  alt="hisham mohammed saleh"
                />
              </div>
              <div>
                <h4 className=" text-14 font-semibold ">
                  nassem mohammed saleh
                </h4>
                <p className=" text-sm ">
                  ali send new message <br />
                </p>
              </div>
            </div>
            <div className="flex items-center py-3 gap-3  border-b-1">
              <div>
                <img
                  className=" rounded-full  h-10 w-10"
                  src={avatar}
                  alt="hisham mohammed saleh"
                />
              </div>
              <div>
                <h4 className=" text-14 font-semibold ">
                  nasser mohammed saleh
                </h4>
                <p className=" text-sm ">
                  ali send new message <br />
                </p>
              </div>
            </div>
          </div>

          <button className="h-full w-full text-center mt-4 bg-bg-basic p-2 rounded-md">
            See all message
          </button>
        </div>
      )}
    </div>
  )
}

export default Notification
