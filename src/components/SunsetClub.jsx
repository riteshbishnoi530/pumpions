"use client";
import React from 'react'
import Heading from './common/Heading'
import Image from 'next/image'
import { SUNSET_CLUB_LIST } from '@/utils/helper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function SunsetClub() {
    return (
        <div className='bg-grey pt-[70px]'>
            <p className='text-xl text-white leading-[204%] px-4 text-center pt-4 uppercase'>Community + Funding + Sunset</p>
            <Heading headingClass="max-xl:max-w-[700px] px-4 max-md:max-w-[500px] mx-auto !mt-[20px] max-sm:!mt-3" text="SUNSET CLUB MEMBERSHIP PERKS" />
            <div className='pt-[125px] max-xl:pt-6'>
                <div className='max-w-[1440px] flex gap-[29px] max-xl:flex-col mx-auto xl:pr-4'>
                    <Image className='pointer-events-none max-w-[892px] max-[1310px]:max-w-[850px] max-xl:mx-auto w-full' src="/assets/images/sunset-club.webp" alt='sunset' width={892} height={446} />
                    <div className='max-w-[370px] max-md:hidden max-xl:max-w-[567px] max-xl:mx-auto flex flex-wrap gap-[7px]'>
                        {SUNSET_CLUB_LIST.map((item, index) => (
                            <div key={index} className='group relative max-w-[181px] max-xl:max-w-[278px] max-xl:min-h-[307px] min-h-[200px] max-h-[200px] pt-[26px] max-xl:pt-7 px-[23px] max-xl:px-[35px]'>
                                <Image className='pointer-events-none absolute z-1 left-0 top-0 w-full h-full' src="/assets/images/sunset-club-card.webp" alt='bg' width={181} height={181} />
                                <Image className='pointer-events-none absolute z-0 group-hover:z-1 transition-all duration-500 ease-linear left-0 top-0 w-full h-full' src="/assets/images/orange-card.webp" alt='bg' width={181} height={181} />
                                <Image className={`pointer-events-none mx-auto w-full relative z-[2] ${index === 0 ? "max-w-[48px] max-xl:max-w-[74px] max-xl:min-h-[89px]" : index === 1 ? "max-w-[54px] max-xl:max-w-[74px]" : index === 2 ? "max-w-[35px] max-xl:max-w-[47px]" : "max-w-[50px] max-xl:max-w-[67px]"}`} src={item.image} alt='icon' width={48} height={49} />
                                <h2 className='uppercase group-hover:text-white text-black transition-all duration-300 ease-linear text-center relative z-[2] mt-[18px] max-xl:mt-5 text-xs max-xl:text-base leading-[204%]'>{item.title}</h2>
                                <p className='uppercase group-hover:text-white/70 text-black/70 transition-all duration-300 ease-linear text-center relative z-[2] mt-1 max-xl:mt-3 text-[6.53px] max-xl:text-[10px] leading-[204%]'>{item.description}</p>
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
                        {SUNSET_CLUB_LIST.map((item, index) => (
                            <SwiperSlide key={index} className="w-full mx-auto min-h-[307px] max-h-[307px] duration-300 ease-linear bg-cover bg-center !flex !flex-col !justify-center !items-center hover:text-white">  
                                <div className="w-full group px-9 mx-auto relative flex items-center justify-cente flex-col max-w-[278px] min-h-[307px] pt-[29px]">
                                <Image className='absolute z-1 left-0 top-0 w-full h-full' src="/assets/images/sunset-club-card.webp" alt='bg' width={278} height={307} />
                                <Image className='absolute z-0 group-hover:z-1 transition-all duration-500 ease-linear left-0 top-0 w-full h-full' src="/assets/images/orange-card.webp" alt='bg' width={181} height={181} />

                                <Image className={`mx-auto w-full relative z-[2] ${index === 0 ? "max-w-[48px] max-xl:max-w-[74px] max-xl:min-h-[89px]" : index === 1 ? "max-w-[54px] max-xl:max-w-[74px]" : index === 2 ? "max-w-[35px] max-xl:max-w-[47px]" : "max-w-[50px] max-xl:max-w-[67px]"}`} src={item.image} alt='icon' width={48} height={49} />
                                <h2 className='group-hover:text-white text-black transition-all duration-300 ease-linear text-center relative z-[2] mt-[18px] max-xl:mt-5 text-xs max-xl:text-base leading-[204%]'>{item.title}</h2>
                                <p className='group-hover:text-white/70 text-black/70 transition-all duration-300 ease-linear text-center relative z-[2] mt-1 max-xl:mt-3 text-[6.53px] max-xl:text-[10px] leading-[204%]'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SunsetClub