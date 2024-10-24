import React  from 'react'
import { BsChatLeft } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider.js'
import useFetchData from '../hooks/useFetchData'
import { format } from 'timeago.js'
import {Link} from "react-router-dom"
import avatar3 from '../data/images/avatar3.png'

const Messages = () => {
  const { message, setMessage } = useStateContext()
    const { data: messages } = useFetchData(`/contacts?limit=${3}`)
    const { data: messageLenght } = useFetchData(`/contacts`)
   
    
  return (
    <div className=" relative  ">
      <span
        className="text-[19px] cursor-pointer"
        onClick={() => setMessage((prev) => !prev)}
      >
       <small
          className="absolute -top-2 left-2 text-[10px] bg-[red] 
        rounded-full px-[6px] py-[1px] text-white"
        >
          {messageLenght?.length}
        </small>
        <BsChatLeft className=" text-basic" />
      </span>
      {message && (
        <div
          className="w-72  h-auto  bg-white shadow  nav-item p-6 absolute 
               top-11
       right-0 rounded-lg"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="bold">Messages</h2>
            <span className="text-[18px] cursor-pointer">
              <MdOutlineCancel onClick={() => setMessage((prev) => !prev)} />
            </span>
          </div>

            {messages?.map((message) => (
          <div className="flex items-center py-2 gap-3   border-b-1">
              <>
            <div>
              <img
                className=" rounded-full  h-10 w-10"
                 src={
                message?.userId?.img?.[0]
                  ? process.env.REACT_APP_PUBLIC_FOLDER +message?.userId?.img
                  : avatar3
              }
                alt="hisham mohammed saleh"
              />
            </div>
            <div>
              <h4 className=" text-14 font-semibold ">   {message?.userId?.firstname + " "+ message?.userId?.lastname} </h4>
              <p className=" text-sm " style={{ lineHieght: '1' }}>
                {message?.userId?.firstname} {' '}
                send new message
                 <br />
              </p>
              <p className="text-xs">{format(message?.createdAt)} AM</p>
            </div>
            </>
          </div>
            ))}
         
 <Link to="/messages">
          <button className="h-full w-full text-center mt-4
           bg-bg-basic p-2 rounded-md"
           onClick={() => setMessage((prev) => !prev)}>
            See all messages
          </button>
</Link>
        </div>
      )}
    </div>
  )
}

export default Messages
