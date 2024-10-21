import React from 'react'

const TextAria = ({ changeValue,name,placeholder  ,value}) => {
  return (
    <textarea 
    type='text'
         name={name} 
         placeholder={placeholder}
         value={value}
         className="p-2 text-15 
              border-[2px] w-full rounded-md 
              focus:outline-none focus:border-blue-300 mt-1 min-h-[110px] "
         onChange={changeValue}
    />
  )
}

export default TextAria