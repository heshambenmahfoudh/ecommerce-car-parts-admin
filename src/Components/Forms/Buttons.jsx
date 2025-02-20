import React from 'react'

const Buttons = ({ text ,onClick ,loading ,title ,err}) => {
 
  return (
    <button 
    onClick={onClick}  
    className={` 
    text-14 text-white
    py-2.5 px-3 rounded-md
                 bg-blue-500
                 ${loading  ?' mt-2' :' mt-5' }
                  `} >
                    {` 
                     ${loading ?`  ${ text === 'Update' ? 
                     text.slice(0,6)+'d':text.slice(0,5)+'ing'} ${title} Please White...`
              : `${text} ${title}`}
              `}
    </button>
  )
}

export default Buttons