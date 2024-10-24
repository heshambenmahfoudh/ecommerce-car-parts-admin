import React, { useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import InformationHeader from '../Components/Headers/InformationHeader'
import Loading from '../Components/Loading'
import avatar from '../data/images/avatar.jpg'
import { adminHeader } from '../data/dummy'
import useFetchData from '../hooks/useFetchData'
import { useStateContext } from '../contexts/ContextProvider'
import DeleteItem from '../Components/DeleteItem'
import StatusData from '../Components/StatusData'
import Image from '../Components/Image'

const Admins = () => {
  const [listAdmins, setListAdmins] = useState()
  const { search } = useStateContext()
  const { data: admins, loading } = useFetchData(`/users?admin=true`)
  useEffect(() => {
    setListAdmins(admins)
  }, [admins])

  return (
    <div>
      <FixedHeader link="/admin/new" text="Admins" />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm"
      >
        <InformationHeader data={adminHeader} fixedSize="min-w-[820px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listAdmins?.map(
              (
                {
                  _id,
                  img,
                  username,
                  firstname,
                  lastname,
                  createdAt,
                  updatedAt,
                },
                i,
              ) => (
                <div
                  className=" p-2 min-w-[820px]  border-b-[1px] border-gray-200
             gap-1 bg-white hover:bg-blue-50
             flex justify-between items-center"
                  key={i}
                >
                  <p className="text-center text-15 sms:text-14  w-[50px]   font-medium capitalize ">
                    {i + 1}
                  </p>
                  <Image img={img} size={'100'} img2={avatar} />
                  <p
                    className="text-center text-15 sms:text-14 flex-1   font-medium capitalize 
                   ssm:min-w-[200px]"
                  >
                    {firstname + ' ' + lastname}
                  </p>
                  <p
                    className="text-center text-15   font-medium capitalize sms:text-14 flex-1 
                    ssm:min-w-[200px]"
                  >
                    {username}
                  </p>
                  <p
                    className="text-center text-13   font-medium capitalize sms:text-14 
                   min-w-[100px]"
                  >
                    {format(createdAt)}
                  </p>
                  <p
                    className="text-center text-13   font-medium capitalize sms:text-14 
                   min-w-[100px]"
                  >
                    {format(updatedAt)}
                  </p>
                  <p className=" min-w-[70px] flex justify-center items-center gap-4 ">
                    <Link to={`../admin/find/update/${_id}`}>
                      <AiOutlineEdit className="cursor-pointer text-green-400" />
                    </Link>
                    <DeleteItem
                      id={_id}
                      endPoint={'users'}
                      resourceName={'Admin'}
                      list={listAdmins}
                      setList={setListAdmins}
                    />
                  </p>
                </div>
              ),
            )
          )}
          <StatusData list={listAdmins} resourceName={'Admins'}  size={820}/>
        </>
      </div>
    </div>
  )
}

export default Admins
