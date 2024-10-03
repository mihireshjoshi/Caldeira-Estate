"use client";

import Image from "next/image";
export default function Explore() {
    const header = `Explore Our Organic Olive Grove`;
    const button = `Send Email Enquiry`;
    const leftContent = `At Caldeira Estate, our Olive Grove is more than just a plantation; it's a living testament to our dedication to nature and tradition. Each olive tree is tenderly cared for through organic farming practices, ensuring that every drop of extra virgin olive oil we produce is pure, flavorful, and environmentally friendly. Experience the art, passion, and heritage that make our estate a true treasure.`;
    const rightTitle = `Why Book an\nOlive Grove Tour?`;
    return (
        <section className="min-h-[1428px] px-4 flex flex-col items-center justify-evenly" style={{ backgroundImage: "url('/images/olive_grove_a_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div>
                <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extralight text-[#737E41] text-center" style={{ fontFamily: "'Boska', serif" }}>{header}</p>
            </div>
            <div className="flex flex-col items-center lg:gap-0 md:gap-0 gap-5">
                <Image 
                    alt="img"
                    height={380}
                    width={1260}
                    src={'/images/olive_grove_a.png'}
                    className="mx-10 w-90%"
                />
                <div className="flex flex-row max-w-[1260px] min-h-[770px] flex-wrap lg:gap-0 md:gap-0 gap-5">
                    <div className="lg:w-1/2 min-w-[320px] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-start justify-evenly lg:w-[60%] md:w-[60%] w-[80%] h-full lg:gap-0 md:gap-0 gap-2">
                            <div className="flex flex-col lg:gap-16 md:gap-12 gap-6">
                                <hr className={`lg:border-t-2 border-t-1 border-[#737E41] lg:w-[20%] md:w-[25%] w-[30%] sm:hidden`}/>
                                <p className="font-extralight lg:text-xl md:text-xl text-base" style={{fontFamily: "'Manrope', sans-serif", whiteSpace: "pre-line"}}>{leftContent}</p>
                            </div>
                            <button className={`px-10 py-3 lg:w-fit md:w-fit w-full rounded-md text-white bg-[#737E41]`}>{button}</button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 min-w-[320px] flex flex-col items-center justify-center bg-[#F5F6F2] py-3">
                        <div className="flex flex-col items-start justify-evenly lg:w-[66%] md:w-[60%] w-[80%] h-full">
                            <div className="flex flex-col lg:gap-16 md:gap-12 gap-6">
                                <p className="text-[48px]" style={{fontFamily: "'Boska', serif", whiteSpace: "pre-line"}}>{rightTitle}</p>
                                    <ul className="list-disc text-base font-extralight" style={{fontFamily: "'Manrope', sans-serif"}}>
                                        <li className="font-bold">
                                            Witness Artisanal Methods:
                                            <span className="font-extralight">
                                                See firsthand the meticulous processes we employ to harvest and press our olives, preserving their natural goodness and creating an olive oil that stands out in taste and quality.
                                            </span>
                                        </li>
                                        <li className="font-bold">
                                            Embrace Tradition:
                                            <span className="font-extralight">
                                                Learn about the rich history of olive oil production and how our methods have been passed down through generations, each step a tribute to our ancestors' wisdom and the purity of their practices.
                                            </span>
                                        </li>
                                        <li className="font-bold">
                                            Savor Authentic Flavors:
                                            <span className="font-extralight">
                                                Taste the difference that care, respect, and tradition make. Our olive oil is not just a product; it’s an experience that brings the essence of the Mediterranean to your palate.
                                            </span>
                                        </li>
                                        <li className="font-bold">
                                            Connect with Nature:
                                            <span className="font-extralight">
                                                Enjoy the serene beauty of our Olive Grove, a sanctuary of peace and natural harmony. Feel the connection to the earth that nurtures our trees and the cycles of nature that sustain them.
                                            </span>
                                        </li>
                                        <li className="font-bold">
                                            Stay at Caldeira Estate:
                                            <span className="font-extralight">
                                                Enhance your visit with a stay at our luxurious estate. Experience the perfect blend of comfort and rustic charm, with the Olive Grove as your breathtaking backdrop.
                                            </span>
                                        </li>
                                    </ul>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}