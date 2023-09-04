import React from 'react'

const Heading = ({title,info}) => {
  return (
    <div className="flex  flex-col items-end">
    <div className="p-0 text-right">
      <p className="text-2xl mt-3 font-bold">{title}</p>
      <p className="font-text text-sm">
        {info}
       
      </p>
    </div>
  </div>
  )
}

export default Heading