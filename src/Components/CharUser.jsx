import axios from 'axios';
import React, { PureComponent, useEffect, useMemo, useState } from 'react';
import { LineChart, Line,
         Tooltip, ResponsiveContainer, XAxis
 } from 'recharts';

const CharUser = () => {
  const [statusUser, setStatusUser] = useState([])
 
    const MONTH = useMemo(
      () =>[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
      ,[]
    )

    useEffect(() => {
     const dataUser = async () => {
      try {
        const res = await axios.get(`/users/status`)
        console.log("data")
        console.log(res.data.data)
        console.log("data")
        res.data.data.map((item) => 
          setStatusUser((prev)=> [...prev,{name:MONTH[item._id - 1],'New User':item.totalUser},])
          )
        } catch (err) {
      }
      }
    dataUser()
    }, [MONTH])
 
  return (
    
    <div className='lg:w-1/2 w-full rounded-xl  bg-white md:p-4 p-3 '>
      <h2 className='font-bold text-15 mb-4'>Customer Charts</h2>
       <div className="w-full h-[300px] ">
          <ResponsiveContainer width="100%" height="100%">
        <LineChart  data={statusUser}>
          <Tooltip
          contentStyle={{background:"transparent" ,border:'none' 
          ,color:"black"}}
          />
          <XAxis dataKey="name"  />
          <Line 
          type="monotone"  dataKey="New User"   stroke="rgba(0, 200, 150, 0.80)" strokeWidth={2}
         
           dot={false} />
        </LineChart>
      </ResponsiveContainer>
              </div>
    </div>
  )
}

export default CharUser