"use client";
import React from "react";
import Typography from "@/components/shared/typography";

function GiftPageBlue() {
    return (
        <>
            {/* Desktop */}
            <div className="hidden md:block">
                <div className="relative bg-blue-300 py-48">
                    <div className="relative text-center max-w-3xl mx-auto px-4 z-10">
                        <Typography
                            variant="heading"
                            className="text-4xl font-bold text-black mb-6"
                        >
                            Подаряването става <br />
                            толкова{" "}
                            <span className="px-8 py-3 bg-blue-500 text-white text-3xl font-bold rounded-full transform -rotate-3 inline-block">
                                лесно
                            </span>
                        </Typography>
                        <Typography className="text-lg text-gray-500 leading-relaxed">
                            Изпращайте перфектния подарък всеки път. Нашият магазин за подаръци е
                            пълен със стотици водещи марки и е внимателно подбран за всякакви
                            поводи.
                        </Typography>
                    </div>

                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <img src="/gift1.jpg" alt="gift1" className="absolute top-16 left-72 w-20 md:w-36 rounded-xl shadow-lg" />
                        <img src="/gift2.jpg" alt="gift2" className="absolute top-42 left-4 w-20 md:w-24 rounded-xl shadow-lg" />
                        <img src="/gift3.jpg" alt="gift3" className="absolute top-96 left-26 w-20 md:w-36 rounded-xl shadow-lg" />
                        <img src="/gift4.jpg" alt="gift4" className="absolute top-46 right-42 w-20 md:w-36 rounded-xl shadow-lg" />
                        <img src="/gift5.jpg" alt="gift5" className="absolute top-96 right-64 w-20 md:w-24 rounded-xl shadow-lg" />
                        <img src="/gift6.jpg" alt="gift6" className="absolute top-3/4 right-8 w-20 md:w-34 rounded-xl shadow-lg" />
                        <img src="/gift7.jpg" alt="gift7" className="absolute bottom-8 right-1/2 transform -translate-x-1/2 w-20 md:w-24 rounded-xl shadow-lg" />
                        <img src="/gift8.jpg" alt="gift8" className="absolute top-8 left-2/3 transform -translate-x-1/2 w-20 md:w-22 rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <div className="relative bg-blue-300 py-28">
                    <div className="relative text-center max-w-xl mx-auto px-4 z-10">
                        <Typography variant="heading" className="text-lg font-bold text-black mb-4">
                            Подаряването става <br />
                            толкова{" "}
                            <span className="px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full transform -rotate-3 inline-block">
                                лесно
                            </span>
                        </Typography>
                        <Typography className="text-xs text-gray-500 leading-relaxed">
                            Изпращайте перфектния подарък всеки път. Нашият магазин за подаръци е
                            пълен със стотици водещи марки и е внимателно подбран за всякакви
                            поводи.
                        </Typography>
                    </div>

                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <img src="/gift1.jpg" alt="gift1" className="absolute top-4 left-1/5 -translate-x-1/2 w-20 rounded-xl shadow-lg" />
                        <img src="/gift2.jpg" alt="gift2" className="absolute top-34 left-2 w-12 rounded-xl shadow-lg" />
                        <img src="/gift3.jpg" alt="gift3" className="absolute top-66 left-6 w-14 rounded-xl shadow-lg" />
                        <img src="/gift4.jpg" alt="gift4" className="absolute top-26 left-70 w-14 rounded-xl shadow-lg" />
                        <img src="/gift5.jpg" alt="gift5" className="absolute top-62 left-64 w-12 md:w-24 rounded-xl shadow-lg" />
                        <img src="/gift6.jpg" alt="gift6" className="absolute top-76 right-4 w-14 md:w-36 rounded-xl shadow-lg" />
                        <img src="/gift7.jpg" alt="gift7" className="absolute bottom-8 right-38 transform -translate-x-1/2 w-14 md:w-24 rounded-xl shadow-lg" />
                        <img src="/gift8.jpg" alt="gift8" className="absolute top-6 left-2/3 transform -translate-x-1/2 w-16 md:w-22 rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GiftPageBlue;
