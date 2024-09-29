"use client";

import Head from "next/head";
import Image from "next/image";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Availability() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <section>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </Head>
            <div className="avail-info mx-auto flex flex-col gap-6 p-4 sm:flex-row sm:items-start sm:justify-between lg:w-4/5">
                
                {/* Date Picker Section */}
                <div className="flex flex-col sm:w-1/2">
                    <div className="flex justify-between w-auto">
                        <p className="text-xs text-white/60">CHECK IN</p>
                        <p className="text-xs text-white/60 text-right">CHECK OUT</p>
                    </div>
                    <div className="date flex items-center justify-between border-b">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Start Date"
                            className="cal p-2 text-lg w-32 sm:w-40"
                            dateFormat="dd MMMM yyyy"
                        />
                        <Image 
                            src="/images/arrow-right.png" 
                            alt="arrow"
                            width={24} height={24}
                            className="mx-2"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="End Date"
                            className="cal p-2 text-lg w-32 sm:w-40 text-right"
                            dateFormat="dd MMMM yyyy"
                        />
                    </div>
                </div>

                {/* Accommodation Section */}
                <div className="flex flex-col flex-grow sm:w-1/4">
                    <p className="text-xs text-white/60">ACCOMMODATION</p>
                    <select className="inp border-b py-1 w-full">
                        <option>1</option>
                    </select>
                </div>

                {/* Promo Code Section */}
                <div className="flex flex-col flex-grow sm:w-1/4">
                    <p className="text-xs text-white/60">PROMO CODE</p>
                    <input 
                        className="inp mt-2 border-b py-1 w-full"
                    />
                </div>  
            </div>
        </section>
    );
}
