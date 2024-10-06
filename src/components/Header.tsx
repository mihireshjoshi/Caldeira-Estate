"use client";

// import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="top-bar sm:mx-2 lg:mx-20 mx-3 max-w-[100%] flex flex-row items-start justify-between">
        <Image
        src="/images/Caldeira_Estate_Logo.png"
        alt="Caldeira Estate"
        width={150}
        height={14}
        priority
        />
        <div className="flex flex-row justify-end flex-wrap gap-5">
            <a href="" className="flex flex-row items-center gap-2">
                <Image
                alt="img"
                height={24}
                width={24}
                src="/images/book_stay_icon.png"
                />
                <p>Book a stay</p>
            </a>
            <button
                onClick={handleMenuToggle}
                className="flex flex-row items-center gap-2 relative z-50"
            >
                <Image
                alt="img"
                height={18}
                width={18}
                src="/images/menu_icon.png"
                className={`transition-transform duration-500 transform ${
                    isMenuOpen ? "scale-0" : "scale-100"
                }`}
                />
                <p>Menu</p>
            </button>
        </div>
        <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full min-h-[756px] overflow-y-scroll pb-20 shadow-lg text-black z-50 transition-transform duration-700 ease-in-out ${
            isMenuOpen
            ? "scale-100 translate-y-0"
            : "scale-0 translate-y-[-50%]"
        }`}
        style={{
            transformOrigin: isMenuOpen && window.innerWidth <= 640 ? "80% 66%" : "90% 56%",
            backgroundImage: "url('/images/menu_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "1440px", // Constrain width to the component
            margin: "auto", // Center it within parent
        }}
    >
        <button onClick={handleMenuToggle} className="z-50 sticky top-0 right-0 p-5">
            <span className="text-2xl font-bold">&times;</span>{" "}
        </button>
        
        

        <div className="p-0">
          <div className="flex flex-row flex-wrap items-start justify-around mt-2 gap-5">
            <Image
              src="/images/menu_company_logo.png"
              alt="Caldeira Estate Logo"
              width={160}
              height={118}
            />
            <div className="flex flex-row flex-wrap items-start mx-2 gap-10 lg:gap-40">
                <div className="flex flex-col  gap-10 items-start justify-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">Accommodation</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/image-gallery">Image Gallery</a>
                            <a href="/main-house-3d">Main House 3D Tour</a>
                            <a href="/guest-house-3d">Guest House 3D Tour</a>
                            <a href="/reviews">Reviews</a>
                            <a href="/customize-stay">Customize your Stay</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">Special Occasions</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/image-gallery">Corporate Retreats</a>
                            <a href="/main-house-3d">Intimate Celebrations</a>
                            <a href="/guest-house-3d">Reservations</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">About</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/image-gallery">Caldeira Story</a>
                            <a href="/main-house-3d">Livermore Partners</a>
                            <a href="/guest-house-3d">Gallery</a>
                            <a href="/merchandise">Merchandise</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  gap-10 items-start justify-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">Experiences</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/wine_tour">Wine Tasting Tour</a>
                            <a href="/private-wine-tasting">Private Wine Tasting</a>
                            <a href="/olive_grove">Olive Grove Tour</a>
                            <a href="/home_dining">In-Home Dining</a>
                            <a href="/concierge_services">Concierge Services</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">Products</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/wine-tasting">Wine (With Brand)</a>
                            <a href="/private-wine-tasting">Olive Oil (With Brand)</a>
                            <a href="/olive-grove-tour">Petit Sirah Grapes</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <div className="flex flex-col font-extralight gap-[2px]">
                            <a href="/image-gallery">Bookings</a>
                            <a href="/main-house-3d">Enquiry form</a>
                            <a href="/guest-house-3d">Location</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
