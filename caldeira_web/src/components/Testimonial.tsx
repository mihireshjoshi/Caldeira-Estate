"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
    const reviews = [
        {
          "name": "Winton Santiago",
          "review": "A wonderful stay",
          "description": "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
          "rating": 5
        },
        {
          "name": "Cheryl Collins",
          "review": "An amazing experience",
          "description": "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
          "rating": 5
        }
      ];
      
    return (
        <section className="testimonials" style={{backgroundImage: "url('/images/Testimonials_bg.png')"}}>
            {/* <div className="container mx-auto relative z-10">
                <h2 className="text-6xl text-[#F9A826] font-bold text-left lg:text-right mb-10">They love us</h2>

                <div className="flex justify-end items-end mb-10">
                    {reviews.map((review, index) => (
                        <div className="flex-1" key={index}>
                            <div className="bg-white shadow-lg p-8 rounded-lg mb-4 w-1/2">
                                <p className="text-2xl mb-4">“{review.review}”</p>
                                <p className="text-sm text-gray-500 font-extralight w-full">{review.description}</p>
                                <p className="font-normal mt-4 text-sm">- {review.name}</p>
                                <div className="flex mt-2">
                                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                                        <FaStar key={starIndex} className="text-yellow-500" size={24} /> // Display star icon
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="flex justify-center mt-6">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full mx-1"></div>
                </div>
            </div> */}

            <div className=" flex flex-row">
                {reviews.map((review, index) => (
                    <div className="" key={index}>
                        <div className="bg-white shadow-lg p-8 rounded-lg mb-4 w-1/3">
                            <p className="text-2xl font-normal mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>“{review.review}”</p>
                            <p className="text-sm text-gray-500 font-extralight w-full" style={{ fontFamily: "'Manrope', sans-serif" }}>{review.description}</p>
                            <p className="font-normal mt-4 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>- {review.name}</p>
                            <div className="flex mt-2">
                                {Array.from({ length: review.rating }).map((_, starIndex) => (
                                    <FaStar key={starIndex} className="text-yellow-500" size={24} /> // Display star icon
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}