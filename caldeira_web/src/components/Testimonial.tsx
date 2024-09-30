"use client";

import { FaStar } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewContainerRef = useRef<HTMLDivElement | null>(null);
  const [header, setHeader] = useState<string>("They love us");
  const reviews = [
    {
      name: "Winton Santiago",
      review: "A wonderful stay",
      description:
        "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
      rating: 5,
    },
    {
      name: "Cheryl Collins",
      review: "An amazing experience",
      description:
        "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
      rating: 5,
    },
    {
      name: "Cheryl Collins",
      review: "An amazing experience",
      description:
        "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
      rating: 5,
    },
    {
      name: "Cheryl Collins",
      review: "An amazing experience",
      description:
        "Integer congue ex et ipsum accumsan, sit amet scelerisque nisi porta. Praesent condimentum dolor in congue blandit.",
      rating: 5,
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
    <section
      className="testimonials flex flex-col justify-around py-20 mb-20"
      style={{ backgroundImage: "url('/images/Testimonials_bg.png')" }}
    >
      <div
        ref={reviewContainerRef}
        className=" flex flex-row overflow-x-scroll scrollbar-hide gap-5 px-10 pb-10 lg:px-[480px]"
      >
        {reviews.map((review, index) => (
          <div className="" key={index}>
            <div className="bg-white  p-8 rounded-md testimonial-box mx-auto lg:w-[500px] md:w-[460px] w-[320px]">
              <p
                className="lg:text-2xl md:text-xl text-lg font-light "
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                “{review.review}”
              </p>
              <p
                className="text-sm text-gray-500 font-extralight w-full"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {review.description}
              </p>
              <p
                className="font-normal mt-1 lg:text-sm text-xs"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                - {review.name}
              </p>
              <div className="flex mt-4 gap-1">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="text-yellow-500"
                    size={16}
                  /> // Display star icon
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row mx-20 gap-44 items-start">
        <div className="flex flex-col gap-8">
          <p
            className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-[#EAA511]"
            style={{ fontFamily: "'Boska', serif" }}
          >
            {header}
          </p>
          <hr className="border-t-2 border-[#FFD985] w-2/12" />
        </div>
        <div className="hidden sm:flex justify-center items-center gap-2 mt-12">
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
    </section>
  );
}
