import React from "react";
import Typography from "@/components/shared/typography";

const BlogPage = () => {
    return (
        <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <Typography variant="heading" className="text-center mb-6">
                Блог
            </Typography>

            <div className="max-w-4xl mx-auto">
                <Typography variant="body" className="text-center text-gray-700 dark:text-gray-300 mb-4">
                    Добре дошли в нашия блог! Тук ще публикуваме новини, статии и интересни материали.
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-white dark:bg-gray-800 cursor-pointer"
                        >
                            <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <span className="text-gray-500 dark:text-gray-400">Image {index + 1}</span>
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <Typography variant="subheading">Примерен пост #{index + 1}</Typography>
                                <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                                    Това е кратко описание на примерен блог пост. Може да съдържа текст, линкове и други елементи.
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default BlogPage;
