import React from "react";
import Typography from "@/components/shared/typography";

const SpecialRequestPage = () => {
    return (
        <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <Typography variant="heading" className="text-center mb-6">Специален Допит</Typography>
            <Typography variant="body" className="text-center text-gray-700 dark:text-gray-300">
                Тук клиентите могат да направят специални запитвания. В момента това е placeholder страница.
            </Typography>
        </main>
    );
};

export default SpecialRequestPage;
