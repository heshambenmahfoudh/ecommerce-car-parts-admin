import React from 'react'
import useFetchData from '../hooks/useFetchData'
import avatar from "../../src/data/avatar.jpg"
import Loading from './Loading'

const LastUserJoin = () => {
    const { data:users, loading } = useFetchData(`/users?admin=false&limit=4`)
  return (
    <>
     <div className='flex flex-col w-full rounded-xl   bg-white md:p-4 p-3'>
        <h2 className='font-bold text-15 mb-4'> New user join</h2>
            <div className=" p-1.5 flex justify-between items-center gap-2 ">
          <h2
            className="  text-center 
            min-w-[80px] font-bold"
          >
            Img
          </h2>
          <h2
            className="  text-center 
           min-w-[60px] font-bold flex-1 ssm:min-w-[200px]"
          >
            Full Name
          </h2>
          <h2
            className="  text-center 
           min-w-[60px] font-bold flex-1 ssm:min-w-[200px]"
          >
            Username
          </h2>
       
        </div>
        <>
          {loading
            ? <Loading/>
            : users?.map(({img , username,firstname,lastname}, i) => (
                <div
            
             className=" p-2   border-b-[1px] border-gray-200
             gap-2 bg-white hover:bg-blue-50
             flex justify-between items-center"
                  key={i}
                >
                  <p
                    className="flex justify-center items-center 
            min-w-[80px] font-medium capitalize"
                  >
                    <img
                  src={
                      img?.[0]
                        ? process.env.REACT_APP_PUBLIC_FOLDER + img?.[0]
                        : avatar
                    }
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                  </p>
                  <p className="text-center text-15 sms:text-14 flex-1 
                  font-medium capitalize  ssm:min-w-[200px]">
                    {firstname + ' ' + lastname}
                  </p>
                  <p className="text-center text-15 sms:text-14 flex-1 font-medium capitalize ssm:min-w-[200px]">
                    {username}
                  </p>
                </div>
              ))}
        {users?.length <= 0 && (
            <div
              className=" p-6 text-center text-18 
            gap-2 bg-white 
            "
            >
              No Last User Join herer
            </div>
          )} </>
     </div>
    </>
  )
}

export default LastUserJoin