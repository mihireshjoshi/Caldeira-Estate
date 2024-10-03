"use client";
import Image from "next/image";
export default function Luxury() {
    const header = `Luxury Concierge Services`;
    return (
        <section className="min-h-[1044px] flex flex-row flex-wrap my-10" style={{ backgroundImage: "url('/images/experience_luxury_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="lg:w-3/5 w-full flex items-center justify-center py-5">
                <div className="lg:w-[86%] md:w-[88%] w-[90%] h-full flex flex-col justify-evenly">
                    <h2 style={{ fontFamily: "'Boska', serif" }} className="lg:text-[72px] md:text-[66px] text-[54px] font-extralight text-[#262717]">{header}</h2>
                    <hr className={`lg:border-t-2 border-t-1 border-[#262717] w-[12%]`}/>
                    <div className=" py-10 text-gray-800 flex flex-col gap-10">
                        <div className="text-gray-800 flex flex-col gap-5">
                            <p className="text-base font-light leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
                                Each guest at Caldeira Estate is pampered with bespoke services from trusted local providers, bringing the tranquil essence of Livermore Valley directly to your doorstep. From customized requests to an array of available services, every detail is meticulously crafted to enhance your stay.
                            </p>
                            <div>
                                <p className="text-lg font-light">Enhance your culinary experiences with our tailored dining services:</p>
                                <ul className="list-disc list-outside pl-5">
                                    <li><strong>Private Chef & Catering:</strong> Choose from our list of preferred caterers or private chefs to prepare exquisite meals for you during your stay.</li>
                                    <li><strong>Morning Coffee & Baked Goods Delivery:</strong> Begin your day with freshly delivered coffee and pastries.</li>
                                    <li><strong>Grocery Delivery:</strong> Arrive home to a freshly stocked fridge, filled with essentials so you can enjoy your stay without grocery runs.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-lg font-light">Maintain the pristine quality of your accommodation with our cleaning services:</p>
                                <ul className="list-disc list-outside pl-5">
                                    <li><strong>Daily Cleaning Service:</strong> Enjoy the luxury of hotel-like cleanliness with daily bed-making, dishwashing, and home freshening.</li>
                                    <li><strong>End of Stay Bonus Clean:</strong> Leave your dishes in the sink, and forget about our check-out protocol as we handle it for you.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-lg font-light">Our concierge services extend to corporate retreats and wellness:</p>
                                <ul className="list-disc list-outside pl-5">
                                    <li><strong>Corporate Retreats:</strong> Utilize our two white boards, chart paper, fresh markers, and more for productive sessions, complemented by catered coffee and pastries.</li>
                                    <li><strong>Beauty & Wellness:</strong> Schedule private, in-home massages, facials, or yoga sessions with trusted providers. We also offer hair, make-up, and photography services for your special occasions.</li>
                                </ul>
                            </div>

                            <p className="text-base font-light leading-relaxed">
                                It would be our pleasure to customize any of these services, so that you can relax and enjoy your time with us. Send us an email at <strong>alissa@staytrivalley.com</strong> to set this up!
                            </p>
                        </div>
                        <button className="py-2 px-8 lg:w-fit md:w-fit w-auto border border-[#262717] text-base text-[#262717] rounded-md">Read More</button>
                    </div>

                </div>
            </div>
            <Image 
                alt="img"
                height={1044}
                width={461}
                src={'/images/experience_luxury.png'}
                className="lg:mx-0 mx-auto"
            />

        </section>
    );
}