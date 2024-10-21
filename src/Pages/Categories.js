import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai'
import useFetchData from '../hooks/useFetchData'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'
import InformationHeader from '../Components/Headers/InformationHeader'
import { FixedHeader } from '../Components/Headers/FixedHeader'
import { categoriesHeader } from '../data/dummy'
import DeleteItem from '../Components/DeleteItem'
import StatusData from '../Components/StatusData'

const Categories = () => {
  const [listCategories, setListCategories] = useState()
  const { data: categories, loading } = useFetchData(`/categories`)
  useEffect(() => {
    setListCategories(categories)
  }, [categories])

  return (
    <div>
      <FixedHeader link="/categories/new" text="Categories" />
      <div
        className="overflow-x-auto mt-8
      rounded-lg shadow-sm
      "
      >
        <InformationHeader data={categoriesHeader} fixedSize="min-w-[800px]" />
        <>
          {loading ? (
            <Loading />
          ) : (
            listCategories?.map((item, i) => (
              <div
                className=" p-2 min-w-[800px] border-b-[1px] border-gray-200
            gap-1 bg-white hover:bg-blue-50
             flex justify-between items-center"
                key={i}
              >
                <p className="w-[50px] text-center text-15 sms:text-14 font-medium capitalize ">
                  {i + 1}
                </p>
                <p
                  className="text-center  text-15 sms:text-14 flex-1 ssm:min-w-[200px]
              font-medium capitalize
              "
                >
                  {item?.name}
                </p>
                <p
                  className="text-center  text-15 sms:text-14 flex-1 ssm:min-w-[200px]
              font-medium capitalize"
                >
                  {item?.brand?.name}
                </p>

                <p className="text-center text-13 font-medium capitalize min-w-[100px]">
                  {format(item?.createdAt)}
                </p>
                <p className="text-center text-13 font-medium capitalize min-w-[100px]">
                  {format(item?.updatedAt)}
                </p>
                <p className=" min-w-[70px] flex justify-center items-center gap-4 ">
                  <Link to={`../category/find/update/${item?._id}`}>
                    <AiOutlineEdit className="cursor-pointer text-green-400" />
                  </Link>
                  <DeleteItem
                    id={item?._id}
                    endPoint={'categories'}
                    resourceName={'Category'}
                    list={listCategories}
                    setList={setListCategories}
                  />
                </p>
              </div>
            ))
          )}
          <StatusData list={listCategories} resourceName={'Categories'} size={800}/>
        </>
      </div>
    </div>
  )
}
export default Categories
