"use client";

import Head from "next/head";
import Image from "next/image";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Availability() {
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
            <div className="avail-info mx-auto p-4 sm:flex-row sm:justify-around lg:justify-evenly lg:items-end sm:items-end">
                
                {/* Date Picker Section */}
                <div className="flex flex-row justify-between items-end border-b">
                    <div className="flex flex-col">
                        <p className="text-xs text-white/60">CHECK IN</p>
                        <DatePicker
                            selected={startDate}
                            onChange={handleStartDateChange}
                            placeholderText="Start Date"
                            className="cal p-2 text-lg w-44"
                            dateFormat="dd MMMM yyyy"
                        />
                    </div>
                    <div>
                        <Image 
                            src="/images/arrow-right.png" 
                            alt="arrow"
                            width={24} height={24}
                            className="mx-2 mb-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs text-white/60 text-right">CHECK OUT</p>
                        <DatePicker
                            selected={endDate}
                            onChange={handleEndDateChange}
                            placeholderText="End Date"
                            className="cal p-2 text-lg w-44 text-right"
                            dateFormat="dd MMMM yyyy"
                        />
                    </div>
                </div>

                {/* Accommodation Section */}
                <div className="flex flex-col flex-grow sm:w-1/4 border-b max-w-52">
                    <p className="text-xs text-white/60">ACCOMMODATION</p>
                    <select className="inp py-1 mt-3 w-full">
                        <option>1</option>
                    </select>
                </div>

                {/* Promo Code Section */}
                <div className="flex flex-col flex-grow sm:w-1/4 lg:max-w-40">
                    <p className="text-xs text-white/60">PROMO CODE</p>
                    <input 
                        className="inp mt-3 border-b py-1 w-full focus:outline-none focus:ring-0"
                        value={promo}
                        onChange={handlePromoChange}
                    />
                </div>  

                {/* Check Availaibility Button */}
                <div>
                    <button className="availability-button px-12 py-2 border">Check Availaibility</button>
                </div>
            </div>
        </section>
    );
}
