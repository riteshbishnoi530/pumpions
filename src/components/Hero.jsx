import React from 'react'
import Header from './common/Header'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
function Hero() {
  return (
    <div className='px-4 overflow-hidden relative bg-[url("/assets/images/hero-bg.webp")] bg-bottom bg-cover bg-no-repeat pt-[30px] max-lg:pt-[20px] pb-[233px] max-lg:pb-[130px] max-md:pb-[100px] max-sm:pb-[62px]'>
        <div className='max-w-[1140px] mx-auto'>
        <Header/>
        <Image className='absolute left-[22px] max-lg:left-[-72px] max-sm:left-[-131px] top-35 max-sm:top-25' src="/assets/images/cloud.webp" alt='cloud' width={166} height={85}/>
        <Image className='absolute max-md:max-w-[108px] right-[34px] max-lg:right-2 max-sm:right-[-73px] top-35 max-sm:top-25' src="/assets/images/cloud.webp" alt='cloud' width={166} height={85}/>
        <Image className='relative z-1 max-w-[899px] w-full mx-auto mt-[71px] max-xl:max-w-[800px] max-lg:max-w-[612px] max-md:max-w-[282px]' src="/assets/images/pumpions.webp" alt='pumpions' width={899} height={225}/>
        <p className='text-black text-xl max-sm:text-sm max-sm:max-w-[255px] mx-auto leading-[229%] text-center sm:mt-[26px]'>Own, support & celebrate art.</p>
        <CustomButton buttonClass="!px-[39px] max-sm:!mt-[34px]" buttonText="GET STARTED"/>
        </div>
    </div>
  )
}

export default Hero