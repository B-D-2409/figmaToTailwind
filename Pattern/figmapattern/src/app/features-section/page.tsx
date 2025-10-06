"use client";
import Link from "next/link";
import React from "react";
import Typography from "@/components/shared/typography";
import { Handshake, Lightbulb, Award } from "lucide-react";


const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: "Подкрепа на занаятчии",
            description: "Ние сме ангажирани с подкрепата на занаятчии, които създават своите произведения с любов и изключително майсторство.",
            icon: <Handshake className="w-8 h-8 text-purple-600 mx-auto mb-2" />,
        },
        {
            title: "Уникалност и креативност",
            description: "Всеки артикул е ръчно изработен, което гарантира, че няма два напълно еднакви продукта. Това прави подаръка уникален.",
            icon: <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-2 drop-shadow-lg" />,
        },
        {
            title: "Високо качество",
            description: "Ние се ангажираме с предлагането на продукти, които не само изглеждат страхотно, но и са изработени с грижа.",
            icon: <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />,
        },
    ];


    return (
        <div className="my-16 flex flex-col items-center relative">

            <div className="text-center mb-6 relative">
                <div className="inline-block relative">
                    <Typography
                        variant="heading"
                        className="text-2xl font-bold relative inline-block"
                    >
                        С какво се различаваме
                        <svg
                            className="absolute top-1/2 left-full ml-1 sm:ml-2 transform -translate-y-3 w-28 sm:w-36 h-28 sm:h-36"
                            fill="none"
                            viewBox="0 0 100 100"
                        >
                            <path
                                d="M0 0 C25 0, 75 50, 48 68"
                                stroke="#2563EB"
                                strokeWidth="4"
                                strokeDasharray="6 4"
                                fill="transparent"
                            />


                            <path
                                d="M45 60 L40 80 L60 70"
                                stroke="#2563EB"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>



                    </Typography>
                </div>

                <div className="mt-6">
                    <Link href='/products' className="text-blue-600 hover:underline font-medium">
                    <span className="px-8 py-3 bg-blue-600 text-white text-5xl font-bold rounded-full transform -rotate-3 inline-block">
                        Great<span className="text-white text-3xl font-normal">.bg</span>   
                    </span>
                    </Link>
                    <span className="absolute  top-2/3 -translate-y-1/2 text-5xl font-bold text-gray-800">
                        ?
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 p-6 ${index < features.length - 1 ? "md:border-r md:border-black" : ""}`}
                    >
                        {feature.icon}
                        <Typography className="font-semibold text-lg">{feature.title}</Typography>
                        <Typography className="text-gray-600 text-sm">{feature.description}</Typography>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FeaturesSection;
