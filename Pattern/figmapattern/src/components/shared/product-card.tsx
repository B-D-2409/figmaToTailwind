"use client";
import React from "react";
import Button from "@/components/shared/buttons";
import Typography from "@/components/shared/typography";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    id: string | number;
    name: string;
    price: string;
    image: string;
    description?: string;
    category?: string;
    manufacturer?: string;
    material?: string;
    size?: string;
    reviews?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    description,
    category,
    manufacturer,
    material,
    size,
    reviews,
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer flex flex-col md:flex-row w-full border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-white dark:bg-gray-800"
        >
            {/* Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 p-6 flex flex-col gap-3">
                <Typography variant="heading">{name}</Typography>

                {category && (
                    <Typography variant="subheading" className="text-gray-500 dark:text-gray-400">
                        Категория: {category}
                    </Typography>
                )}
                {manufacturer && (
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Производител: {manufacturer}
                    </Typography>
                )}
                {description && <Typography variant="body">{description}</Typography>}
                {material && (
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Материал: {material}
                    </Typography>
                )}
                {size && (
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        Размер: {size}
                    </Typography>
                )}
                {reviews !== undefined && (
                    <Typography variant="body" className="text-gray-600 dark:text-gray-300">
                        {reviews} Отзива
                    </Typography>
                )}

                <div className="mt-auto flex flex-wrap gap-3">
                    <Button size="sm" variant="primary" radius="xl">
                        Виж детайли
                    </Button>
                    <Button size="sm" variant="outline" radius="xl">
                        Добави в количка
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
