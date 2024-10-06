"use client";

import Head from "next/head";
import Image from "next/image";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Booking() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [promo, setPromo] = useState<string>('');

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
        if (date && endDate && date > endDate) {
            setEndDate(null); // Reset end date if it's before start date
        }
    };

    // Handle the End Date Selection
    const handleEndDateChange = (date: Date | null) => {
        if (startDate && date && date >= startDate) {
            setEndDate(date);
        } else if (!startDate) {
            setStartDate(date); // Set start date if user selects the end date first
        }
    };

    const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromo(e.target.value);
    };
    return (
        <section className="w-full">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div className="p-5 lg:min-w-[380px] min-w-[340px] flex flex-col items-start gap-12 bg-[#FEFAF8] border border-[#F8DACE] rounded-md">
                
                <div className="flex flex-row items-end gap-2">
                    <p className="font-normal text-[32px] text-[#DF5B26]" style={{ fontFamily: "'Manrope', sans-serif" }}>$5000</p>
                    <p className="font-light text-[14px] text-[#DF5B26] pb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>night</p>
                </div>

                {/* Date Picker Section */}
                <div className="flex gap-5 flex-row border-b border-black items-end lg:w-auto w-full">
                    <div className="flex flex-col w-full lg:w-auto">
                        <p className="text-xs text-[#666463] text-left">CHECK IN</p>
                        <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        placeholderText="Start Date"
                        className="cal p-2 lg:text-lg md:text-lg text-[12px] w-full lg:w-44 md:w-40"
                        dateFormat="dd MMMM yyyy"
                        />
                    </div>
                    <div className="lg:block">
                        <Image
                        src="/images/arrow-right_black.png"
                        alt="arrow"
                        width={24} height={24}
                        className="mx-2 mb-2"
                        />
                    </div>
                    <div className="flex flex-col w-full lg:w-auto">
                        <p className="text-xs text-[#666463] text-left lg:text-right">CHECK OUT</p>
                        <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        placeholderText="End Date"
                        className="cal p-2 lg:text-lg md:text-lg text-[12px] w-full lg:w-44 md:w-40 text-left lg:text-right "
                        dateFormat="dd MMMM yyyy"
                        />
                    </div>
                </div>

                {/* Accommodation Section */}
                <div className="flex flex-col flex-grow w-[100%] border-b border-black">
                    <p className="text-xs text-[#666463]">ACCOMMODATION</p>
                    <select className="inp py-1 mt-3 w-full">
                        <option>1</option>
                    </select>
                </div>

                {/* Promo Code Section */}
                <div className="flex flex-col flex-grow w-[100%] border-b border-black">
                    <p className="text-xs text-[#666463]">PROMO CODE</p>
                    <input 
                        className="inp mt-3 border-b py-1 w-full focus:outline-none focus:ring-0"
                        value={promo}
                        onChange={handlePromoChange}
                    />
                </div>  

                {/* Check Availaibility Button */}
                <button className="px-12 py-2 text-white w-[100%] rounded-md bg-[#DF5B26]">Check Availaibility</button>
            </div>
        </section>
    );
}
