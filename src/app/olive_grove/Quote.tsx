"use client";

export default function Quote() {
    const main = `Book your Olive Grove tour today and immerse yourself in the authentic, artisanal world of Caldeira Estate. Let us share with you the secrets of our craft and the beauty of our land.`;
    return (
        <section className="min-h-[820px] flex flex-col justify-evenly ">
            <div className="flex flex-col items-center gap-6">
                <p className="text-center lg:w-[55%] md:w-[55%] w-[85%] lg:text-[48px] md:text-4xl sm:text-3xl text-2xl font-extralight" style={{ fontFamily: "'Boska', serif", whiteSpace: "pre-line", lineHeight: "150%" }}>{main.split("**")[0]}<strong>{main.split("**")[1]}</strong>{main.split("**")[2]}</p>
            </div>
            <hr className={`lg:border-t-2 border-t-1 border-[#737E41] lg:w-[5%] md:w-[7%] w-[10%] mx-auto`}/>
        </section>
    );
}