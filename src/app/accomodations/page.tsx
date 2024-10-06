import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Hero from "./Hero";
import LeftImg from "@/components/LeftImage";
import RightImg from "@/components/RightImage";
import Content from "./Content";

export default function Accomodations() {
    return (
        <div className="out">
            <div className="main-box">
                <Header />
                <Hero />
                <Grid />
                <Content/>
                <LeftImg 
                    src="/images/acc_a.png"
                    color="#262717"
                    title={`Amenities that\nSpell Luxury`}
                    bg_src="/images/acc_a_bg.png"
                    content_a="Our estate is designed for both leisure and function. Enjoy our spacious common areas that are ideal for reconnecting with loved ones or breaking into work groups. After a day of wine tasting or exploring, relax in our brand new hot tub or take in the scenic views from our private upstairs terrace."
                    content_b="For entertainment, we provide several Amazon Fire TVs throughout the estate, perfect for movie nights or watching the big game. Our upstairs den features a pool table and a selection of games, ensuring fun for guests of all ages."
                />
                <RightImg 
                    src="/images/acc_b.png"
                    color="#AC2024"
                    title={`Private Gatherings\nMade More Special`}
                    bg_src="/images/acc_b_bg.png"
                    subTitle=""
                    content_a="At Caldeira Estate, we understand the importance of making memories. We offer special bridal preparation rooms, ensuring you're ready for your big day in style and comfort. Our picturesque grounds, complete with petite sirah vineyards and a spacious lawn, provide the perfect backdrop for unforgettable photography."
                    content_b="Whether you're planning a wedding, a retreat, or a family celebration, we allow private gatherings that have been arranged in advance with us. Our team is here to discuss your specific requirements and tailor a package to suit your needs."                
                />
                <LeftImg 
                    src="/images/acc_c.png"
                    color="#737E41"
                    title={`Corporate Retreats\nwith a Difference`}
                    bg_src="/images/acc_c_bg.png"
                    content_a="Escape the ordinary with a corporate retreat at Caldeira Estate. Our facilities are equipped with erasable whiteboards, flip charts, markers, and all the essentials for facilitating productive brainstorming sessions. Allow our team to assist in catering and additional cleaning services, so you can focus on what truly matters—innovation and collaboration."
                    content_b=""
                />
                <RightImg 
                    src="/images/acc_d.png"
                    color="#262717"
                    title={`A Commitment to\nExcellence`}
                    bg_src="/images/acc_d_bg.png"
                    subTitle=""
                    content_a="At Caldeira Estate, we prioritize your health and safety. Our enhanced cleaning measures ensure that each visit is as safe as it is luxurious, with a 24-hour window between guests to guarantee peace of mind."
                    content_b="Caldeira Estate is your ideal destination for year-round relaxation and adventure. Experience the perfect blend of comfort, elegance, and stunning natural beauty at the Caldeira Estate. We can't wait to welcome you"                
                />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}