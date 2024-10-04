"use client";

import List from "./List";

interface Context{
    title: string;
    context: string;
    contextBold: string;
}

export default function Content({title, context, contextBold}: Context) {
    return (
        <section className="min-h-[960px] flex flex-col items-center justify-between pt-24" style={{ backgroundImage: "url('/images/partner_list_bg.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="mx-auto flex flex-col items-center text-center gap-12">
                <h2 style={{ fontFamily: "'Boska', serif", whiteSpace: 'pre-line' }} className="lg:text-[64px] md:text-[58px] text-5xl lg:w-[90%] md:w-[70%] w-[85%] font-light text-[#262717]">{title}</h2>
                <div className="flex flex-col items-center  gap-2">
                    <p style={{ fontFamily: "'Manrope', sans-serif" }} className="lg:w-[65%] md:w-[65%] w-[80%] text-base font-light">{context}</p>
                    <p style={{ fontFamily: "'Manrope', sans-serif", whiteSpace: 'pre-line' }} className="lg:w-[80%] md:w-[80%] w-[94%] text-base font-extrabold ">{contextBold}</p>
                </div>
            </div>
            <div className="w-[100%]">
                <List 
                    color="#515245"
                />
            </div>
        </section>
    );
}