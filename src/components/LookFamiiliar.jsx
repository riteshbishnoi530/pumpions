import React from 'react'
import Heading from './common/Heading'
import Marquee from 'react-fast-marquee'
import { FAMILIAR_FIRST_LIST } from '@/utils/helper'
import Image from 'next/image'

function LookFamiiliar() {
  return (
    <div>
        <p className='text-white text-xl text-center'>PEAK AT THE SUNSET</p>
        <Heading headingText="THEY SURE LOOK FAMILIAR "/>
        <div>
            <Marquee speed={50}>
                <div className='flex gap-[26px]'>
                {FAMILIAR_FIRST_LIST.map((item, index) => (
                    <Image key={index} src={item} alt='image' width={175} height={193}/>
                ))}
                </div>
            </Marquee>
        </div>
    </div>
  )
}

export default LookFamiiliar