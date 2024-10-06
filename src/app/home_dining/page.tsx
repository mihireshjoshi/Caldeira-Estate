import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import TopContent from "./TopContent";
import Header from "@/components/Header";
import Title from "./Title";
import LeftImage from "@/components/LeftImageButton";
import RightImage from "@/components/RightImageButton";
import Quote from "./Quote";


export default function HomeDining() {
    return (
        <div className="out">
            <div className="main-box pt-8">
                <Header />
                <TopContent />
                <Title />
                <LeftImage 
                    button="Book Your Stay"
                    title={`Exclusive Dining\nwith a Personal Chef`}
                    content={`Imagine waking up to the aroma of freshly brewed coffee and a bespoke breakfast crafted just for you. With our Exclusive Dining option, you can enjoy the luxury of a personal chef who caters to your every culinary desire. From breakfast to dinner, each meal is an intimate affair, prepared with precision and passion. \nOur chefs will work closely with you to create menus that reflect your dietary preferences and favorite cuisines, ensuring every bite is a delight. Experience the true essence of Caldeira Estate’s hospitality with meals that transform your stay into an unforgettable gastronomic journey.`}
                    color="#E3872C"
                    src="/images/home_dining_a.png"
                    bg_src="/images/home_dining_a_bg.png"
                />
                <RightImage 
                    title={`Flavors of the Valley`}
                    subTitle="(Catering Services)"
                    content={`Discover the rich flavors of Livermore Valley with our carefully curated Catering Services.\nWe partner with preferred local vendors renowned for their expertise in turning the freshest produce into exquisite dishes.\nOur vendors are dedicated to providing you with a taste of local tradition, all while upholding the quality and luxury synonymous with Caldeira Estate. Whether you're hosting an event or simply wish to enjoy a taste of the locale, our catering services ensure a dining experience that's both convenient and unforgettable.`}
                    button="Send Email Enquiry"
                    color="#E3872C"
                    src="/images/home_dining_b.png"
                    bg_src="/images/home_dining_b_bg.png"
                />
                <Quote />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}