import React from 'react'

const Inputs = ({type , name,placeholder,value,changeValue , min}) => {
  return (
        <input 
         type={type}
         name={name} 
         placeholder={placeholder}
         value={value}
         min={min}
         required
         className="p-2 text-15 border-[2px] 
              rounded-md focus:outline-none
              focus:border-blue-300 w-full mt-1 placeholder:text-gray-500  "
         onChange={changeValue}
        />
  )
}

export default Inputs