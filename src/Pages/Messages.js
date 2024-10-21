import React, { useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import useFetchData from '../hooks/useFetchData'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import InformationHeader from '../Components/Headers/InformationHeader'
import { messagesHeader } from '../data/dummy'
import StatusData from '../Components/StatusData'
import DeleteItem from '../Components/DeleteItem'

const Messages = () => {
  const [listMessages, setListMessages] = useState()
  const { data: messages, loading } = useFetchData(`/contacts`)
  useEffect(() => {
    setListMessages(messages)
  }, [messages])
 
  return (
    <div>
      <FixedHeader user={true} text="Messages" />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm
      "
      >
        <InformationHeader data={messagesHeader} fixedSize="min-w-[800px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listMessages?.map((item, i) => (
              <div
                className=" p-2 min-w-[800px] border-b-[1px] border-gray-200
            gap-1 bg-white hover:bg-blue-50
             flex justify-between items-center"
                key={i}
              >
                <p className="w-[50px] text-center text-15 sms:text-14 font-medium ">
                  {i + 1}
                </p>
                <p
                  className="text-center capitalize text-15 sms:text-14 min-w-[200px]
              font-medium
              "
                >
                  {item?.userId?.firstname + ' ' + item?.userId?.lastname}
                </p>
                <p
                  className="text-center capitalize text-15 sms:text-14 min-w-[200px]
              font-medium
              "
                >
                  {item?.userId?.username}
                </p>
                <p
                  className="text-center capitalize text-15 sms:text-14 flex-1 sms:min-w-[250px]
              font-medium
              "
                >
                  {item?.subject}
                </p>

                <p className="text-center text-13 font-medium min-w-[100px]">
                  {format(item?.createdAt)}
                </p>
                <p className=" min-w-[70px] flex justify-center items-center gap-4 ">
                  <Link to={`../message/${item?._id}`}>
                    <AiOutlineEdit className="cursor-pointer text-green-400" />
                  </Link>
                  <DeleteItem
                    id={item?._id}
                    endPoint={'contacts'}
                    resourceName={'Message'}
                    list={listMessages}
                    setList={setListMessages}
                  />
                </p>
              </div>
            ))
          )}
          <StatusData list={listMessages} resourceName={'Messages'} size={800}/>
        </>
      </div>
    </div>
  )
}
export default Messages
