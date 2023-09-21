import React from 'react'

const Block = ({ img, text1,text2}) => {
  return (
    <div>
       <div className="w-[200px] h-[350px] py-[50px] px-[15px] bg-white  rounded-lg ">
          <div className="img">
          <img src={img} alt=""  />
          </div>
           <h1 className="text-center">{text1}</h1>
           <p className="text-xs py-[10px] ">{text2}</p>
           
         
        </div>
    </div>
  )
}

export default Block