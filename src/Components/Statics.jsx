import React from 'react'
import { BsCurrencyDollar} from 'react-icons/bs'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { SiGoogleanalytics } from 'react-icons/si'
import { SlPeople } from 'react-icons/sl'
import earningPhoto from '../../src/data/earning.svg'
import useFetchData from '../hooks/useFetchData'

const Statics = () => {
const { data: earningMonthly } = useFetchData(`/orders/earning/monthly`)
const { data: allEarning } = useFetchData(`/orders/all/earning`)
const { data: users } = useFetchData(`/users`)
const { data: products } = useFetchData(`/products`)
const { data: orders } = useFetchData(`/orders`)

  return (
     <div
        className="grid xl:grid-cols-4 lg:grid-cols-3 
          md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 parent">
          <div  className="bg-center bg-blue-200  rounded-2xl p-4 h-44  mb-1 sm:mb-0 item"
            style={{ backgroundImage: `url(${earningPhoto})` }} >
            <span
              className="p-3 mb-3 flex items-center justify-center w-fit
                       rounded-full bg-bg-basic text-2xl">
           <BsCurrencyDollar />
            </span>
            <h3 className="font-bold text-[14px]">All Earning </h3>
            <div className='flex justify-between items-center'>
                <h1 className="font-bold text-2xl mb-2 ">${allEarning |0} </h1>
                <h3 className='font-semibold text-1xl mb-2 flex flex-col  items-center'>
                <span className='ml-1 text-11'>
                  Month {new Date().getMonth()}
                </span>
                <span className='ml-1 text-green-700 text-18'>
                ${
                 earningMonthly?.[0]?.total | 0 }
                </span>
                </h3>
            </div>
           
          </div>
          <div
            className="bg-center bg-blue-200 rounded-2xl p-4 h-44  mb-1 sm:mb-0 item"
          >
            <span
              className="p-3 mb-3 flex items-center justify-center w-fit
            rounded-full bg-bg-basic text-2xl "
            >
           <SiGoogleanalytics />
            </span>
            <h3 className="font-bold text-[14px]">Total Products</h3>
            <div className='flex justify-between items-center'>
                <h1 className="font-bold text-2xl mb-2 ">{products?.length} </h1>
            </div>
            <small className="text-[#110d0e8c] text-[13px]"> 
             Compare with last month</small>
          </div>
          {/* //////////////// */}
          <div
            className="bg-center bg-blue-200  rounded-2xl p-4 h-44  mb-1 sm:mb-0 item"
          >
            <span
              className="p-3 mb-3 flex items-center justify-center w-fit
            rounded-full bg-bg-basic text-2xl "
            >
           <MdOutlineProductionQuantityLimits />
            </span>
            <h3 className="font-bold text-[14px]">Total Order</h3>
            <div className='flex justify-between items-center'>
                <h1 className="font-bold text-2xl mb-2 ">{orders.length} </h1>
              
            </div>
            <small className="text-[#110d0e8c] text-[13px]"> 
             Compare with last month</small>
          </div>
          <div
            className="bg-center bg-blue-200  rounded-2xl p-4 h-44  mb-1 sm:mb-0 item"
          >
            <span
              className="p-3 mb-3 flex items-center justify-center w-fit
            rounded-full bg-bg-basic text-2xl "
            >
           <SlPeople />
            </span>
            <h3 className="font-bold text-[14px]">Total Users</h3>
            <div className='flex justify-between items-center'>
                <h1 className="font-bold text-2xl mb-2 ">{users.length} </h1>
            </div>
            <small className="text-[#110d0e8c] text-[13px]"> 
             Compare with last month</small>
          </div>
      </div>
  )
}

export default Statics