import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Inputs from '../../Components/Forms/Inputs'
import Lables from '../../Components/Forms/Lables'
import TextAria from '../../Components/Forms/TextAria'
import FormHeader from '../../Components/Headers/FormHeader'
import useFetchData from '../../hooks/useFetchData'

const Message = () => {
  const [message, setMessage] = useState()

  const messageId = useParams().id
  const { data: admins } = useFetchData(`/contacts/find/${messageId}`)
  useEffect(() => {
    setMessage(admins)
  }, [admins])

  return (
   <div>
      <FormHeader  title='Message' url="../messages" />
      <form>
        <div className="p-10 smd:p-7 ssm:p-5 smss:p-3 mx-auto mt-4 rounded-md
       bg-white shadow-md border-1 max-w-4xl">
          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center ssm:flex-col gap-5 ssm:gap-1">
              <div className="w-full">
                <Lables text="First Name" />
                <Inputs
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                 value={message?.userId?.firstname}
                />
              </div>
              <div className="w-full">
                <Lables text="Last Name" />
                <Inputs
                  type="text"
                  placeholder="Last Name"
                  name="lastname"  
                  value={message?.userId?.lastname}
                />
              </div>
            </div>
            <div className="w-full">
                <Lables text="Email" />
                <Inputs
                  type="email"
                  placeholder="Email"
                  name="Email"  
                  value={message?.userId?.username}
                />
              </div>
               <div className="w-full">
                <Lables text="Subject" />
                <Inputs
                  type="email"
                  placeholder="Subject"
                  name="Email"  
              value={message?.subject}
                />
              </div>
              <div className="w-full">
              <Lables text="Message" />
              <TextAria
                name="Message"
                placeholder="Message"
                value={message?.message}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Message
