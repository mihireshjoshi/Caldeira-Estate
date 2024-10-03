"use client";

import Merch from "./Merch";

export default function Shop() {
    return (
        <section className="flex flex-row flex-wrap w-full lg:px-20 items-start justify-between">
            <Merch 
                name="Caldeira Coffee Mug"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_a.png"
                cost={100}
            />
            <Merch 
                name="Caldeira Cap"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_b.png"
                cost={100}
            />
            <Merch 
                name="Caldeira Hoodie"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_c.png"
                cost={100}
            />
            <Merch 
                name="Caldeira T-Shirt"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_d.png"
                cost={100}
            />
            <Merch 
                name="Caldeira Beanie"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_e.png"
                cost={100}
            />
            <Merch 
                name="Caldeira Unisex Tote Bag"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                src="/images/merch_f.png"
                cost={100}
            />
        </section>
    );
}