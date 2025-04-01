import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import Description from './common/Description'

function MeetPumpions() {
  return (
    <div id='about' className='px-4 pt-[150px] max-lg:pt-[100px] max-md:pt-10 max-sm:pt-0 pb-[70px] max-sm:pb-[42px]'>
      <div className='max-w-[1140px] mx-auto relative py-11'>
        <Image src="/assets/images/meet-pumpions-bg.webp" alt='meet pumpions' width={1920} height={1080} className='w-full h-full absolute left-0 top-0'/>
        <div className='relative z-1 px-12 max-sm:px-[18px]'>
        <Heading headingClass="max-md:px-4" headingText="MEET THE PUMPIONS"/>
        <Description descriptionClass="mt-[10px] text-center" CustomDescription="They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world."/>
        </div>
        </div>
    </div>
  )
}

export default MeetPumpions