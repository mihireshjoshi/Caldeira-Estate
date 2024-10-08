"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50 w-full transition-transform duration-500 ease-in-out">
            {/* Navbar Content */}
            <div
                className={`transform transition-transform duration-500 ease-in-out ${scrolled ? 'translate-y-[-100%]' : 'translate-y-0'}`}
            >
                {/* Full Navbar with Logo and Text (Visible when not scrolled) */}
                <div className="sm:mx-2 lg:mx-20 mx-3 max-w-[100%] flex flex-row items-start gap-2 justify-between">
                    {/* Logo */}
                    <div>
                        <Image
                            src="/images/Caldeira_Estate_Logo.png"
                            alt="Caldeira Estate"
                            width={150}
                            height={14}
                            priority
                        />
                    </div>
                    {/* Buttons Section */}
                    {/* <div className="flex flex-row flex-wrap justify-end gap-5">
                        <a href="" className="flex flex-row items-center gap-2">
                            <Image
                                alt="Book a stay"
                                height={24}
                                width={24}
                                src="/images/book_stay_icon.png"
                            />
                            <p>Book a stay</p>
                        </a>
                        <button className="flex flex-row items-center gap-2 relative z-50" onClick={handleMenuToggle}>
                            <Image
                                alt="Menu"
                                height={16}
                                width={16}
                                src="/images/menu_icon.png"
                                className={`transition-transform duration-500 transform`}
                            />
                            <p>Menu</p>
                        </button>
                    </div> */}
                </div>
            </div>

            {/* Compact Navbar (Visible when scrolled) */}
            <div
                className={`flex flex-col lg:mt-5 flex-wrap items-end justify-end gap-5 lg:mr-10 mr-2 mt-20 transition-transform duration-500 ease-in-out ${scrolled ? 'translate-y-0 flex flex-col mt-5' : 'translate-y-[-160%] translate-x-[-5%] flex lg:flex-row'}`}
            >
                <button className="flex flex-row items-center gap-2 z-50">
                    <div className={`flex ${scrolled ? 'bg-black h-10 w-10 justify-center items-center py-3 rounded-full' : ''}`}>
                        <Image
                            alt="Book a stay"
                            height={24}
                            width={24}
                            src="/images/book_stay_icon.png"
                        />
                    </div>
                    <p className={`${scrolled ? 'hidden' : 'block'}`}>Book a stay</p>
                </button>
                <button className="flex flex-row items-center gap-2 z-50" onClick={handleMenuToggle}>
                    <div className={`flex ${scrolled ? 'bg-black h-10 w-10 justify-center items-center py-3 rounded-full' : ''}`}>
                        <Image
                            alt="Book a stay"
                            height={16}
                            width={16}
                            src="/images/menu_icon.png"
                        />
                    </div>
                    <p className={`${scrolled ? 'hidden' : 'block'}`}>Menu</p>
                </button>
            </div>

            {/* Menu Popup */}
            <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-screen overflow-y-scroll pb-20 shadow-lg text-black z-50 transition-transform duration-700 ease-in-out ${isMenuOpen
                    ? "scale-100 translate-y-0"
                    : "scale-0 translate-y-[-50%]"
                }`}
                style={{
                    transformOrigin: isMenuOpen && window.innerWidth <= 640 ? "80% 66%" : "90% 56%",
                    backgroundImage: "url('/images/menu_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maxWidth: "1440px",
                    margin: "auto",
                }}
            >
                <button onClick={handleMenuToggle} className="z-10 sticky top-0 right-0 p-5">
                    <span className="text-2xl font-bold">&times;</span>
                </button>

                <div className="p-0">
                    <div className="flex flex-row flex-wrap items-start justify-around mt-2 gap-5">
                        <Image
                            src="/images/menu_company_logo.png"
                            alt="Caldeira Estate Logo"
                            width={160}
                            height={118}
                        />
                        <div className="flex flex-row flex-wrap items-start justify-center mx-2 gap-10 lg:gap-40">
                            <div className="flex flex-col gap-10 items-start justify-center">
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
                            <div className="flex flex-col gap-10 items-start justify-center">
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
