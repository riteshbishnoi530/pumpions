import React from 'react'
import Heading from './common/Heading'
import Marquee from 'react-fast-marquee'
import { FAMILIAR_FIRST_LIST, FAMILIAR_SECOND_LIST } from '@/utils/helper'
import Image from 'next/image'

function LookFamiiliar() {
  return (
    <div className='relative bg-[url("/assets/images/familier-bg.webp")] bg-no-repeat bg-cover bg-center pt-[212px] pb-[150px]'>
      <p className='text-white text-xl text-center'>PEAK AT THE SUNSET</p>
      <Heading headingClass="max-md:max-w-[500px] mx-auto" headingText="THEY SURE LOOK FAMILIAR " />
      <div className='flex flex-col gap-[30px] max-sm:gap-[18px] mt-[102px]'>
        <Marquee speed={50}>
          <div className='flex gap-[26px]'>
            {FAMILIAR_FIRST_LIST.map((item, index) => (
              <Image key={index} src={item} alt='image' width={175} height={193} className='max-sm:max-w-[107px]' />
            ))}
          </div>
        </Marquee>
        <Marquee speed={50} direction='right'>
          <div className='flex gap-[26px] max-sm:gap-4'>
            {FAMILIAR_SECOND_LIST.map((item, index) => (
              <Image key={index} src={item} alt='image' width={175} height={193} className='max-sm:max-w-[107px]' />
            ))}
          </div>
        </Marquee>
      </div>
      <Image src="/assets/images/club-top-layer.webp" alt='image' width={1440} height={147} className='absolute -bottom-18 max-lg:-bottom-13 max-md:-bottom-9 max-sm:-bottom-6 w-full' />
    </div>
  )
}

export default LookFamiiliar