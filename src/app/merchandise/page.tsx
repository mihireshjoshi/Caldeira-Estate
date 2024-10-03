"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Title from "./Title";
import Shop from "./Shop";

export default function Merchandise() {
    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Title />
                <Shop />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}