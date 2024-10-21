import React from 'react'
import {BsSearch}  from 'react-icons/bs'
import Inputs from './Inputs'
import SearchInput from './SearchInput'
const Header = () => {
  return (
    <div className='p-2.5 bg-blue-400 min-w-full'>
      <div className='w-fit px-2 py-1.5  gap-2 rounded-xl
       bg-white flex items-center'>
        <span className='text-gray-500'> <BsSearch/></span>
     
        <SearchInput name=''   placeholder='Search' />
      </div>
    </div>
  )
}

export default Header