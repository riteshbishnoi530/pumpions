import React from 'react'

function Description({text, descriptionClass}) {
  return (
        <p className={`text-sm text-white leading-[229%] uppercase ${descriptionClass}`}>{text}</p>
)
}

export default Description