import React from "react";
import Typography from "@/components/shared/typography";
import Image from "next/image";

const partners = [
    { name: "TechNova", logo: "/images/partners/technova.png" },
    { name: "GreenWave", logo: "/images/partners/greenwave.png" },
    { name: "SkyWorks", logo: "/images/partners/skyworks.png" },
    { name: "ArtVision", logo: "/images/partners/artvision.png" },
    { name: "BuildCore", logo: "/images/partners/buildcore.png" },
    { name: "NextEra", logo: "/images/partners/nextera.png" },
];

const PartnersPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col items-center">
            <Typography
                variant="heading"
                className="text-center text-3xl md:text-4xl font-semibold mb-6"
            >
                Нашите Партньори
            </Typography>

            <Typography
                variant="body"
                className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-12"
            >
                Работим с водещи компании, които споделят нашите ценности и стремеж към качество.
            </Typography>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl w-full place-items-center">
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 w-40 h-40"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={120}
                            height={120}
                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center max-w-3xl">
                <Typography
                    variant="subheading"
                    className="text-gray-800 dark:text-gray-100 mb-4 text-xl"
                >
                    Искате да станете наш партньор?
                </Typography>
                <Typography
                    variant="body"
                    className="text-gray-600 dark:text-gray-300 mb-6"
                >
                    Свържете се с нас и открийте възможностите за съвместна работа.
                </Typography>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                    Свържете се с нас
                </a>
            </div>
        </div>
    );
};

export default PartnersPage;
