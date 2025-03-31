"use client";
import { HEADER_LIST } from '@/utils/helper';
import { DiscordIcon, Me, TwitterIcon } from '@/utils/icons';
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
        <div className='bg-[url("/assets/images/header-bg.webp")] bg-center bg-[length:100%] bg-no-repeat'>
            <div className='flex justify-between items-center px-16 py-[30px]'>
                <Link href="/"> <Image className='max-md:max-w-[27px]' src="/assets/images/logo.webp" alt="logo" width={41} height={47} /></Link>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-sky-950 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full duration-500 ease-linear blur-[80%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <ul key={i}>
                            <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                <a onClick={toggleSidebar} href={obj.link} className=' text-base font-normal text-black'>{obj.item}</a>
                            </li>
                        </ul>
                    ))}
                    <div className='md:hidden flex gap-2'>
                        <Link href="/"><DiscordIcon /> </Link>
                        <Link href="/"><TwitterIcon /> </Link>
                        <Link href="/"><Me /> </Link>
                    </div>
                </div>
                <div className='max-md:hidden max-lg:ml-auto flex gap-2'>
                    <Link href="/"><DiscordIcon /> </Link>
                    <Link href="/"><TwitterIcon /> </Link>
                    <Link href="/"><Me /> </Link>
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-[7px] max-md:gap-[6px] ml-9 lg:hidden flex'>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black duration-300 ease-linear'}`}></span>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black  opacity-0 duration-300 ease-linear' : 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black duration-700 ease-linear'}`}></span>
                    <span className={`${open ? 'w-[42px] max-md:w-[30px] h-[5px] max-md:h-[3px] bg-black -rotate-45 -translate-y-3 max-md:-translate-y-[6px] duration-300 ease-linear rounded' : 'w-[21px] max-md:w-[15px] ml-auto h-[5px] max-md:h-[3px] bg-black duration-300 ease-linear'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header