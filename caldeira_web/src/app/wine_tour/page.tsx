import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Top from "./TopContent";
import Title from "./Title";
import LeftImage from "@/components/LeftImageButton";
import RightImage from "@/components/RightImageButton";
import Closing from "./Closing";


export default function WineTour() {
    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Top />
                <Title />
                <LeftImage 
                    title="Caldeira Wine Tasting Tour"
                    content="Embark on a sensory adventure with our Classic Wine Tasting Tour. Perfect for both novices and connoisseurs, this tour offers a curated selection of our finest wines. You'll savor the distinct flavors of our estate-grown varieties while learning about the meticulous winemaking process that makes Caldeira wines so exceptional."
                    button="Send Email Enquiry"
                    color="#AC2024"
                    src="/images/wine_a.png"
                    bg_src="/images/wine_a_bg.png"
                />
                <RightImage 
                    title={`Wine Tour of \nLocal Wineries`}
                    content="To truly capture the spirit of Livermore Valley, Caldeira Estate has partnered with several distinguished local wineries. Our collaborative Wine Tasting Tour offers guests a unique chance to sample a diverse array of wines from the region's top producers. This indulgent experience showcases the area's renowned wine culture and highlights the rich tapestry of flavors that define Livermore Valley."
                    button="Book Now"
                    color="#AC2024"
                    src="/images/wine_b.png"
                    bg_src="/images/wine_b_bg.png"
                />
                <LeftImage 
                    title={`Private Wine Tasting \nat Caldeira Estate`}
                    content="For an intimate and personalized experience, guests can book a Private Wine Tasting at our estate. Enjoy the serene beauty of our vineyard while savoring exclusive local wines, handpicked for their exceptional quality and distinct character. This bespoke tasting is the perfect way to celebrate special occasions or simply indulge in the luxury of Caldeira Estate's unparalleled hospitality."
                    button="Book Now"
                    color="#AC2024"
                    src="/images/wine_c.png"
                    bg_src="/images/wine_c_bg.png"
                />
                <Closing />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}