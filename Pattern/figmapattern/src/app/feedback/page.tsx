"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/components/shared/typography";
import FeedbackCard from "@/components/shared/feedback-card";
import Button from "@/components/shared/buttons";
import { FeedbackItem, feedbacks as feedbackData } from "@/components/shared/feedback";

/**
 * Feedback Component
 *
 * Renders a responsive carousel of user feedback/testimonials.
 * Displays multiple feedback cards per page depending on screen size:
 *  - Small screens: 1 per view
 *  - Medium screens: 2 per view
 *  - Large screens: 3 per view
 *
 * Users can navigate between pages using previous/next buttons.
 *
 * @component
 * @example
 * import Feedback from "@/components/sections/feedback";
 *
 * function HomePage() {
 *   return <Feedback />;
 * }
 */
function Feedback() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageCount = Math.ceil(feedbackData.length / itemsPerPage);

    const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, pageCount - 1));

    return (
        <div className="w-full bg-purple-300 py-20 relative">

            <div className="relative flex flex-col sm:flex-row items-center px-6 md:px-16 mb-14 gap-6 sm:gap-0 text-center sm:text-left">
                <div className="relative inline-block">
                    <Typography variant="heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Не взимай само нашето <br className="hidden sm:block" /> мнение под внимание
                    </Typography>
                    <svg
                        className="hidden md:block absolute top-1/2 left-full w-[350px] h-32 -translate-y-1/2"
                        style={{ marginLeft: "8px" }}
                        fill="none"
                        viewBox="0 0 350 100"
                    >
                        <path
                            d="M0 50 C80 50, 80 0, 140 50 C200 100, 200 50, 280 50"
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
                    style={{ transform: `translateX(-${(currentPage * 100) / itemsPerPage}%)` }}
                >
                    {feedbackData.map((fb: FeedbackItem, index: number) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-[45%] lg:w-[30%]">
                            <FeedbackCard {...fb} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
