import React from 'react'

const Image = ({img,size ,img2}) => {
  return (
    <p className={`min-w-[${size}px] flex  justify-center items-center`}>
      <img
          src={img?.[0] ? process.env.REACT_APP_PUBLIC_FOLDER + img :img2 }
          className="rounded-lg  w-[98px] h-[50px] "
          alt=""
          />
     </p>
  )
}

export default Image