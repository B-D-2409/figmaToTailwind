import React from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";

const ContactPage = () => {
    return (
        <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center gap-6">
            <Typography variant="heading" className="text-center mb-4">Контакти</Typography>
            <Typography variant="body" className="text-center text-gray-700 dark:text-gray-300 max-w-xl">
                Свържете се с нас чрез имейл или телефон. Това е placeholder страница.
            </Typography>
            <div className="flex flex-wrap gap-3">
                <Button size="md" variant="primary" radius="2xl">Изпрати имейл</Button>
                <Button size="md" variant="secondary" radius="2xl">Обади се</Button>
            </div>
        </main>
    );
};

export default ContactPage;
