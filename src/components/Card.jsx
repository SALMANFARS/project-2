import React from "react";

export const Card = ({ img, text1,text2, text3,text4,}) => {
  // const {img, text1, text2} = props yak roh  disctruc
  return (
    <div>
        <div className="w-[200px] h-[350px] py-[50px] px-[15px] bg-white  rounded-lg ">
          <div className="img">
          <img src={img} alt="" className="mb-[10px] text-gray-500 m-auto" />
          </div>
           <h1 className="text-center">Our Product</h1>
           <p className="text-xs py-[10px] ">{text1}</p>
           
         
        </div>
      </div>
    
  );
};
