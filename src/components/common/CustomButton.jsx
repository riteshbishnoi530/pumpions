import React from 'react'

function CustomButton({text, buttonClass}) {
  return (
    <button className={`hover:scale-110 duration-300 ease-in-out cursor-pointer bg-[url("/assets/images/button-bg.webp")] bg-center bg-no-repeat bg-[length:100%] px-[23px] py-4 max-sm:px-4 max-sm:text-xs flex mt-[61px] leading-[229%] mx-auto ${buttonClass}`}>{text}</button>
  )
}

export default CustomButton