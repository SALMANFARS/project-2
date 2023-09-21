import React from 'react'

export const Block2 = ({img, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11}) => {
    // const {img, text1, text2} = props yak roh  disctruc
  return (
    <div>
      <div>
        <div className="bloki  max-w-[254px] h-[187px] py-[35px] px-[48px]  ">
          <img src={img} alt="" className="mb-[10px]"/>
          <p>{text1}</p>
          
        </div>
      </div>
    </div>
  );
};
