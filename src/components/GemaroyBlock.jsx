import React from 'react'

const GemaroyBlock = ({img, text1,text2}) => {
  return (
    <div>
      <div className="w-[200px] h-[350px] py-[50px] px-[15px] bg-white  rounded-lg">
          <div className="img">
          <img src={img} alt="" className="mb-[10px] text-gray-500 m-auto" />
          </div>
           <h1 className="text-center font-bold text-xs">{text1}</h1>
           <p className="text-xs py-[10px] text-center">{text2}</p>
           
         
        </div>
    </div>
  )
}

export default GemaroyBlock