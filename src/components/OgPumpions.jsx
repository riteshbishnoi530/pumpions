"use client";
import React from 'react'
import Heading from './common/Heading'
import { OGPUMPIONS_LIST } from '@/utils/helper'
import Image from 'next/image'
import { DiscordOrangeIcon, TwitterOrangeIcon } from '@/utils/icons'
import Link from 'next/link'
import CustomButton from './common/CustomButton'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function OgPumpions() {
    return (
        <div id='team' className='-mt-0.5 bg-grey'>
            <div className='max-w-[1140px] mx-auto'>
                <Heading headingClass="mb-[79px] max-sm:mb-[75px]" headingText="OG PUMPIONS" />
                <div className='flex max-md:hidden flex-wrap justify-center gap-x-[73px] gap-y-[45px]'>
                    {OGPUMPIONS_LIST.map((item, index) => (
                        <div key={index}>
                            <Image src={item.image} alt='image' width={226} height={208} />
                            <p className='leading-[202%] mt-[31px] text-white text-2xl text-center'>{item.title}</p>
                            <p className='leading-[202%] text-base text-white/70 text-center'>{item.work}</p>
                            <div className='flex justify-center gap-[11px] mt-4'>
                                <Link href="https://discord.gg">
                                <DiscordOrangeIcon/>
                                </Link>
                                <Link href="https://twitter.com">
                                <TwitterOrangeIcon/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='overflow-hidden'>
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={1.5}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper md:!hidden !pb-9"
                    >
                        {OGPUMPIONS_LIST.map((item, index) => (
                            <SwiperSlide key={index} className="w-full mx-auto duration-300 ease-linear bg-cover bg-center !flex !flex-col !justify-center !items-center hover:text-white">  
                                <div className="w-full group mx-auto flex items-center justify-cente flex-col max-w-[278px]">
                                <Image src={item.image} alt='image' width={226} height={208} />
                            <p className='leading-[202%] mt-[31px] text-white text-2xl text-center'>{item.title}</p>
                            <p className='leading-[202%] text-base text-white/70 text-center'>{item.work}</p>
                            <div className='flex justify-center gap-[11px] mt-4'>
                                <Link href="https://discord.com/">
                                <DiscordOrangeIcon/>
                                </Link>
                                <Link href="https://x.com/?lang=en">
                                <TwitterOrangeIcon/>
                                </Link>
                            </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                <CustomButton buttonClass="max-lg:!mt-[51px] max-md:!mt-7" buttonText="WE ARE HIRING"/>
            </div>
        </div>
    )
}

export default OgPumpions