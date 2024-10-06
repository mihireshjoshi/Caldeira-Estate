"use client";

import Image from "next/image";
import Booking from "./Booking";
import { FaStar } from "react-icons/fa";

export default function Content () {
    const rating = 5;
    return (
        <section className="flex flex-col w-[90%] gap-12 mx-auto items-center">
            <div className="flex flex-row flex-wrap items-start justify-between w-[100%] pb-8 border-b-2 border-b-[#C7C7C7] lg:gap-0 md:gap-0 gap-4">
                <div className="flex flex-col lg:w-[63%] md:w-[63%] w-[100%] items-start gap-8">
                    <div className="flex flex-col items-start">
                        <p className="text-2xl text-[#262717]" style={{ fontFamily: "'Manrope', sans-serif" }}>Entire Estate (Main + Guest House)</p>
                        <p className="text-[14px] font-light text-[#262717]" style={{ fontFamily: "'Manrope', sans-serif" }}>Up to 21 guests · 8 bedrooms · 8 beds · 5 bathrooms</p>
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex gap-1">
                                {Array.from({ length: rating }).map((_, starIndex) => (
                                <FaStar
                                    key={starIndex}
                                    className="text-yellow-500"
                                    size={16}
                                /> // Display star icon
                                ))}
                            </div>
                            <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>4.95  |</p>
                            <p className="text-[14px] font-light text-[#E3872C] underline underline-offset-1" style={{ fontFamily: "'Manrope', sans-serif" }}>42 Reviews</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-[#D5D5D5] w-[100%]" />
                    <div className="flex flex-col items-start gap-2">
                        <p className="text-xl text-[#262717]" style={{ fontFamily: "'Manrope', sans-serif" }}>A Perfect Retreat for Every Occasion</p>
                        <p className="text-base text-black font-extralight" style={{ fontFamily: "'Manrope', sans-serif" }}>At Caldeira  Estate, we can comfortably host up to 21 guests, providing a range of sleeping arrangements tailored to your needs. Our accommodations include 6 formal bedrooms and 3 flexible spaces, ensuring everyone finds their perfect place to rest. Each room is appointed with comfortable beds, quality linens, and most come with en suite bathrooms for added privacy. Our primary suite even features a luxurious jetted jacuzzi tub, offering a sanctuary for relaxation.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl text-[#262717]" style={{ fontFamily: "'Manrope', sans-serif" }}>Popular Amenities</p>
                        <div className="grid grid-cols-3 lg:gap-32 md:gap-24 gap-14">
                            <div className="flex flex-col gap-8">    
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_ac_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Air Conditioning</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_w_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>WiFi</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_v_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Parking</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_pf_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Pet Friendly</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_j_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Jacuzzi</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_ga_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Garden Area</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8"> 
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_k_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Kitchen</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_b_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Bar</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image height={25} width={25} alt="img" src={'/images/acc_pt_logo.png'} />
                                    <p className="text-[14px] text-[#262717] font-light" style={{ fontFamily: "'Manrope', sans-serif" }}>Pool Table</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] md:w-[35%] w-[100%] min-w-[340px] items-center justify-center">
                    <Booking/>
                </div>
            </div>
            <div className="w-[100%] items-start" style={{ fontFamily: "'Manrope', sans-serif" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Sleeping Arrangements */}
                    <div>
                        <h2 className="text-xl font-medium mb-4">Sleeping Arrangements:</h2>
                        <ul className="list-disc text-[14px] font-light pl-5">
                            <li><strong className="font-semibold">Primary Bedroom 1:</strong> 1 King bed, 1 Air Mattress (Optional)</li>
                            <li><strong className="font-semibold">Bedroom 2:</strong> 1 Queen bed</li>
                            <li><strong className="font-semibold">Bedroom 3:</strong> 1 King bed</li>
                            <li><strong className="font-semibold">Bedroom 4:</strong> 1 Bunk Bed (Twin over Full)</li>
                            <li><strong className="font-semibold">Bridal Retreat / Flex 1:</strong> 1 Air Mattress (Optional)</li>
                            <li><strong className="font-semibold">Office / Flex 2:</strong> 1 Queen Sleeper Sofa</li>
                        </ul>
                    </div>

                    {/* Right Column - Bathrooms */}
                    <div>
                        <h2 className="text-xl font-medium mb-4">Bathrooms:</h2>
                        <ul className="list-disc text-[14px] font-light pl-5">
                            <li><strong className="font-semibold">Primary Bathroom 1:</strong> Jetted Tub, Shower, Toilet</li>
                            <li><strong className="font-semibold">Bathroom 2-4:</strong> Combination Tub/Shower, Toilet</li>
                        </ul>
                    </div>
                </div>

                {/* Guest House Accommodations */}
                <div className="mt-8">
                    <h2 className="text-xl font-medium mb-4">Guest House Accommodations:</h2>
                    <p className="mb-4">For larger gatherings or additional privacy, our Guest House is available for rent, offering two more bedrooms, a flex space, and an additional bathroom.</p>
                    <ul className="list-disc text-[14px] font-light pl-5">
                        <li><strong className="font-semibold">Bedroom 1:</strong> 1 Queen bed</li>
                        <li><strong className="font-semibold">Bedroom 2:</strong> 1 Queen bed</li>
                        <li><strong className="font-semibold">Living Room:</strong> 1 Queen Sleeper Sofa/Futon</li>
                        <li><strong className="font-semibold">Bathroom:</strong> Combination Tub/Shower, Toilet</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}