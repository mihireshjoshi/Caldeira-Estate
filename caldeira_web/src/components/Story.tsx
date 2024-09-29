"use client";


import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Story() {

    const [header, setHeader] = useState<string>('The Story');
    const [subHeader, setSubHeader] = useState<string>('When, why and how...');
    const [content, setContent] = useState<string>('With ties to both Livermore Valley and the San Francisco Bay Area, Caldeira Estate exemplifies artisanal excellence and environmental stewardship. Our story is rooted in a passion for nature with a blend of heritage and modern luxury. Join us and explore the inspiring journey that defines our exceptional vineyard and olive grove.');


    return (
        <section className='story flex flex-row bg-[#FBFBF7] my-10' style={{backgroundImage: "url('/images/Story_bg.png')"}}>
            <div className='lg:ml-12 mx-auto'>
                <Image 
                    height={565}
                    width={460}
                    alt='img'
                    src={'/images/story_a.png'}
                />
            </div>
            <div className='w-1/2 mx-auto flex flex-col my-4 gap-10'>
                <div className='h-1/4 flex flex-row justify-between items-end lg:mt-0 mt-4'>
                    <hr className="lg:border-t-2 border-t-1 border-[#262717] w-1/6 "/>
                    <p className='lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-[#262717]' style={{ fontFamily: "'Boska', serif" }}>{header}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl font-light' style={{ fontFamily: "'Manrope', sans-serif" }}>{subHeader}</p>
                    <p className='lg:w-3/4 w-full font-extralight text-base' style={{ fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                </div>
                <div className='flex flex-row flex-wrap lg:gap-0 gap-2 w-2/3 lg:justify-between lg:mx-0 mx-auto justify-center'>
                    <button className='py-2 px-8 border-[#262717] border rounded-md text-[#262717]'>Out Story</button>
                    <button className='py-2 px-8 border-[#262717] border rounded-md text-[#262717]'>Livermore Partners</button>
                    <button className='py-2 px-8 border-[#262717] border rounded-md text-[#262717]'>Gallery</button>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-extralight text-black' style={{ fontFamily: "'Manrope', sans-serif" }}>Follow us on</p>
                    <div className='flex flex-row flex-wrap lg:gap-0 gap-2 lg:w-1/3 w-full justify-between'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='bg-[#E4E4E4] rounded-full p-2'>
                            <FaFacebookF className="text-gray-600 text-xl hover:text-black" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='bg-[#E4E4E4] rounded-full p-2'>
                            <FaTwitter className="text-gray-600 text-xl hover:text-black" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='bg-[#E4E4E4] rounded-full p-2'>
                            <FaLinkedinIn className="text-gray-600 text-xl hover:text-black" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='bg-[#E4E4E4] rounded-full p-2'>
                            <FaInstagram className="text-gray-600 text-xl hover:text-black" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-[#E4E4E4] rounded-full p-2'>
                            <FaYoutube className="text-gray-600 text-xl hover:text-black" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
