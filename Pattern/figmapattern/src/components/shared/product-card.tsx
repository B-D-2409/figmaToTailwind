"use client";
import React from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    images?: string[];
    description?: string;
    material?: string;
    size?: string;
    reviews?: number;
    isFeatured?: boolean; // за featured продукта
    onBuy?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    price,
    image,
    images,
    description,
    material,
    size,
    reviews,
    isFeatured,
    onBuy,
}) => {
    return (
        <div className={`flex ${isFeatured ? "flex-col lg:flex-row gap-6" : "flex-col"} `}>
            {/* Лява част - за featured продукта показваме голямата снимка и малките под нея */}
            <div className={`${isFeatured ? "flex-1 flex flex-col gap-2" : "flex flex-col items-center gap-1"} `}>
                <img
                    src={image}
                    alt={name}
                    className={`${isFeatured ? "w-full h-auto rounded-lg object-cover" : "w-full h-32 object-cover rounded-md"}`}
                />

                {images && images.length > 0 && (
                    <div className={`${isFeatured ? "flex gap-2 mt-2 w-full" : "flex gap-2 mt-2 w-full justify-center"}`}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${name} ${index + 1}`}
                                className={`${isFeatured ? "flex-1 h-20 sm:h-24 object-cover rounded-md border border-gray-300" : "h-20 sm:h-24 object-cover rounded-md border border-gray-300"}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Дясна част за featured */}
            {isFeatured && (
                <div className="flex-1 flex flex-col gap-4">
                    <Typography variant="heading" className="text-2xl font-bold">
                        {name}
                    </Typography>
                    <Typography className="text-gray-500">Цена: {price}</Typography>
                    {description && <Typography className="text-gray-700">{description}</Typography>}
                    {material && <Typography className="text-gray-500">Материал: {material}</Typography>}
                    {size && <Typography className="text-gray-500">Размер: {size}</Typography>}
                    {reviews !== undefined && <Typography className="text-gray-500">{reviews} Отзива</Typography>}

                    <Button variant="purple" className="w-fit px-6 py-2" onClick={onBuy}>
                        Поръчай сега
                    </Button>
                </div>
            )}

            {/* За подобни продукти */}
            {!isFeatured && (
                <>
                    <Typography className="text-sm font-semibold text-center mt-1">{name}</Typography>
                    <Typography className="text-sm text-gray-500 text-center">{price}</Typography>
                    <Button variant="purple" className="w-full px-3 py-1 text-xs mt-1" onClick={onBuy}>
                        Купи Сега
                    </Button>
                </>
            )}
        </div>
    );
};

export default ProductCard;
