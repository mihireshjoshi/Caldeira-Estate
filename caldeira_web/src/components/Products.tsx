"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import ProductBox from './ProductBox';

export default function Products() {
    const [header, setHead] = useState<string>('Our Products');
    return (
        <section className="products flex flex-col" style={{backgroundImage: "url('/images/Products_bg.png')"}} data-aos="fade-up">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            
                <p className="sm:w-1/2 lg:w-3/5 text-center mx-auto lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-[#262717]" style={{ fontFamily: "'Boska', serif" }} data-aos="fade-up" data-aos-delay="100">{header}</p>
            
            <hr className="border-t-2 border-[#AC2024] w-1/12 mx-auto" data-aos="fade-up" data-aos-delay="120"/>
            <div className="flex flex-row flex-wrap mx-auto sm:w-1/2 lg:w-11/12 justify-around gap-16" data-aos="fade-up" data-aos-delay="200">
                <ProductBox 
                    name='Caldeira Red Wine'
                    from='by Ole'
                    cost={100}
                    desc='Experience the passion of Livermore Valley with every sip.'
                    src='/images/prod_a.png'
                />
                <ProductBox 
                    name='SF Bay Olive Oil'
                    from=' by Caldeira'
                    cost={100}
                    desc='Savor the essence of our groves in a bottle.'
                    src='/images/prod_b.png'
                />
                <ProductBox 
                    name='Petite Sirah Grapes'
                    from=''
                    cost={100}
                    desc='Delight in the robust flavors of the valley steeped in tradition.'
                    src='/images/prod_c.png'
                />
                
            </div>
        </section>
    );
}