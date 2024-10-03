"use client";

// import { useState } from "react";

export default function Closing() {
    // const [main, setMain] = useState<string>(`Ready to embark on a wine adventure? Booking your Wine Tour at Caldeira Estate is simple and seamless. Whether you're staying with us or planning a day trip, our dedicated team is here to ensure you experience the true essence of Livermore Valley's wine heritage. Send us an email at ** alissa@staytrivalley.com ** to set it up.\n\nOr you can Contact Us using our form`)
    const main = `** Customized Services for Special Occasions ** \nAt Caldeira Estate, each experience is a tribute to the vibrant spirit of Livermore Valley and a testament to our commitment to supporting local businesses. Whether you’re planning a Corporate Retreat or a Private Occasion, help us customize your stay with special requests, and let us bring your vision of a perfect retreat to life.`;
    return (
        <section className="min-h-[852px] flex flex-col justify-evenly ">
            <div className="flex flex-col items-center gap-6">
                <p className="text-center w-[64%] lg:text-[48px] md:text-4xl sm:text-3xl text-2xl" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line", lineHeight: "150%" }}>{main.split("**")[0]}<strong>{main.split("**")[1]}</strong>{main.split("**")[2]}</p>
                <button className={`px-10 py-3 w-fit rounded-md text-white`} style={{ background: '#262717'}}>Send Email Enquiry</button>
            </div>
            <hr className={`lg:border-t-2 border-t-1 border-[#262717] w-[5%] mx-auto`}/>
        </section>
    );
}