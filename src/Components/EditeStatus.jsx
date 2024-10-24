import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import { statusOptions } from '../data/dummy'
import useFetchData from '../hooks/useFetchData'
import { ApiPutRequest } from '../Lib/apiRequest'
import Buttons from './Forms/Buttons'
import Lables from './Forms/Lables'
import SelectInput from './Forms/SelectInput'

const EditeStatus = ({id}) => {

    const [status, setStatus] = useState()
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
   const [rederect, setRederect] = useState('')
  const { setOpenStatus} = useStateContext()
  const { data: order } = useFetchData(`/orders/find/${id}`)

useEffect(() => {
  setStatus(order?.status)
}, [id , order])

const updateOrder = async (e) => {
    e.preventDefault()
    ApiPutRequest(
          `/orders/${id}`,
          e,
          {status},
          setLoading,
          setRederect,
          setErr,
          '/orders',
          'Order',
        )
      
}

  return (
     <div className='fixed inset-0 bg-black/70 z-50 h-screen'>
        <div className='flex justify-center items-center h-screen'>
        <div className='  bg-[#c5cfd1] p-4 w-2/5 m-auto rounded-xl
         overflow-scroll
          slg:w-3/5plo
          ssm:w-4/5
        '>
          <span 
          className='cursor-pointer text-18 flex justify-end mb-3'
           onClick={()=>setOpenStatus((prev) => !prev)}><AiFillCloseCircle/></span>
      <form >
        <div className="flex flex-col  gap-2 mb-2">
          <Lables text="Order Status" />
              <SelectInput
                name="status"
                options={statusOptions}
                changeValue={(e) => setStatus(e.target.value)}
                option="State"
                data={id && status}
              />
        </div>
      <Buttons
          text={'Update' }
          onClick={updateOrder}
          loading={loading}
          title="Order"
          err={err}
        />
      </form>
    </div>
    </div>
    </div>
  )
}

export default EditeStatus