import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
function Hero() {
  return (
    <div className='px-4 bg-[url("/assets/images/hero-bg.webp")] bg-center bg-cover bg-no-repeat h-[100vh] pt-[30px]'>
        <div className='max-w-[1140px] mx-auto'>
        <Header/>
        <Image className='mx-auto mt-[71px] max-sm:max-w-[282px]' src="/assets/images/pumpions.webp" alt='pumpions' width={899} height={225}/>
        <p className='text-black text-xl max-sm:text-sm max-sm:max-w-[255px] mx-auto leading-[229%] text-center sm:mt-[26px]'>Own, support & celebrate art.</p>
        <CustomButton buttonClass="!px-[39px]" buttonText="GET STARTED"/>
        </div>
    </div>
  )
}

export default Hero