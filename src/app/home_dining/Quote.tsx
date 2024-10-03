"use client";

export default function Quote() {
    const main = `Indulge in the culinary opulence of Caldeira Estate, where every meal is an opportunity to savor the beauty and bounty of your surroundings. Book your stay today and let us redefine your understanding of in-home dining.`;
    return (
        <section className="min-h-[820px] flex flex-col justify-evenly ">
            <div className="flex flex-col items-center gap-6">
                <p className="text-center lg:w-[55%] md:w-[55%] w-[85%] lg:text-[48px] md:text-4xl sm:text-3xl text-2xl font-extralight" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line", lineHeight: "150%" }}>{main.split("**")[0]}<strong>{main.split("**")[1]}</strong>{main.split("**")[2]}</p>
            </div>
            <hr className={`lg:border-t-2 border-t-1 border-[#E3872C] lg:w-[5%] md:w-[7%] w-[10%] mx-auto`}/>
        </section>
    );
}