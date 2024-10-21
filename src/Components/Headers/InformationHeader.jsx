import React from 'react'

const InformationHeader = ({data,fixedSize}) => {
  return (
   <div className={`  p-2  rounded-t-lg    flex ${fixedSize} bg-blue-200
     justify-between items-center gap-1   font-bold text-center `}>
     { data?.map(({ text, size }) => (
         <h2 key={ text } className={` text-center text-14    sms:text-13 font-bold uppercase ${size}`}>
            {text}
          </h2>
))}
        </div>
  )
}

export default InformationHeader