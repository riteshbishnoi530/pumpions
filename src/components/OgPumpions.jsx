import React from 'react'
import Heading from './common/Heading'
import { OGPUMPIONS_LIST } from '@/utils/helper'
import Image from 'next/image'
import { DiscordOrangeIcon, TwitterOrangeIcon } from '@/utils/icons'
import Link from 'next/link'
import CustomButton from './common/CustomButton'

function OgPumpions() {
    return (
        <div className='-mt-0.5 bg-grey px-4'>
            <div className='max-w-[1140px] mx-auto'>
                <Heading headingClass="mb-[79px]" headingText="OG PUMPIONS" />
                <div className='flex flex-wrap justify-center gap-x-[73px] gap-y-[45px]'>
                    {OGPUMPIONS_LIST.map((item, index) => (
                        <div key={index}>
                            <Image src={item.image} alt='image' width={226} height={208} />
                            <p className='leading-[202%] mt-[31px] text-white text-2xl text-center'>{item.title}</p>
                            <p className='leading-[202%] text-base text-white/70 text-center'>{item.work}</p>
                            <div className='flex justify-center gap-[11px] mt-4'>
                                <Link href="/">
                                <DiscordOrangeIcon/>
                                </Link>
                                <Link href="/">
                                <TwitterOrangeIcon/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <CustomButton buttonText="WE ARE HIRING"/>
            </div>
        </div>
    )
}

export default OgPumpions