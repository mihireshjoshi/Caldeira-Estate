import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Hero from "./Hero";
import LeftImageButtons from "@/components/LeftImageButtons";
import RightImageButtons from "@/components/RightImageButtons";
import Luxury from "./Luxury";

export default function Experience() {
    return (
        <div className="out">
            <div className="main-box">
                <Hero />
                <LeftImageButtons 
                    button_a="Read More"
                    button_b="Book Now"
                    title="Wine Tours"
                    content="Embark on a unique journey through the verdant vineyards of Livermore Valley, guided by the expert hosts of Caldeira Estate. Choose from an unparalleled selection of wine tours tailored to your desires:"
                    pointer_a_title="Wine Tasting Tour:"
                    pointer_a=" Delight in a curated experience with our local partner wineries, indulging in the rich flavors and aromas that define Livermore Valley’s renowned wine culture."
                    pointer_b_title="Private Wine Tasting:"
                    pointer_b=" Immerse yourself in an intimate setting as you savor exclusive vintages amidst the serene beauty of the Caldeira Estate vineyard."
                    color="#AC2024"
                    src="/images/experience_a.png"
                    bg_src="/images/experience_a_bg.png"
                    to="/wine_tour"
                />
                <RightImageButtons 
                    button_a="Read More"
                    button_b="Book Now"
                    title="Olive Grove Tour"
                    content={`Wander through our meticulously maintained olive grove, a sanctuary where the finest extra virgin olive oil is born. Book a private tour and witness first-hand the dedication and craftsmanship that go into every drop. Let the serene ambiance and rich heritage of our olive grove enrich your senses.`}
                    color="#737E41"
                    src="/images/experience_c.png"
                    bg_src="/images/experience_c_bg.png"
                    to="/olive_grove"
                />
                <LeftImageButtons 
                    button_a="Read More"
                    button_b="Book Now"
                    title="In-Home Dining"
                    content="Elevate your stay with our exquisite in-home dining options:"
                    pointer_a_title="Exclusive Dining:"
                    pointer_a=" Select from a curated list of renowned local chefs who will prepare fresh, sophisticated meals right at Caldeira Estate, turning any meal into a memorable experience."
                    pointer_b_title="Catering Services:"
                    pointer_b=" Opt for our preferred list of local vendors who deliver essential catering services, ensuring you have everything needed to enjoy your stay to the fullest."                    
                    color="#E3872C"
                    src="/images/experience_b.png"
                    bg_src="/images/experience_b_bg.png"
                    to="/home_dining"
                />
                <Luxury />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}