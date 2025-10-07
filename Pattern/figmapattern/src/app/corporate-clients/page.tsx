import React from "react";
import { Typography } from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import { Building2, Users, Gift } from "lucide-react";

/**
 * CorporateClientsPage Component
 *
 * This component renders the **Corporate Clients** page of Great.bg.
 * It highlights the benefits and services offered to corporate clients,
 * including personalized solutions, long-term partnerships, and special offers.
 * It also contains a call-to-action section to encourage businesses to get in touch.
 *
 * Layout is responsive and styled with TailwindCSS, including dark mode support.
 *
 * @component
 * @example
 * // Example usage:
 * import CorporateClientsPage from "@/pages/corporate-clients";
 *
 * function App() {
 *   return <CorporateClientsPage />;
 * }
 *
 * @returns {JSX.Element} The rendered corporate clients page with info cards and CTA section.
 */
function CorporateClientsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 flex flex-col items-center">

            <Typography
                variant="heading"
                className="text-center text-3xl md:text-4xl font-semibold mb-6"
            >
                Корпоративни Клиенти
            </Typography>


            <Typography
                variant="body"
                className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-12"
            >
                Нашите корпоративни клиенти получават персонализирани предложения, отстъпки и възможности за дългосрочно партньорство.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-16">

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
                    <Building2 className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                    <Typography variant="subheading" className="mb-3">
                        Индивидуални решения
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Предлагаме персонализирани продукти и услуги, съобразени с нуждите на вашия бизнес.
                    </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
                    <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                    <Typography variant="subheading" className="mb-3">
                        Дългосрочни партньорства
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Работим с корпоративни клиенти по договори с преференциални условия и постоянна поддръжка.
                    </Typography>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
                    <Gift className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                    <Typography variant="subheading" className="mb-3">
                        Специални оферти
                    </Typography>
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Получете отстъпки, бонуси и ексклузивни предложения за корпоративни клиенти.
                    </Typography>
                </div>
            </div>

            <div className="bg-blue-600 dark:bg-blue-700 text-white py-12 px-8 rounded-2xl shadow-xl text-center max-w-5xl w-full">
                <Typography
                    variant="heading"
                    className="text-2xl md:text-3xl font-semibold mb-4"
                >
                    Искате да станете наш корпоративен партньор?
                </Typography>
                <Typography
                    variant="body"
                    className="text-blue-100 max-w-2xl mx-auto mb-8"
                >
                    Свържете се с нашия екип и получете оферта, съобразена с нуждите на вашия бизнес.
                </Typography>
                <Button
                    size="lg"
                    variant="secondary"
                    radius="2xl"
                    className=" text-blue-600 hover:bg-gray-100"
                >
                    Свържете се с нас
                </Button>
            </div>
        </div>
    );
};

export default CorporateClientsPage;
