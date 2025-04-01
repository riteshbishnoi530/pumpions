import React from 'react'

function Heading({text, headingClass}) {
  return (
    <h2 className={`text-4xl max-md:text-2xl leading-[204%] text-white text-center uppercase ${headingClass}`}>{text}</h2>
  )
}

export default Heading