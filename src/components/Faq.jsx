"use client";
import React, { useState } from 'react'
import { FAQS_LIST } from '@/utils/helper';
import Heading from './common/Heading';
import Image from 'next/image';
import { AddIcon, SubIcon } from '@/utils/icons';

const Faq = () => {
    const [active, setActive] = useState();
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div id='faq' className='-mt-0.5 bg-grey pt-[105px] pb-[170px] bg-[url("/assets/images/faq-bg-layer.webp")] bg-no-repeat bg-cover bg-top'>
                <Heading headingClass="mb-[15px]" headingText="Faq"/>
            <div>
                <div className='px-4'>
                    <div className="max-w-[735px] gap-6 flex flex-col mx-auto">
                        {FAQS_LIST.map((item, index) => (
                            <div className={`relative pl-10 pr-[30px] max-sm:px-4 py-[15px] transition-all duration-300 ease-linear ${active === index ? "!py-8" : ""}`}  key={index}>
                                <Image className='absolute left-0 top-0 max-w-[735px] w-full h-full' src="/assets/images/faq-bg.webp" alt='faq bg' width={735} height={71}/>
                                <button onClick={() => toggle(index)} className='relative uppercase z-[1] leading-[202%] cursor-pointer flex w-full text-black justify-between max-sm:gap-1 bg-transparent text-left text-base max-sm:text-[9px]' >
                                    {item}{" "}
                                    <span className='bg-gradient-to-t to-dark-orange from-orange size-[41px] min-w-[41px] max-sm:size-[19px] max-sm:min-w-[19px] flex justify-center items-center rounded-full'>
                                        {active === index ? <span className='sub-icon'><SubIcon/></span> : <span className='add-icon'><AddIcon/></span>}
                                    </span>
                                </button>
                                <p className={`relative z-[1] text-sm leading-[202%] text-black overflow-hidden max-[992px]:overflow-y-auto transition-all max-sm:text-[8px] duration-500 max-w-[992px] ${active === index ? "max-h-32 max-sm:max-h-52 pt-4" : "max-h-0"}`} >
                                We want to avoid overpromising from the get go. For that, we are approaching roadmaps slightly differently. Pumpions will continue to evolve overtime as a brand and move closer to its biggest goal. To empower individuals with art.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq