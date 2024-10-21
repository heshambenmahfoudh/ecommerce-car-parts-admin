import React from 'react'

const SelectInput = ({  name,options,changeValue ,option,data}) => {

  console.log('data' , data)
  console.log('options' , options?.[0]?._id)
  return (

        <select 
        name={name}
        onChange={changeValue}
        className="p-2 text-15 
        border-[2px] w-full rounded-md 
        focus:outline-none focus:border-blue-300 mt-1  capitalize 
        
        "
        >
          {!options?.[0]?.model && 
          <option className="p-8 mb-4 text-18 font-body cursor-pointer capitalize">
                  Select {option}
                </option>
          }
            {options.map((item) => (
              item?.model ? 
              <option 
                 className='p-2 cursor-pointer capitalize' > 
                   <span>model : {item?.model}</span> {''}{' '}
                        <span className="text-22 ">&rarr;</span>{' '}
                        <span>price : ${item?.price}</span> 
                       </option>:
                      <option 
                      className='p-2 cursor-pointer capitalize' 
                        value={item?._id}
                      key={item?._id}
                          selected={item?._id?.includes(data)}
                      >{item?.name }
                      </option>
            ))}
        </select>
  )
}

export default SelectInput