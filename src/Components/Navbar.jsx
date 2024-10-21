import React  from 'react'
import Messages from './Messages'
import Notification from './Notification'
import Profile from './Profile'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import Orders from './Orders'
import { useStateContext } from '../contexts/ContextProvider'
import Inputs from './Forms/Inputs'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const { setActiveMenu ,  search,
        setSearch} = useStateContext()
  const pathName= useLocation().pathname.split('/')[1]

  return (
    <div
      className="flex justify-between  items-center  
      md:shadow-none shadow-lg z-50
    p-3 md:p-0 bg-white md:bg-transparent md:relative fixed top-0 right-0 left-0"
    >
      <div className="flex justify-between items-center  gap-12 ">
        <span className="text-[22px] text-emerald-600 cursor-pointer">
          <AiOutlineMenu onClick={() => setActiveMenu((prev) => !prev)} />
        </span>

        <div
          className="  gap-2 w-400 md:flex justify-center
         items-center hidden  rounded-lg "
        >
          <span className="text-[19px] cursor-pointer rounded-full bg-bg-basic p-2">
            <AiOutlineSearch />
          </span>
          <Inputs
            type="text"
            name="search"
            placeholder={`Search ${pathName}`}
            changeValue={(e) => setSearch(e.target.value)}
           />
        </div>
      </div>
      <div className="flex gap-8  items-center  ">
        <Orders />
        <Notification />
        <Messages />
        <Profile />
      </div>
    </div>
  )
}

export default Navbar
