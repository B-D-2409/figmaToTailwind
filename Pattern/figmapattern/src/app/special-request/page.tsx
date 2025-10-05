import React from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";

const SpecialRequestPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
            
                <Typography
                    variant="heading"
                    className="text-center text-3xl md:text-4xl font-semibold mb-6"
                >
                    Специален Допит
                </Typography>
                <Typography
                    variant="body"
                    className="text-center text-gray-600 dark:text-gray-300 mb-8"
                >
                    Моля, попълнете формата по-долу, за да направите индивидуално запитване.
                    Нашият екип ще се свърже с вас възможно най-скоро.
                </Typography>

            
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Име и фамилия
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Въведете вашето име"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Имейл
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Вашето запитване
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            placeholder="Опишете вашата идея или специална заявка..."
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            variant="primary"
                            size="md"
                            radius="xl"
                            className="px-8 py-3 text-lg"
                        >
                            Изпрати запитване
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpecialRequestPage;
