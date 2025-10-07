import React from "react";
import { Typography } from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import Link from "next/link";

/**
 * GiftPage Component
 *
 * Renders a promotional section encouraging users to discover unique gifts.
 * The layout is responsive:
 *  - Desktop: large images positioned around the heading
 *  - Mobile: adjusted layout with smaller images and typography
 *
 * Uses absolute positioning for decorative images and responsive typography.
 *
 * @component
 * @example
 * import GiftPage from "@/components/pages/gift-page";
 *
 * function HomePage() {
 *   return <GiftPage />;
 * }
 */
function GiftPage() {
    return (
        <>

            <div className="hidden md:block">
                <div className="bg-white py-48 flex flex-col items-center text-center relative">
                    <img src="/envelope.png" alt="envelope" className="absolute top-6 left-32 w-28 md:w-40 rounded-xl shadow-lg" />
                    <img src="/heart.png" alt="heart1" className="absolute top-20 right-36 w-28 md:w-40 rounded-xl shadow-lg" />
                    <img src="/heart.png" alt="heart2" className="absolute top-2/3 left-24 w-28 md:w-40 rounded-xl shadow-lg" />
                    <img src="/candle.png" alt="candle" className="absolute bottom-20 right-56 w-28 md:w-40 rounded-xl shadow-lg" />

                    <div className="flex flex-col items-center text-center">
                        <Typography variant="heading" className="text-4xl font-bold text-black mb-6">
                            Открийте своя{" "}
                            <span className="px-8 py-3 bg-blue-500 text-white text-3xl font-bold rounded-full transform -rotate-3 inline-block">
                                уникален
                            </span>{" "}
                            подарък<br /> днес и станете част от нашата мисия
                        </Typography>
                        <Typography className="text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
                            We've been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.
                        </Typography>
                        <Button variant="purple" radius="sm" className="mx-auto">
                            <Link href="/main-page">Разгледайте продуктите</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                <div className="relative bg-white py-28 flex flex-col items-center text-center px-4">
                    <div className="absolute top-0 left-4 w-24">
                        <img src="/envelope.png" alt="envelope" className="absolute top-18 left-1/3 -translate-x-1/2 w-20 rounded-xl shadow-lg" />
                    </div>
                    <div className="absolute top-16 right-6 w-24">
                        <img src="/heart.png" alt="heart" className="absolute top-2 left-12 -translate-x-1/2 w-20 rounded-xl shadow-lg" />
                    </div>
                    <div className="absolute top-40 left-10 w-24">
                        <img src="/heart.png" alt="heart" className="absolute top-96 left-8 -translate-x-1/2 w-20 rounded-xl shadow-lg" />
                    </div>
                    <div className="absolute top-60 right-12 w-24">
                        <img src="/candle.png" alt="candle" className="absolute top-70 left-18 -translate-x-1/2 w-20 rounded-xl shadow-lg" />
                    </div>

                    <div className="flex flex-col items-center mt-32 md:mt-72 -translate-y-10 md:-translate-y-0 px-4 text-center">
                        <Typography variant="heading" className="text-2xl font-bold text-black mb-4">
                            Открийте своя{" "}
                            <span className="px-4 py-1 bg-blue-500 text-white text-lg font-bold rounded-full transform -rotate-3 inline-block">
                                уникален
                            </span>{" "}
                            подарък
                            <br />
                            днес и станете част от нашата мисия
                        </Typography>
                        <Typography className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
                            We've been told it is possible to revolutionize the payment industry. We
                            have not reinvented the wheel, we decided to build upon it - successfully.
                        </Typography>
                        <Button variant="purple" radius="sm">
                            <Link href="/main-page">Разгледайте продуктите</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GiftPage;
