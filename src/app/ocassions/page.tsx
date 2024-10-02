import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Ocassion from "@/components/Ocassion";
import OcassionHero from "@/components/OcassionsHero";
import TailoredExperience from "@/components/TailoredExperience";
import Testimonials from "@/components/Testimonial";

export default function Home() {
    return (
      <div className="out">
        <div className="main-box">
          <OcassionHero />
          <Ocassion
            title="Corporate Retreats"
            subtitle="Where Productivity Meets Relaxation"
            src="/images/ocassions_a.png"
            innersrc="/images/retreat.png"
            content={`Caldeira Estate offers an ideal setting for corporate teams in the San Francisco Bay Area seeking a retreat that blends productivity with relaxation. Our estate can comfortably accommodate up to 21 guests, providing a range of sleeping arrangements, quality linens, a private office, and common spaces perfect for team building and brainstorming sessions.\nImagine your team inspired by the breathtaking views of our petite sirah vineyards from the private terrace, or unwinding in the hot tub after a productive day. With erasable whiteboards, flip charts, and markers, our home is equipped for dynamic meetings and collaborative sessions. To ensure your team can focus on their work, we provide catering setup assistance and as-needed cleaning services. `}
            button="Book a Stay and Design Your Experience"
            height="1120"
            color="#AC2024"
          />
          <hr className="lg:border-t-2 border-t-1 border-[#AC2024] w-[6%] mx-auto mb-10"/>
          <Ocassion
            title="Family and Friends"
            subtitle="Celebrate Life's Precious Moments"
            src="/images/ocassions_b.png"
            innersrc="/images/famfri.png"
            content={`For families and groups of friends, Caldeira Estate is a haven of joy and celebration. Whether it's a milestone birthday, a reunion, or an intimate wedding, our estate offers the perfect canvas for your special occasion. Our six formal bedrooms and three flex spaces provide a variety of sleeping options, each designed for comfort and relaxation. \nCapture stunning photographs amidst our lush vineyards and take advantage of our special rooms designed for brides or grooms preparing for their big day. The spacious lawn, patio, and terrace offer ample room for outdoor festivities, while our chef's kitchen allows for the creation of culinary delights. With a pool table and games available, guests of all ages will find entertainment and joy. \nWe offer tables and chairs with linens for guests who would like to host small gatherings to celebrate special times with their closest friends and family. Our expert decorator and planner are available to assist in making your special day hassle free and unforgettable from start to finish.`}
            button="Book a Stay and Design Your Experience"
            height="1204"
            color="#737E41"
          />
          <hr className="lg:border-t-2 border-t-1 border-[#737E41] w-[6%] mx-auto mb-10"/>
          <TailoredExperience />
          <Testimonials />
          <NewsLetter />
          <Footer />
        </div>
      </div>
    );
  }