import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_MEDIA_LIST } from '@/utils/helper'

function Footer() {
  return (
    <div className='-mt-0.5 bg-[url("/assets/images/footer-bg.webp")] max-sm:bg-[url("/assets/images/footer-bg-sm.webp")] bg-center bg-no-repeat bg-cover flex flex-col justify-center pt-[90px] pb-[55px]'>
        <Link className='w-fit mx-auto' href="/">
        <Image width={322} height={81} src="/assets/images/pumpions.webp" alt='footer image'/>
        </Link>
        <p className='max-w-[425px] mx-auto text-xs text-center text-white uppercase'>Suspendisse vestibulum a tellus sit amet mattis</p>
        <div className='flex gap-[11px] justify-center mt-6'>
            {FOOTER_MEDIA_LIST.map((item, index)=>(
                <Link key={index} href="/">{item}</Link>
            ))}
        </div>
    </div>
  )
}

export default Footer