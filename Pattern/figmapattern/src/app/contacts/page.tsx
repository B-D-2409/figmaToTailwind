import React from "react";
import { Typography } from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * ContactPage Component
 *
 * This component renders the **Contact** page for Great.bg.
 * It provides users with contact information (email, phone, and address)
 * and includes a styled contact form where they can send messages.
 *
 * The layout is responsive and uses TailwindCSS for styling,
 * with dark mode support and icon components from `lucide-react`.
 *
 * @component
 * @example
 * // Example usage:
 * import ContactPage from "@/pages/contact";
 *
 * function App() {
 *   return <ContactPage />;
 * }
 *
 * @returns {JSX.Element} The rendered contact page with contact details and a message form.
 */
function ContactPage()  {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">


                <Typography
                    variant="heading"
                    className="text-center text-3xl md:text-4xl font-semibold mb-6"
                >
                    Контакти
                </Typography>


                <Typography
                    variant="body"
                    className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Свържете се с нас по всяко време. Попълнете формата или използвайте някой от начините за връзка по-долу.
                </Typography>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
                    <div className="flex flex-col items-center">
                        <Mail className="w-8 h-8 text-blue-500 mb-3" />
                        <Typography variant="subheading">Имейл</Typography>
                        <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                            office@ada-soft.bg
                        </Typography>
                    </div>

                    <div className="flex flex-col items-center">
                        <Phone className="w-8 h-8 text-blue-500 mb-3" />
                        <Typography variant="subheading">Телефон</Typography>
                        <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                            📞 +359 886 299 300
                        </Typography>
                    </div>

                    <div className="flex flex-col items-center">
                        <MapPin className="w-8 h-8 text-blue-500 mb-3" />
                        <Typography variant="subheading">Адрес</Typography>
                        <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                            Poligona, bl.43, ent.1-Offices, Office 5 Sofia 1750, Bulgaria
                        </Typography>
                    </div>
                </div>


                <form className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                                Име
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Вашето име"
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
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Съобщение
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            placeholder="Напишете вашето съобщение..."
                        ></textarea>
                    </div>


                    <div className="flex justify-center">
                        <Button
                            variant="primary"
                            size="md"
                            radius="xl"
                            className="px-8 py-3 text-lg"
                        >
                            Изпрати съобщение
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
