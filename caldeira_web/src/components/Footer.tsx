"use client";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#262717] text-white py-24 footer">
            <div className="container mx-auto px-6 lg:px-20 flex flex-row flex-wrap justify-between gap-10">
                {/* Logo Section */}
                <div className="flex flex-col justify-between items-center sm:items-start lg:mx-0 md:mx-0 mx-auto">
                    <Image 
                        src="/images/footer_logo.png" 
                        alt="Caldeira Estate Logo" 
                        width={160} 
                        height={118}
                    />
                    <div className='flex flex-col'>
                      <p className="mt-4 text-base font-bold">News and Updates</p>
                      <p className="mt-2 text-base font-bol">Become a Partner</p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex mt-4 gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} /></a>
                    </div>
                    <p className="mt-4 text-xs">© Caldeira Estate 2024. All rights reserved.</p>
                </div>

                {/* Links */}
                <div className='flex flex-col h-full justify-between gap-20'>
                  <div className='grid grid-cols-3 lg:gap-44 gap-12 lg:mx-0 mx-auto'>
                    <div className='lg:mx-0 md:mx-0 mx-auto'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">Accommodation</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Image Gallery</a></li>
                            <li><a href="#">Main House 3D Tour</a></li>
                            <li><a href="#">Guest House 3D Tour</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Customize your Stay</a></li>
                        </ul>
                    </div>
                    <div className='lg:mx-0 md:mx-0 mx-auto'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">Experiences</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Wine Tasting Tour</a></li>
                            <li><a href="#">Private Wine Tasting</a></li>
                            <li><a href="#">Olive Grove Tour</a></li>
                            <li><a href="#">In-Home Dining</a></li>
                            <li><a href="#">Concierge Services</a></li>
                        </ul>
                    </div>
                    <div className='lg:mx-0 md:mx-0 mx-4'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">About</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Caldeira Story</a></li>
                            <li><a href="#">Livermore Partners</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Merchandise</a></li>
                        </ul>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 lg:gap-44 gap-12 lg:mx-0 mx-auto'>
                    <div className='lg:mx-0 md:mx-0 mx-auto'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">Special Occasions</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Corporate Retreats</a></li>
                            <li><a href="#">Intimate Celebrations</a></li>
                            <li><a href="#">Reservations</a></li>
                        </ul>
                    </div>
                    <div className='lg:mx-0 md:mx-0 mx-auto'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">Products</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Wine (With Brand)</a></li>
                            <li><a href="#">Olive Oil (With Brand)</a></li>
                            <li><a href="#">Petit Sirah Grapes</a></li>                            
                        </ul>
                    </div>
                    <div className='lg:mx-0 md:mx-0 mx-4'>
                        <h3 className="font-bold lg:text-lg text-base mb-4">Contact</h3>
                        <ul className="text-sm space-y-2 font-extralight">
                            <li><a href="#">Bookings</a></li>
                            <li><a href="#">Enquiry Form</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    );
}
