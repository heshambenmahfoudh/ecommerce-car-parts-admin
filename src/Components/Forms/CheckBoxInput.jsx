import React from 'react'

const CheckBoxInput = ({checked ,changeAdmin ,name}) => {
  return (
      <input
         type="checkbox"
         className="border-2 mt-1 w-fit"
         name={name}
         onChange={changeAdmin}
         checked={checked}
      />
  )
}

export default CheckBoxInput