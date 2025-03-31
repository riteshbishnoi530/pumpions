import React from 'react'

function CustomButton({buttonText}) {
  return (
    <button className={`cursor-pointer bg-[url("/assets/images/button-bg.webp")] bg-center bg-no-repeat bg-cover px-[23px] py-4 flex mt-[61px] leading-[229%] mx-auto`}>{buttonText}</button>
  )
}

export default CustomButton