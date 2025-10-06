"use client";
import React from "react";
import Typography from "@/components/shared/typography";

function GiftPage() {
    return (
        <div className="relative bg-blue-300 py-40 md:py-48">
            <div className="relative text-center max-w-3xl mx-auto px-4 z-10">
                <Typography variant="heading" className="text-4xl md:text-4xl font-bold text-black mb-6">
                    Подаряването става<br />толкова{" "}
                    <span className="px-8 py-3 bg-blue-500 text-white text-3xl font-bold rounded-full transform -rotate-3 inline-block">
                        лесно
                    </span>
                </Typography>
                <Typography className="text-lg md:text-l text-gray-500 leading-relaxed">
                    Изпращайте перфектния подарък всеки път. Нашият магазин за<br /> подаръци е пълен със стотици водещи марки и е внимателно подбран<br /> за всякакви поводи.
                </Typography>
            </div>

            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img
                    src="/gift8.jpg"
                    alt="gift8"
                    className="absolute top-8 left-2/3 transform -translate-x-1/2 w-20 md:w-22 rounded-xl shadow-lg"
                />
                <img
                    src="/gift1.jpg"
                    alt="gift1"
                    className="absolute top-16 left-72 w-20 md:w-36 rounded-xl shadow-lg"
                />
                <img
                    src="/gift2.jpg"
                    alt="gift2"
                    className="absolute top-42 left-4 w-20 md:w-24 rounded-xl shadow-lg"
                />
                <img
                    src="/gift3.jpg"
                    alt="gift3"
                    className="absolute top-96 left-26 w-20 md:w-36 rounded-xl shadow-lg"
                />
            </div>
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img
                    src="/gift4.jpg"
                    alt="gift4"
                    className="absolute top-46 right-42 w-20 md:w-36 rounded-xl shadow-lg"
                />
                <img
                    src="/gift5.jpg"
                    alt="gift5"
                    className="absolute top-96 right-64 w-20 md:w-24 rounded-xl shadow-lg"
                />
                <img
                    src="/gift6.jpg"
                    alt="gift6"
                    className="absolute top-3/4 right-8 w-20 md:w-36 rounded-xl shadow-lg"
                />
                <img
                    src="/gift7.jpg"
                    alt="gift7"
                    className="absolute bottom-8  right-1/2 transform -translate-x-1/2 w-20 md:w-24 rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
}

export default GiftPage;
