import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import Description from './common/Description'

function Pumpmap() {
  return (
    <div className='-mt-0.5 bg-grey pt-[102px] pb-[183px] max-sm:pt-[50px] max-sm:pb-[66px] px-4'>
        <div className='max-w-[1140px] mx-auto flex gap-[57px] items-center max-lg:flex-col-reverse'>
            <Image className='max-w-[407px] w-full' src="/assets/images/pumpmap-image.webp" alt='pumpmap'width={407} height={374}/>
            <div className='max-lg:max-w-[699px] mx-auto'>
                <Heading headingClass="lg:text-left" headingText="PUMPMAP"/>
                <Description descriptionClass="mt-4 max-lg:text-center" CustomDescription="We want to avoid overpromising from the get go. For that, we are approaching roadmaps slightly differently. Pumpions will continue to evolve overtime as a brand and move closer to its biggest goal. To empower individuals with art."/>
                <Description descriptionClass="mt-4 max-lg:text-center" CustomDescription="By owning a Pumpion you will have access to a vibrant, positive, and rewarding community, meet like-minded and kind human beings, and most importantly, you will be supporting and celebrating the next generation of artists and animations studios."/>
            </div>
        </div>
    </div>
  )
}

export default Pumpmap