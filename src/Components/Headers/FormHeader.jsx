import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const FormHeader = ({url,title , user}) => {
  return (
     <div
        className="flex justify-between items-center 
        bg-white h-[68px] px-6
      "
      >
        <h2 className="capitalize text-20 font-semibold text-black ">
          {title} 
        </h2>
        {!user && (

          <Link
          to={url}
          className="text-20 p-3 bg-blue-300 rounded-full"
          >
          <AiOutlineCloseCircle />
        </Link>
          )}
      </div>
  )
}

export default FormHeader