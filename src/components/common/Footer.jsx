import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_MEDIA_LIST } from '@/utils/helper'

function Footer() {
  return (
    <div className='-mt-0.5 bg-[url("/assets/images/footer-bg.webp")] max-sm:bg-[url("/assets/images/footer-bg-sm.webp")] bg-center bg-no-repeat bg-cover flex flex-col justify-center pt-[90px] pb-[55px]'>
        <Link className='w-fit mx-auto' href="/">
        <Image className='max-sm:max-w-[193px]' width={322} height={81} src="/assets/images/pumpions.webp" alt='footer image'/>
        </Link>
        <p className='max-w-[425px] max-sm:max-w-[198px] max-sm:text-[8px] mx-auto text-xs text-center text-white uppercase'>Suspendisse vestibulum a tellus sit amet mattis</p>
        <div className='flex gap-[11px] justify-center mt-6'>
            {FOOTER_MEDIA_LIST.map((item, index)=>(
                <Link target='_blank' className='hover:scale-110 duration-300 ease-in-out' key={index} href={item.link}>{item.item}</Link>
            ))}
        </div>
    </div>
  )
}

export default Footer