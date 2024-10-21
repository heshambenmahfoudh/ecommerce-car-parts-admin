import React, { useEffect, useState } from 'react'
import {  AiOutlineEdit } from 'react-icons/ai'
import useFetchData from '../hooks/useFetchData'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'
import InformationHeader from '../Components/Headers/InformationHeader'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import { brandsHeader } from '../data/dummy'
import StatusData from '../Components/StatusData'
import DeleteItem from '../Components/DeleteItem'
import Image from '../Components/Image'

const Brands = () => {
  const [listBrands, setListBrands] = useState()
  const { data: brands, loading } = useFetchData(`/brands`)
  useEffect(() => {
    setListBrands(brands)
  }, [brands])

  return (
    <div>
      <FixedHeader link="/brands/new" text="Brands" />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm
      "
      >
        <InformationHeader data={brandsHeader} fixedSize="min-w-[800px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listBrands?.map((item, i) => (
              <div
                className=" p-2 min-w-[800px] border-b-[1px] border-gray-200
            gap-1 bg-white hover:bg-blue-50
             flex justify-between items-center"
                key={i}
              >
                <p className="w-[50px] text-center text-15 sms:text-14 font-medium capitalize ">
                  {i + 1}
                </p>
                 <Image img={item?.img} size={'200'} />
                <p
                  className="text-center  text-15 sms:text-14 flex-1 ssm:min-w-[200px]
              font-medium capitalize
              "
                >
                  {item?.name}
                </p>

                <p className="text-center text-13 font-medium capitalize min-w-[100px]">
                  {format(item?.createdAt)}
                </p>
                <p className="text-center text-13 font-medium capitalize min-w-[100px]">
                  {format(item?.updatedAt)}
                </p>
                <p className=" min-w-[70px] flex justify-center items-center gap-4 ">
                  <Link to={`../brand/find/update/${item?._id}`}>
                    <AiOutlineEdit className="cursor-pointer text-green-400" />
                  </Link>
                  <DeleteItem
                    id={item?._id}
                    endPoint={'brands'}
                    resourceName={'Brand'}
                    list={listBrands}
                    setList={setListBrands}
                  />
                </p>
              </div>
            ))
          )}
          <StatusData list={listBrands} resourceName={'Brands'} size={800} />
        </>
      </div>
    </div>
  )
}
export default Brands
