import React from 'react'

function Heading({headingText, headingClass}) {
  return (
    <h2 className={`text-4xl max-md:text-2xl leading-[204%] text-white text-center uppercase ${headingClass}`}>{headingText}</h2>
  )
}

export default Heading