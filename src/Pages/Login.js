import React, { useState } from 'react'
import Buttons from '../Components/Forms/Buttons'
import Inputs from '../Components/Forms/Inputs'
import Lables from '../Components/Forms/Lables'
import { useStateContextAuth } from '../contexts/AuthContext'
import { ApiLoginAdmin } from '../Lib/apiRequest'
const Login = ({ setConvert }) => {
  const [informations, setInformations] = useState()
  const { loading, err, dispatch } = useStateContextAuth()

  const changeData = (e) => {
    setInformations({ ...informations, [e.target.name]: e.target.value })
  }
  const login = (e) => {
    ApiLoginAdmin(e, dispatch, informations)
  }

  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="bg-slate-300  p-5 ssm:w-full smd:w-4/5 w-2/5  rounded-2xl  ">
        <h2 className="text-center mb-8 mt-2 text-19 font-bold">Log In</h2>
        <form>
          <div className="flex items-center flex-col gap-1 mb-2 ">
            <div className="w-full">
              <Lables text="User Username" />
              <Inputs
                type="text"
                placeholder="You@gmail.com"
                name="username"
                changeValue={changeData}
              />
            </div>
            <div className="w-full">
              <Lables text="Ueer Password" />
              <Inputs
                type="password"
                placeholder="User Password"
                name="password"
                changeValue={changeData}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <small
              className="text-13 cursor-pointer"
              onClick={() => setConvert((prev) => !prev)}
            >
              Don't hane an account Sign Up
            </small>
          </div>
          <Buttons
            text={'Login'}
            onClick={login}
            loading={loading}
            title="User"
            err={err}
          />
        </form>
      </div>
    </div>
  )
}

export default Login
