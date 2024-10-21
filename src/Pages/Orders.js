import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import Loading from '../Components/Loading'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import { ApiDeleteRequest } from '../Lib/apiRequest'
import InformationHeader from '../Components/Headers/InformationHeader'
import { ordersHeader } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import EditeStatus from '../Components/EditeStatus'
import DeleteItem from '../Components/DeleteItem'
import StatusData from '../Components/StatusData'
import Image from '../Components/Image'

const Orders = () => {
  const [listOrders, setListOrders] = useState()
  const [idStatus, setIdStatus] = useState()
  const { openStatus, setOpenStatus, search } = useStateContext()
  const { data: orders, loading } = useFetchData(`/orders?value=${search}`)
  useEffect(() => {
    setListOrders(orders)
  }, [orders])

  return (
    <div>
      <FixedHeader text="Orders" user={true} />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm
      "
      >
        <InformationHeader data={ordersHeader} fixedSize="min-w-[2020px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listOrders?.map((item, i) =>
              item?.products?.map((order, index) => (
                <div
                  className=" p-2 min-w-[2020px]  border-b-[1px] border-gray-200
             gap-1 bg-white hover:bg-blue-50
             flex justify-between items-center"
                  key={index}
                >
                  <p className="min-w-[50px] text-center text-15 sms:text-14 font-medium capitalize ">
                    {i + 1}
                  </p>
                  <Image img={order?.img} size={'110'} />
                  <p
                    className="    min-w-[120px]
           font-medium capitalize text-center  text-15 sms:text-14  "
                  >
                    {order?.part}
                  </p>
                  <p
                    className="  text-center 
                    min-w-[120px]   font-medium capitalize "
                  >
                    {order?.category?.name}
                  </p>
                  <p
                    className="  text-center 
           min-w-[80px] font-medium capitalize"
                  >
                    {order?.options?.model}
                  </p>
                  <p
                    className="  text-center 
           min-w-[80px] font-medium capitalize"
                  >
                    {order?.quantity}
                  </p>
                  <p
                    className="  text-center 
           min-w-[120px] font-medium capitalize"
                  >
                    ${item?.totalPrice}
                  </p>
                  <p
                    className="  text-center 
           min-w-[200px] font-medium capitalize "
                  >
                    {item?.userId?.username}
                  </p>
                  <p
                    className="  text-center 
           min-w-[180px] font-medium capitalize "
                  >
                    {item?.userId?.firstname + ' ' + item?.userId?.lastname}
                  </p>
                  <p
                    className="  text-center 
           min-w-[150px] font-medium capitalize "
                  >
                    {item?.address}
                  </p>
                  <p
                    className="  text-center 
           min-w-[160px] font-medium capitalize "
                  >
                    {item?.code}
                  </p>
                  <p
                    className="  text-center 
           min-w-[100px] font-medium capitalize "
                  >
                    {item?.city}
                  </p>

                  <p
                    className="  text-center 
           min-w-[100px] font-medium capitalize "
                  >
                    {item?.country}
                  </p>
                  <p
                    className="  text-center 
           min-w-[100px] font-medium capitalize "
                  >
                    {item?.status}
                  </p>
                  <p
                    className=" text-center 
           min-w-[100px] font-medium capitalize  text-13 "
                  >
                    {format(item?.createdAt)}
                  </p>
                  <p
                    className=" text-center 
           min-w-[100px] font-medium capitalize  text-13 "
                  >
                    {format(item?.updatedAt)}
                  </p>
                  <p
                    className=" min-w-[70px] 
          font-medium capitalize flex justify-center items-center gap-4 "
                  >
                    <Link
                      onClick={() => setOpenStatus((prev) => !prev)}
                      to={{}}
                    >
                      <AiOutlineEdit
                        className="cursor-pointer text-green-400"
                        onClick={() => setIdStatus(item?._id)}
                      />
                    </Link>
                    <DeleteItem
                      id={item?._id}
                      endPoint={'orders'}
                      resourceName={'Order'}
                      list={listOrders}
                      setList={setListOrders}
                    />
                  </p>
                </div>
              )),
            )
          )}
        <StatusData list={listOrders} resourceName={'Orders'} size={2020} />
          
          <>{openStatus && <EditeStatus id={idStatus} />}</>
        </>
      </div>
    </div>
  )
}

export default Orders
