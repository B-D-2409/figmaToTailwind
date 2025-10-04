import React from "react";
import Typography from "@/components/shared/typography";

const CorporateClientsPage = () => {
    return (
        <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <Typography variant="heading" className="text-center mb-6">Корпоративни Клиенти</Typography>
            <Typography variant="body" className="text-center text-gray-700 dark:text-gray-300">
                Тук ще се показва информация за корпоративни клиенти и специални оферти.
            </Typography>
        </main>
    );
};

export default CorporateClientsPage;
