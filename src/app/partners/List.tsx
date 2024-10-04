"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ListData{
    color: string;
}

export default function List({color}: ListData) {

    const [activeIndex, setActiveIndex] = useState(0);
    const reviewContainerRef = useRef<HTMLDivElement | null>(null);

    const reviews = [
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
        {
            name: "Partner Name",
            speciality: "Speciality",
            description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut rutrum lorem. Maecenas ultricies dolor tellus, nec porta lacus rutrum vestibulum. Nullam nec dui sit amet ligula lacinia faucibus et ac tortor.",
            src: "/images/partner_a.png",
        },
    ];

    const handleScroll = () => {
        const container = reviewContainerRef.current;
        if (container) {
          const totalScrollWidth = container.scrollWidth - container.clientWidth;
          const scrollPercentage = container.scrollLeft / totalScrollWidth;
          const newActiveIndex = Math.round(
            scrollPercentage * (reviews.length - 1)
          );
          setActiveIndex(newActiveIndex);
        }
      };
    
    // Attach the scroll event listener
    useEffect(() => {
        const container = reviewContainerRef.current;
        if (container) {
            // Add a null check before attaching the event listener
            container.addEventListener("scroll", handleScroll);
    }

    return () => {
        if (container) {
        // Add a null check before removing the event listener
        container.removeEventListener("scroll", handleScroll);
        }
    };
    }, []);

    return (
        <section className="mb-10 mt-4 flex flex-col gap-24"> 
            <div className="flex flex-col gap-8">
                <div ref={reviewContainerRef} className=" flex flex-row overflow-x-scroll scrollbar-hide gap-8 lg:px-[100px] md:px-[100px] px-[50px] ">
                    {reviews.map((review, index) => (
                    <div className="" key={index}>
                        <div className="m-1 rounded-md mx-auto lg:w-[340px] md:w-[300px] w-[240px] flex flex-col gap-2">
                            <Image 
                                height={150}
                                width={340}
                                alt="img"
                                src={review.src}
                            />
                            <div className="flex flex-col">
                                <p
                                    className="lg:text-2xl md:text-xl text-lg max-w-[340px] font-light "
                                    style={{ fontFamily: "'Manrope', sans-serif" }}
                                >
                                    {review.name}
                                </p>
                                <p
                                    className="font-extralight text-[#515245] lg:text-sm text-xs"
                                    style={{ fontFamily: "'Manrope', sans-serif" }}
                                >
                                    {review.speciality}
                                </p>
                            </div>
                            <p
                                className="text-sm text-gray-500 font-extralight max-w-[340px]"
                                style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                                {review.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                                index === activeIndex ? "bg-black" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="flex w-full justify-center my-3">
                <button className={`lg:px-20 md:px-20 px-6 py-3 lg:w-fit md:w-fit w-[90%] rounded-md text-white`} style={{ background: `${color}`}}>Send Email Enquiry</button>
            </div>
        </section>
    )
}