import React from 'react'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { format } from 'timeago.js'
import { useStateContext } from '../contexts/ContextProvider'
import useFetchData from '../hooks/useFetchData'
import { MdOutlineCancel } from 'react-icons/md'
import {Link} from "react-router-dom"
import avatar from '../data/avatar.jpg'

const Orders = () => {
  const { order, setOrder } = useStateContext()
    const { data: orders } = useFetchData(`orders?limit=${3}`)
    const { data: ordersLenght } = useFetchData(`orders`)
    console.log('orders ,',orders);
  return (
    <div className=" relative  ">
      <span
        className="text-[19px] cursor-pointer"
        onClick={() => setOrder((prev) => !prev)}
      >
       <small
          className="absolute -top-2 left-2 text-[10px] bg-[red] 
        rounded-full px-[6px] py-[1px] text-white"
        >
          {ordersLenght?.length}
        </small>
        <MdOutlineLocalGroceryStore className=" text-basic" />
      </span>
      {order && (
        <div
          className="w-72  h-auto  bg-white shadow  nav-item p-6 absolute 
               top-11
       right-0 rounded-lg"
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="bold">Orders</h2>
            <span className="text-[18px] cursor-pointer">
              <MdOutlineCancel onClick={() => setOrder((prev) => !prev)} />
            </span>
          </div>

            {orders?.map(({userId ,createdAt}) => (
          <div className="flex items-center py-2 gap-3   border-b-1">

              <>
            <div>
              <img
                className=" rounded-full  h-10 w-10"
                src={ avatar || process.env.REACT_APP_PUBLIC_FOLDER +userId?.[0]?.img }
                alt="hisham mohammed saleh"
              />
            </div>
            <div>
              <h4 className=" text-14 font-semibold ">   {userId.firstname + " "+ userId?.lastname} </h4>
              <p className=" text-sm " style={{ lineHieght: '1' }}>
                {userId?.firstname} {' '}
                add new order
                 <br />
              </p>
              <p className="text-xs">{format(createdAt)} AM</p>
            </div>
            </>
          </div>
            ))}
         
 <Link to="/orders">
          <button className="h-full w-full text-center mt-4
           bg-bg-basic p-2 rounded-md"
           onClick={() => setOrder((prev) => !prev)}>
            See all orders
          </button>
</Link>
        </div>
      )}
    </div>
  )
}


export default Orders
