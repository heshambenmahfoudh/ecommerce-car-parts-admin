import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.js'
import { links } from '../data/dummy.js'
const Sidebar = () => {
  const { setActiveMenu } = useStateContext()
  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 bg-bg-basic pb-2.5 rounded-lg  text-black  text-md '
  const normalLink = `
  flex items-center gap-5 pl-4  pt-3 pb-2.5 rounded-lg text-md text-gray-900
   :hover:text-black hover:bg-gray-200 text-black dark:text-gray-200
 `

  return (
    <>
      <div
        className="side shadow-lg h-full overflow-scroll
       md:hover:overflow-auto bg-gray-50 pl-6 
       pr-3 py-5 fixed top-0 left-0  
    "
      >
        <div className="mb-4 w-auto flex items-center justify-between  ">
          <h2 className="bold    text-xl">Ecomerce Car Parts</h2>
          <span
            className="text-xl cursor-pointer lg:hidden block"
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            <MdOutlineCancel />
          </span>
        </div>
        {links?.map((item) => (
          <div key={item?.title}>
            <p className="text-gray-40 text-14 text-gray-400 mt-10 mb-3 uppercase">
              {item?.title}
            </p>
            {item?.links.map((item) => (
              <NavLink
                key={item?.name}
                to={`/${item?.name.toLocaleLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <span className="capitalize">{item?.icon}</span>
                {item?.name}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Sidebar
