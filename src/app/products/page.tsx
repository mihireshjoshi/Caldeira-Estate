"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Hero from "./Hero";
import Wine from "./Wine";

import { useMediaQuery } from 'react-responsive';
import ProdMob from "./ProdMob";
import ProdDesk from "./ProdDesk";

export default function ProductPage () {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Hero />
                {isLargeScreen || isMediumScreen ? <ProdDesk /> : <ProdMob />}
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}