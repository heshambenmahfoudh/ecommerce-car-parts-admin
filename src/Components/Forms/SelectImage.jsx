import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import avatar from '../../data/images/avatar.jpg'

const SelectImage = ({chaneValue , img}) => {
  return (
      <div
          className="grid grid-cols-4 smd:grid-cols-2 smss:grid-cols-1 gap-2 mb-3
        "
        >
          {img && (
            <img
              className="rounded-xl h-[120px] w-full   border-1 border-blue-300 "
              src={
               
               
                 img?.[0]
                    ? process.env.REACT_APP_PUBLIC_FOLDER + img
                    : avatar
              }
              alt=""
            />
          )}
          <label
            className="h-[120px] bg-blue-200 rounded-xl
            flex justify-center items-center gap-2 cursor-pointer"
          >
            <input type="file" onChange={chaneValue} className="hidden" />
            <AiOutlineCloudUpload lassName="text-25" />
            <h2 className="text-19">Upload</h2>
          </label>
        </div>
  )
}

export default SelectImage