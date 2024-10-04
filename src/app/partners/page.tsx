import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonial";
import Hero from "./Hero";
import Title from "./Title";
import List from "./List";
import Content from "./Content";

export default function Partners() {
    return (
        <div className="out">
            <div className="main-box">
                <Hero />
                <Title 
                    title={`Local Food & Beverage Partners`}
                    content={`At Caldeira Estate, we believe in the power of community and the beauty of local flavors. Our partnerships with Livermore's finest Food & Beverage establishments ensure that every moment of your stay is enriched with the region's culinary excellence. Discover the vibrant tastes that await you, crafted by our talented local partners.`}
                    src="/images/home_dining_subTop.png"
                    color="#E3872C"
                />
                <List 
                    color="#E3872C"
                />
                <Title 
                    title={`Luxury Concierge Services Partners`}
                    content={`Caldeira Estate is committed to providing a seamless and luxurious experience through our network of trusted concierge service partners. Immerse yourself in relaxation and convenience with our exclusive offerings`}
                    src=""
                    color="#262717"
                />
                <Content 
                    title="Discounts with Partner Vineyards & Wineries"
                    context={`Enjoy discounts on tastings and bottle purchases helping you bring the essence of Livermore's vineyards directly to you. Our partners are also offering the following services to our guests:`}
                    contextBold={`Private wine tours\nPrivate in-home wine tastings.`}
                />
                <div className="w-full bg-[#F0F0EF]">
                    <hr className={`border-t-2 mx-auto border-[#1E1E1E] w-[5%]`}/>
                </div>
                <Content 
                    title="Gourmet Caterers & Private Chefs"
                    context={`Indulge in culinary masterpieces crafted by our preferred chefs or caterers, available to cater your special occasions or daily dining needs.`}
                    contextBold={`We can assist with delivery of coffee & baked goods in the morning\nPick from our list of preferred caterers or private chefs to cook for you during your stay.\nArrive home to a freshly stocked fridge! We deliver the basics so that you can wake up and enjoy your day, without a trip to the grocery store.`}
                />
                <div className="w-full bg-[#F0F0EF]">
                    <hr className={`border-t-2 mx-auto border-[#1E1E1E] w-[5%]`}/>
                </div>
                <Content 
                    title="Immaculate Cleaning Services"
                    context={`Experience the luxury of daily cleaning or an end-of-stay service that lets you unwind without the fuss.`}
                    contextBold={`We will make beds, wash dishes, and freshen the home while you enjoy your vacation.\nEnd of stay bonus clean. Leave your dishes in the sink, and forget about our check-out protocol. We will take care of it!`}
                />
                <div className="w-full bg-[#F0F0EF]">
                    <hr className={`border-t-2 mx-auto border-[#1E1E1E] w-[5%]`}/>
                </div>
                <Content 
                    title="Corporate Retreats"
                    context={`Enhance productivity with our equipped meeting spaces and catering options, perfect for your business needs`}
                    contextBold={`Take advantage of our two white boards, chart paper, fresh markers and more. \nCatered coffee & pastries in the morning, so that you can get right to work!`}
                />
                <div className="w-full bg-[#F0F0EF]">
                    <hr className={`border-t-2 mx-auto border-[#1E1E1E] w-[5%]`}/>
                </div>
                <Content 
                    title="Beauty & Wellness"
                    context={`Pamper yourself with a menu of luxury services, ensuring relaxation and rejuvenation during your visit.`}
                    contextBold={`Schedule a private, in-home massage or facial during your stay with one of our trusted providers.\nPrivate yoga session or class for your group.\nHair, make-up and photography services for your big day.`}
                />
                <Testimonials />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    );
}