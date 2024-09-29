import Head from 'next/head';
import Image from 'next/image';
import Availability from "./Availability";

export default function HeroSection() {
    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div
                className="hero bg-cover bg-center h-screen mx-auto pt-8 pb-12 flex flex-col justify-between"
                // caldeira_web/src/images/landing_bg.png
                style={{ backgroundImage: "url('/images/landing_bg.png')" }}
            >  
                <div className="top-bar mx-20 flex flex-row justify-between">
                    <Image
                        src="/images/Caldeira_Estate.png"  // Path relative to the public folder
                        alt="Caldeira Estate"
                        width={100}                  // Width in pixels
                        height={4}                  // Height in pixels
                        priority   
                    />
                    {/* <p>CALDEIRA ESTATE</p> */}
                    <div className="flex flex-row gap-3">
                        <div>
                            <a href="">Book a stay</a>
                        </div>
                        <div>
                            <a href="">Menu</a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col justify-center items-center text-center">
                    <h2 style={{ fontFamily: "'Boska', serif" }} className="text-8xl font-bold text-white">Stay, Savor, Sip</h2>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="hero-desc text-lg text-white mt-4">Nestled in the heart of Livermore Valley, Caldeira Estate offers a luxurious escape amongst the lush vineyard and olive groves. Immerse yourself in our enchanting landscapes and indulge in exclusive experiences. Discover more about our property and explore our range of products and services.</p>
                </div>
                <div className="mx-auto">
                    <Availability />
                </div>
            </div>
        </section>
      
    );
  }
  