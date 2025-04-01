"use client";
import { HEADER_LIST } from '@/utils/helper';
import { DiscordIcon, FooterDIscordIcon, FooterMagicedeneIcon, FooterMagicedenIcon, FooterTwitterIcon, Magiceden, TwitterIcon } from '@/utils/icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (  
            <div className='relative flex justify-between items-center px-16 max-md:px-8 max-sm:px-6 py-[15px] max-sm:py-[7px]'>
            <Image className='pointer-events-none absolute left-0 max-w-[1140px] w-full h-full' src="/assets/images/header-bg.webp" alt='header' width={1140} height={76}/>
            <div className='flex items-center gap-[18px]'>
                <Link className='relative z-1' href="/"> <Image className='pointer-events-none max-md:max-w-[27px]' src="/assets/images/logo.webp" alt="logo" width={41} height={47} /></Link>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-orange max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full duration-500 ease-linear blur-[80%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                <Link onClick={toggleSidebar} href={obj.link} className=' text-base uppercase font-normal relative text-black max-lg:text-white after:absolute after:content-" " after:h-[5px] after:-bottom-0.5 after:left-0 after:bg-yellow after:w-0 hover:after:w-full after:duration-300 after:ease-linear'>{obj.item}</Link>
                            </li>
                        </ul>
                    ))}
                    <div className='md:hidden flex gap-2'>
                        <Link target='_blank' className='hover:scale-110 duration-300 ease-in-out' href="https://discord.com/"><FooterDIscordIcon /> </Link>
                        <Link target='_blank' className='hover:scale-110 duration-300 ease-in-out' href="https://twitter.com/"><FooterTwitterIcon /> </Link>
                        <Link target='_blank' className='hover:scale-110 duration-300 ease-in-out' href="https://magiceden.io/"><FooterMagicedeneIcon /> </Link>
                    </div>
                </div>
                </div>
                <div className='max-md:hidden relative z-1 max-lg:ml-auto flex gap-2'>
                    <Link target='_blank' className='hover:scale-110 transition-all duration-300 ease-in-out' href="https://discord.com/"><DiscordIcon /> </Link>
                    <Link target='_blank' className='hover:scale-110 transition-all duration-300 ease-in-out' href="https://twitter.com/"><TwitterIcon /> </Link>
                    <Link target='_blank' className='hover:scale-110 transition-all duration-300 ease-in-out' href="https://magiceden.io/"><Magiceden/> </Link>
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-[7px] max-md:gap-[6px] ml-9 lg:hidden flex'>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black duration-300 ease-linear'}`}></span>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-white  opacity-0 duration-300 ease-linear' : 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black duration-700 ease-linear'}`}></span>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-white -rotate-45 -translate-y-3 max-md:-translate-y-[6px] duration-300 ease-linear rounded' : 'w-[21px] max-md:w-[15px] ml-auto h-[5px] max-md:h-[3px] bg-black duration-300 ease-linear'}`}></span>
                </div>
            </div>
    )
}

export default Header