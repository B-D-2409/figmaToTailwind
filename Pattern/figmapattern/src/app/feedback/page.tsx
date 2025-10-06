"use client";
import React, { useState, useEffect } from "react";
import Typography from "@/components/shared/typography";
import FeedbackCard from "@/components/shared/feedback-card";
import Button from "@/components/shared/buttons";

function Feedback() {
    const feedbacks = [
        {
            title: "Страхотни бижута!",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            image: "/sophia.jpg",
            author: "Sophia Moore",
            role: "CEO at Webflow Agency",
        },
        {
            title: "Перфектните подаръци!",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute iure sint amet occaecat cupidatat non proident.",
            image: "/adam.jpg",
            author: "Adam Smith",
            role: "Webflow Developer",
        },
        {
            title: "Супер качество на продукти!",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa sint amet occaecat cupidatat nor.",
            image: "/mike.jpg",
            author: "Mike Warren",
            role: "Developer at BRIX Tem",
        },
        {
            title: "Много любезно обслужване!",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa sint amet occaecat cupidatat nor.",
            image: "/john.jpg",
            author: "John Warren",
            role: "Developer at Amazon Team",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageCount = Math.ceil(feedbacks.length / itemsPerPage);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));

    return (
        <div className="w-full bg-purple-300 py-20 relative">
            <div className="relative flex flex-col sm:flex-row items-center px-6 md:px-16 mb-14 gap-6 sm:gap-0 text-center sm:text-left">
                <div className="relative inline-block">
                    <Typography
                        variant="heading"
                        className="text-2xl sm:text-3xl font-bold text-gray-900"
                    >
                        Не взимай само нашето <br className="hidden sm:block" /> мнение под внимание
                    </Typography>

                    <svg
                        className="hidden md:block absolute top-1/2 left-full w-[350px] h-32 -translate-y-1/2"
                        style={{ marginLeft: "8px" }}
                        fill="none"
                        viewBox="0 0 350 100"
                    >
                        <path
                            d="M0 50 
                            C80 50, 80 0, 140 50
                            C200 100, 200 50, 280 50"
                            stroke="#2563EB"
                            strokeWidth="4"
                            strokeDasharray="6 4"
                            fill="transparent"
                        />
                        <path
                            d="M270 40 L280 50 L270 60"
                            stroke="#2563EB"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="sm:ml-auto flex justify-center sm:justify-end gap-2">
                    <Button onClick={handlePrev} disabled={currentPage === 0} variant="purple" radius="full">
                        &lt;
                    </Button>
                    <Button onClick={handleNext} disabled={currentPage === pageCount - 1} variant="purple" radius="full">
                        &gt;
                    </Button>
                </div>
            </div>

            <div className="w-full overflow-hidden px-4 md:px-12">
                <div
                    className="flex gap-6 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(currentPage * 100) / itemsPerPage}%)`,
                    }}
                >
                    {feedbacks.map((fb, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full sm:w-[45%] lg:w-[30%]`}
                        >
                            <FeedbackCard {...fb} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;

