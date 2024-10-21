import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Orders from './Pages/Orders'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import Category from './Pages/update/Category'
import NewCategory from './Pages/new/NewCategory'
import NewProduct from './Pages/new/NewProduct'
import { useStateContext } from './contexts/ContextProvider'
import Product from './Pages/update/Product'
import { useStateContextAuth } from './contexts/AuthContext'
import NewSetting from './Pages/new/NewSetting'
import Login from './Pages/Login'
import Admin from './Pages/update/Admin'
import NewAdmin from './Pages/new/NewAdmin'
import Admins from './Pages/Admins'
import Messages from './Pages/Messages'
import Message from './Pages/update/Message'
import Brands from './Pages/Brands'
import NewBrand from './Pages/new/NewBrand'
import Brand from './Pages/update/Brand'
import Profile from './Pages/update/Profile'

function App() {
  const { activeMenu } = useStateContext()
  const { admin } = useStateContextAuth()

  return (
    <div className="App ">
      <div className="flex  ">
        {admin && activeMenu && (
          <div className=" side bg-bg-body">
            <Sidebar />
          </div>
        )}
        <div
          className={
            admin && activeMenu === true
              ? 'content  p-3 md:px-5 md:py-4 '
              : ' w-full p-3 md:px-5 md:py-4 '
          }
        >
          <div className=" mb-7 ">{admin && <Navbar />}</div>
          <div>
            <Routes>
              <Route
                path="/home"
                element={admin ? <Home /> : <Navigate to="../login" />}
              />
              <Route
                path="*"
                element={admin ? <Home /> : <Navigate to="../login" />}
              />
              <Route
                path="/orders"
                element={admin ? <Orders /> : <Navigate to="../login" />}
              />
              <Route
                path="/categories"
                element={admin ? <Categories /> : <Navigate to="../login" />}
              />
              <Route
                path="/brands"
                element={admin ? <Brands /> : <Navigate to="../login" />}
              />
              <Route
                path="/products"
                element={admin ? <Products /> : <Navigate to="../login" />}
              />
              <Route
                path="/messages"
                element={admin ? <Messages /> : <Navigate to="../login" />}
              />
              <Route
                path="/users"
                element={admin ? <Users /> : <Navigate to="../login" />}
              />
              <Route
                path="/admins"
                element={admin ? <Admins /> : <Navigate to="../login" />}
              />
              <Route
                path="/settings"
                element={admin ? <NewSetting /> : <Navigate to="../login" />}
              />

              {/* ////////////////////////////// */}

              <Route
                path="/admin/new"
                element={admin ? <NewAdmin /> : <Navigate to="../login" />}
              />
              <Route
                path="/products/new"
                element={admin ? <NewProduct /> : <Navigate to="../login" />}
              />
              <Route
                path="/brands/new"
                element={admin ? <NewBrand /> : <Navigate to="../login" />}
              />
              <Route
                path="/categories/new"
                element={admin ? <NewCategory /> : <Navigate to="../login" />}
              />

              {/* ////////////////////////////// */}

              <Route
                path="/admin/find/update/:id"
                element={admin ? <Admin /> : <Navigate to="../login" />}
              />

              <Route
                path="/products/find/update/:id"
                element={admin ? <Product /> : <Navigate to="../login" />}
              />
              <Route
                path="/brand/find/update/:id"
                element={admin ? <Brand /> : <Navigate to="../login" />}
              />
              <Route
                path="/category/find/update/:id"
                element={admin ? <Category /> : <Navigate to="../login" />}
              />

              <Route
                path="/message/:id"
                element={admin ? <Message /> : <Navigate to="../login" />}
              />
              <Route
                path="/profile"
                element={admin ? <Profile /> : <Navigate to="../login" />}
              />
              <Route
                path="/login"
                element={!admin ? <Login /> : <Navigate to="../home" />}
              />
            </Routes>
          </div>
          {admin && <Footer />}
        </div>
      </div>
    </div>
  )
}

export default App
