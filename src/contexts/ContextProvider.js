import React, { useState, useEffect, createContext } from 'react'

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth < 1000 ? setActiveMenu(false) : setActiveMenu(true)
    })
    window.innerWidth < 2100 ? setActiveMenu(false) : setActiveMenu(true)
  }, [])
  const [order, setOrder] = useState(false)
  const [userProfile, setUserProfile] = useState(false)
  const [notification, setNotification] = useState(false)
  const [message, setMessage] = useState(false)
  const [category, setCategory] = useState(false)
  const [product, setProduct] = useState(false)
  const [openStatus, setOpenStatus] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        order,
        setOrder,
        userProfile,
        setUserProfile,
        notification,
        setNotification,
        message,
        setMessage,
        category,
        setCategory,
        product,
        setProduct,
        openStatus,
        setOpenStatus,
        search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)

export default ContextProvider
