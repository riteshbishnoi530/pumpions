import React from 'react'
import Header from './common/Header'

function Hero() {
  return (
    <div className='px-4 bg-[url("/assets/images/hero-bg.webp")] bg-center bg-cover bg-no-repeat h-[100vh] pt-[30px]'>
        <div className='max-w-[1140px] mx-auto'>
        <Header/>
        </div>
    </div>
  )
}

export default Hero