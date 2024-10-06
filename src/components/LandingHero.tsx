"use client";


import Head from "next/head";

import Availability from "./Availability";
import Header from "./Header";

export default function LandingHero() {

 
  return (
    <section>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="hero bg-cover bg-center min-h-[756px] mx-auto pt-8 pb-12 flex flex-col justify-between"
        style={{ backgroundImage: "url('/images/landing_bg.png')" }}
      >
        {/* Navigation Bar */}
        <Header />

        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2
            style={{ fontFamily: "'Boska', serif" }}
            className="text-8xl font-bold text-white"
          >
            Stay, Savor, Sip
          </h2>
          <p
            style={{ fontFamily: "'Manrope', sans-serif" }}
            className="hero-desc text-lg text-white mt-4 mx-4"
          >
            Nestled in the heart of Livermore Valley, Caldeira Estate offers a
            luxurious escape amongst the lush vineyard and olive groves. Immerse
            yourself in our enchanting landscapes and indulge in exclusive
            experiences. Discover more about our property and explore our range
            of products and services.
          </p>
        </div>

        <div className="mx-auto lg:w-full">
          <Availability />
        </div>
      </div>

      {/* Menu Popup */}
      {/* <div
        className={`fixed top-0 left-0 w-[80vw] overflow-y-scroll pb-20 h-[80vh] shadow-lg text-black z-50 rounded-lg transition-transform duration-700 ease-in-out ${
          isMenuOpen
            ? "scale-100 translate-x-[13%] translate-y-[10%]"
            : "scale-0 translate-x-[50%] translate-y-[-50%]"
        }`}
        style={{
          transformOrigin:
            isMenuOpen && window.innerWidth <= 640 ? "62% 70%" : "62% 56%", // Custom origin for small screens
          backgroundImage: "url('/images/menu_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "start",
        }}
      > */}
    
    </section>
  );
}
