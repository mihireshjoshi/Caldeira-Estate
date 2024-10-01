interface Ocassion{
    title: string;
    subtitle: string;
    src: string;
    innersrc: string;
    content: string;
    button: string;
    height: string;
    color: string;
}

import Image from "next/image";

export default function Ocassion({title, subtitle, src, innersrc, content, button, height, color}: Ocassion){
    return (
        <section className="flex flex-col items-center justify-evenly" style={{ minHeight: `${height}px`, backgroundSize: "cover", backgroundImage: `url('${src}')` }}>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col justify-center text-center gap-5">
                    <p style={{ fontFamily: "'Boska', serif" }} className={`lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-light text-[${color}]`}>{title}</p>
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className={`text-2xl font-extralight text-[${color}] mt-4`}>{subtitle}</p>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <Image 
                        height={380}
                        width={1300}
                        src={innersrc}
                        alt="img"
                        className="px-10"
                    />
                    <div className="mx-auto lg:w-[52%] md:w-[58%] sm:w-[64%] w-[66%]">
                        <p className="text-center text-base font-extralight" style={{ whiteSpace: 'pre-line', fontFamily: "'Manrope', sans-serif" }}>{content}</p>
                    </div>
                </div>
            </div>
            <button className={`border-[${color}] border py-2 px-12 rounded-md text-[${color}] font-extralight text-base`} style={{ fontFamily: "'Manrope', sans-serif" }}>{button}</button>
        </section>
    );
}