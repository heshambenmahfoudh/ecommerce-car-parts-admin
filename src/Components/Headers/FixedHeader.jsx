import React from 'react'

import {BsPlus}  from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const FixedHeader = ({link,text , user}) => {
  
  return (
    <div className='flex  justify-between items-center  ssm:mt-16 smd:mb-[-12px]
     px-8 h-[68px] bg-white rounded-sm smss:h-[60px]  smd:px-4
    '>
        <h2 className='capitalize font-bold text-20'>{text}</h2>
      {!user && (

        <Link to={link} className="flex items-center 
        justify-center gap-2 bg-blue-500 px-2.5
        text-white py-1.5 rounded-md" >
                <BsPlus className='text-20'/>
                  New
          </Link>
                )}
    </div>
    
  )
}
