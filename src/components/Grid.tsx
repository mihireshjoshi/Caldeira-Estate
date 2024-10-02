"use client";

import Image from "next/image";

export default function Grid() {
    return (
        <section className="flex flex-col items-center gap-5 my-20 lg:mx-0 md:mx-0 sm:mx-0 mx-5">
            <div className="flex flex-row flex-wrap gap-5">
                <Image 
                    width={300}
                    height={200}
                    alt="img"
                    src={'/images/group-1.png'}
                />
                <Image 
                    width={460}
                    height={200}
                    alt="img"
                    src={'/images/group-2.png'}
                />
                <Image 
                    width={140}
                    height={200}
                    alt="img"
                    src={'/images/group-3.png'}
                />
                <Image 
                    width={300}
                    height={200}
                    alt="img"
                    src={'/images/group-4.png'}
                />
            </div>
            <div className="flex flex-row flex-wrap gap-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row flex-wrap gap-5">
                        <Image 
                            width={460}
                            height={200}
                            alt="img"
                            src={'/images/group-5.png'}
                        />
                        <Image 
                            width={140}
                            height={200}
                            alt="img"
                            src={'/images/group-6.png'}
                        />
                    </div>
                    <div className="flex flex-row flex-wrap gap-5">
                        <Image 
                            width={140}
                            height={200}
                            alt="img"
                            src={'/images/group-9.png'}
                        />
                        <Image 
                            width={140}
                            height={200}
                            alt="img"
                            src={'/images/group-10.png'}
                        />
                        <Image 
                            width={300}
                            height={200}
                            alt="img"
                            src={'/images/group-11.png'}
                        />
                    </div>
                </div>
                <div>
                    <Image 
                        width={300}
                        height={420}
                        alt="img"
                        src={'/images/group-7.png'}
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <Image 
                        width={300}
                        height={200}
                        alt="img"
                        src={'/images/group-8.png'}
                    />
                    <Image 
                        width={300}
                        height={200}
                        alt="img"
                        src={'/images/group-12.png'}
                    />
                </div>
            </div>
        </section>
    );
}