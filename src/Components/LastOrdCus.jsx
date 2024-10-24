import React from 'react'
import useFetchData from '../hooks/useFetchData'
import Loading from './Loading'

import avatar from "../data/images/avatar.jpg"
import StatusData from './StatusData'
const LastOrdCus = () => {
 const { data:orders, loading } = useFetchData(`/orders?limit=5`)

     return (
     <div className='flex flex-col  w-full rounded-xl  bg-white md:p-4 p-3 '>
        <h2 className='font-bold text-15 mb-4'> Last Order of custumer</h2>
             <div className="overflow-x-auto ">
         <div className=" p-1.5 flex justify-between
          min-w-[654px] items-center gap-2 ">
          <h2
            className="  text-center 
        font-bold  min-w-[100px]"
          >
            Img
          </h2>
          <h2
            className="  text-center flex-1
        font-bold  ssm:min-w-[200px]"
          >
            Customer
          </h2>
          <h2
            className="  text-center 
           min-w-[120px] font-bold"
          >
            Date
          </h2>
          <h2
            className=" text-center 
           min-w-[80px] font-bold"
          >
            Qty
          </h2>
          <h2
            className=" text-center 
           min-w-[120px] font-bold"
          >
            Total Price
          </h2>
          <h2
            className=" min-w-[100px] 
          text-center font-bold "
          >
            Status
          </h2>
        </div>
        <>
          {loading
            ? <Loading/>
            : orders?.map((item, i) => (
                <div 
                    className=" p-2 min-w-[654px] border-b-[1px] border-gray-200
             gap-2 bg-white hover:bg-blue-50
             flex justify-between items-center"
                  key={i}
                >
                   <p
                    className="flex justify-center items-center 
            min-w-[100px] font-medium capitalize"
                  >
                    <img
                     src={
                      item?.userId?.img?.[0]
                        ? process.env.REACT_APP_PUBLIC_FOLDER + item?.userId?.img?.[0]
                        : avatar
                    }
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                  </p>
                  <p className="text-center text-15 sms:text-14 flex-1
                   font-medium capitalize
                   ssm:min-w-[200px]">
                    {item?.userId?.firstname +" "+item?.userId?.lastname}
                  </p>
                  <p className="text-center text-15 sms:text-14  font-medium capitalize 
                   min-w-[120px]">
                  {item?.createdAt?.slice(0,10)}
                  </p>
                  <p className="text-center text-15 sms:text-14 font-medium capitalize 
                  min-w-[80px]">
                    {item?.products?.length}
                  </p>
                  <p className="text-center text-15 sms:text-14 font-medium capitalize 
                  min-w-[120px]">
                    ${item?.totalPrice}
                  </p>
                  <p className="text-center text-15 sms:text-14  font-medium capitalize
                   min-w-[100px] ">
                    {item?.status}
                  </p>
                </div>
              ))}
   <StatusData list={orders} resourceName={'Orders'} size={654} />

              </>
        </div>
     </div>
  )
}

export default LastOrdCus