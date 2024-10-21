import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import avatar from '../data/avatar.jpg'
import useFetchData from '../hooks/useFetchData'
import Loading from '../Components/Loading'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import InformationHeader from '../Components/Headers/InformationHeader'
import { usersHeader } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import StatusData from '../Components/StatusData'
import DeleteItem from '../Components/DeleteItem'
import Image from '../Components/Image'

const Users = () => {
  const [listUsers, setListUsers] = useState()
  const { search } = useStateContext()
  const { data: users, loading } = useFetchData(`/users?admin=false`)

  useEffect(() => {
    setListUsers(users)
  }, [users])

  return (
    <div>
      <FixedHeader text="Users" user={true} />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm
      "
      >
        <InformationHeader data={usersHeader} fixedSize="min-w-[820px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listUsers?.map(
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
                  <p className="text-center text-15 sms:text-14  w-[50px] font-medium capitalize ">
                    {i + 1}
                  </p>
                  <Image img={img} size={'100'} img2={avatar} />
                  <p className="text-center text-15 sms:text-14 flex-1 font-medium capitalize ssm:min-w-[200px]">
                    {firstname + ' ' + lastname}
                  </p>
                  <p className="text-center text-15 font-medium capitalize sms:text-14 flex-1 ssm:flex-1 ssm:min-w-[200px]">
                    {username}
                  </p>
                  <p className="text-center text-13 font-medium capitalize sms:text-14  min-w-[100px]">
                    {format(createdAt)}
                  </p>
                  <p className="text-center text-13 font-medium capitalize sms:text-14  min-w-[100px]">
                    {format(updatedAt)}
                  </p>
                  <p className=" min-w-[70px] flex justify-center items-center gap-4 ">
                    <DeleteItem
                      id={_id}
                      endPoint={'users'}
                      resourceName={'User'}
                      list={listUsers}
                      setList={setListUsers}
                    />
                  </p>
                </div>
              ),
            )
          )}
          <StatusData list={listUsers} resourceName={'Users'} size={820} />
        </>
      </div>
    </div>
  )
}

export default Users
