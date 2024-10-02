
interface ProductDets {
    name: string;
    from: string;
    cost: number;
    desc: string;
    src: string;
}

import Image from "next/image";

export default function ProductBox({name, from, cost, desc, src}: ProductDets){
    return (
        <section>
            <Image 
                height={380}
                width={300}
                alt="product"
                src={src}
            />
            <div className="flex flex-row justify-between mt-6 mb-2">
                <div className="flex flex-row flex-wrap">
                    <p className="text-xl text-[#AC2024] font-extralight" style={{ fontFamily: "'Manrope', sans-serif" }}>{name}</p>
                    <p className="text-lg text-[#AC2024] font-extralight ml-2" style={{ fontFamily: "'Manrope', sans-serif" }}>{from}</p>
                </div>
                <p className="text-xl text-[#AC2024] font-extralight" style={{ fontFamily: "'Manrope', sans-serif" }}>${cost}</p>
            </div>
            <p className="max-w-72 text-base font-extralight mt-2 lg:mb-8 mb-4">{desc}</p>
            <button className="border-[#AC2024] border py-2 px-12 rounded-md text-[#AC2024] font-extralight text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>Add to Cart</button>
        </section>
    );
}