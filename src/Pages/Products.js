import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { AiOutlineEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useFetchData from '../hooks/useFetchData'
import Loading from '../Components/Loading'
import InformationHeader from '../Components/Headers/InformationHeader'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import { productsHeader } from '../data/dummy'
import SelectInput from '../Components/Forms/SelectInput'
import StatusData from '../Components/StatusData'
import DeleteItem from '../Components/DeleteItem'
import Image from '../Components/Image'

const Products = () => {
  const [listProducts, setListProducts] = useState()
  const { data: products, loading } = useFetchData(`/products`)
  useEffect(() => {
    setListProducts(products)
  }, [products])

  return (
    <div>
      <FixedHeader link="/products/new" text="Products" />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm 
      "
      >
        <InformationHeader data={productsHeader} fixedSize="min-w-[1630px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listProducts?.map((item, i) => (
              <div
                className=" p-2 min-w-[1630px] border-b-[1px] border-gray-200
             gap-1  bg-white hover:bg-blue-50
             flex justify-between items-center"
                key={i}
              >
                <p className="min-w-[50px] text-center text-15 sms:text-14 font-medium capitalize ">
                  {i + 1}
                </p>
                <Image img={item?.img} size={'110'} />
                <p
                  className="min-w-[220px] font-medium capitalize 
                      text-center  text-15 sms:text-14"
                >
                  {item?.title}
                </p>
                <p
                  className="    min-w-[200px]
           font-medium capitalize text-center  text-15 sms:text-14  "
                >
                  {item?.part}
                </p>
                <p
                  className="  text-center 
                    min-w-[100px]   font-medium capitalize"
                >
                  {item?.brand?.name}
                </p>
                <p
                  className="  text-center 
                    min-w-[150px]   font-medium capitalize"
                >
                  {item?.category?.name}
                </p>
                <p
                  className="  text-center 
                    min-w-[100px]   font-medium capitalize"
                >
                  {item?.madein}
                </p>
                <p
                  className="  text-center 
           min-w-[120px] font-medium capitalize"
                >
                  ${item?.startPrice}
                </p>
                <p
                  className="text-center 
                 min-w-[240px]"
                >
                  <SelectInput options={item?.options} />
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
                  <Link to={`/products/find/update/${item._id}`}>
                    <AiOutlineEdit className="cursor-pointer text-green-400" />
                  </Link>
                  <DeleteItem
                    id={item?._id}
                    endPoint={'products'}
                    resourceName={'Product'}
                    list={listProducts}
                    setList={setListProducts}
                  />
                </p>
              </div>
            ))
          )}
          <StatusData list={listProducts} resourceName={'Products'} size={1630} />
        </>
      </div>
    </div>
  )
}

export default Products
