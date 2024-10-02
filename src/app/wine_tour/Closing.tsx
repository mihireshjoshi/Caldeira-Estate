"use client";

// import { useState } from "react";

export default function Closing() {
    // const [main, setMain] = useState<string>(`Ready to embark on a wine adventure? Booking your Wine Tour at Caldeira Estate is simple and seamless. Whether you're staying with us or planning a day trip, our dedicated team is here to ensure you experience the true essence of Livermore Valley's wine heritage. Send us an email at ** alissa@staytrivalley.com ** to set it up.\n\nOr you can Contact Us using our form`)
    const main = `Ready to embark on a wine adventure? Booking your Wine Tour at Caldeira Estate is simple and seamless. Whether you're staying with us or planning a day trip, our dedicated team is here to ensure you experience the true essence of Livermore Valley's wine heritage. Send us an email at ** alissa@staytrivalley.com ** to set it up.\n\nOr you can Contact Us using our form`;
    return (
        <section className="min-h-[852px] flex flex-col justify-evenly ">
            <div className="flex flex-col items-center gap-6">
                <p className="text-center w-4/5 lg:text-[48px] md:text-4xl sm:text-3xl text-2xl" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line" }}>{main.split("**")[0]}<strong>{main.split("**")[1]}</strong>{main.split("**")[2]}</p>
                <button className={`px-10 py-3 w-fit rounded-md text-white`} style={{ background: '#262717'}}>Contact Us</button>
            </div>
            <hr className={`lg:border-t-2 border-t-1 border-[#AC2024] w-[5%] mx-auto`}/>
        </section>
    );
}