"use client";

// import Link from 'next/link';
// import Image from "next/image";
import { FaRegCreditCard } from 'react-icons/fa';  // Font Awesome card icon
import { HiDotsCircleHorizontal } from 'react-icons/hi';  // Heroicons menu dots

export default function Header() {
  return (
    <div className="top-bar sm:mx-4 lg:mx-20 mx-5 my-10 flex flex-row justify-between">
        {/* <Image
            src="/images/Caldeira_Estate.png"  // Path relative to the public folder
            alt="Caldeira Estate"
            width={100}                  // Width in pixels
            height={4}                  // Height in pixels
            priority   
        /> */}
        <p>Caldeira Estate</p>
        {/* <p>CALDEIRA ESTATE</p> */}
        <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center gap-2">
                <FaRegCreditCard size={24} />
                <a href="">Book a stay</a>
            </div>
            <div className="flex flex-row items-center gap-2">
                <HiDotsCircleHorizontal size={24} />
                <a href="">Menu</a>
            </div>
        </div>
    </div>
  );
}
