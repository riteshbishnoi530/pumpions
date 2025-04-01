import React from 'react'

function CustomButton({buttonText, buttonClass}) {
  return (
    <button className={`cursor-pointer bg-[url("/assets/images/button-bg.webp")] bg-center bg-no-repeat bg-[length:100%] px-[23px] py-4 max-sm:px-4 max-sm:text-xs flex mt-[61px] leading-[229%] mx-auto ${buttonClass}`}>{buttonText}</button>
  )
}

export default CustomButton