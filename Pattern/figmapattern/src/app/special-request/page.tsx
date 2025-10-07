import React from "react";
import { Typography } from "@/components/shared/typography";
import Button from "@/components/shared/buttons";

/**
 * SpecialRequestPage Component
 *
 * Renders a full-page form for users to submit a custom or special request.
 * Includes fields for name, email, and the request message.
 * The page has a responsive, centered layout with light/dark theme support.
 *
 * @component
 * @example
 * import SpecialRequestPage from "@/app/special-request/page";
 *
 * function App() {
 *   return <SpecialRequestPage />;
 * }
 *
 * @returns {JSX.Element} The rendered special request page
 */
const SpecialRequestPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">

                <Typography
                    variant="heading"
                    className="text-center text-3xl md:text-4xl font-semibold mb-6"
                >
                    Специален допир
                </Typography>

                <Typography
                    variant="body"
                    className="text-center text-gray-600 dark:text-gray-300 mb-8"
                >
                    Моля, попълнете формата по-долу, за да изпратите специален въпрос. Нашият екип ще се свърже с вас възможно най-скоро.
                </Typography>


                <form className="space-y-6">

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Име и Фамилия
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Вашето име"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Вашето Запитване
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            placeholder="Обясни своето запитване тук..."
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            variant="primary"
                            size="md"
                            radius="xl"
                            className="px-8 py-3 text-lg"
                        >
                            Изпрати Запитване
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpecialRequestPage;
