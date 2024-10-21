import React from 'react'
import LastOrdCus from '../Components/LastOrdCus'
import LastUserJoin from '../Components/LastUserJoin'
import Statics from '../Components/Statics'

export const Home = () => {
  return (
    <div className="md:px-5 md:mt-8 mt-20 ">
      <Statics />
      <div
        className=" flex flex-col gap-3 w-full "
      >
        <LastUserJoin />
        <LastOrdCus />
      </div>
    </div>
  )
}

export default Home
