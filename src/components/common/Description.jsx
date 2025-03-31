import React from 'react'

function Description({CustomDescription, descriptionClass}) {
  return (
        <p className={`text-sm text-white leading-[229%] uppercase ${descriptionClass}`}>{CustomDescription}</p>
)
}

export default Description