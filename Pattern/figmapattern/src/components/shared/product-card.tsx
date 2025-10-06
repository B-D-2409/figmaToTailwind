"use client";
import React, { useState } from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import { Star, Check } from "lucide-react";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    images?: string[];
    description?: string;
    material?: string;
    size?: string;
    reviews?: number;
    isFeatured?: boolean;
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
    const [selectedSize, setSelectedSize] = useState("S");
    const [selectedColor, setSelectedColor] = useState("gold");

    const sizes = ["S", "M", "L" , "XL", "XXL"];
    const colors = [
        { name: "gold", label: "Златен", hex: "#d4af37" },
        { name: "silver", label: "Сребърен", hex: "#c0c0c0" },
        { name: "bronze", label: "Бронзов", hex: "#cd7f32" },
        { name: "platinum", label: "Платина", hex: "#e5e4e2" },
        { name: "rose-gold", label: "Rose Gold", hex: "#b76e79" },
    ];

    return (
        <div className={`flex ${isFeatured ? "flex-col lg:flex-row gap-6" : "flex-col"}`}>
            <div className={`${isFeatured ? "flex-1 flex flex-col gap-2" : "flex flex-col items-center gap-1"}`}>
                <img
                    src={image}
                    alt={name}
                    className={`${isFeatured
                        ? "w-full h-auto rounded-lg object-cover"
                        : "w-full h-32 object-cover rounded-md"
                        }`}
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

            {isFeatured && (
                <div className="flex-1 flex flex-col gap-4">
                    <Typography variant="heading" className="text-2xl font-bold">{name}</Typography>
                    <Typography className="text-gray-500 text-sm">Кат. №: 8418</Typography>
                    <Typography className="text-lg font-semibold text-gray-900 dark:text-white">{price}</Typography>

                    {description && <Typography className="text-gray-700 text-sm">{description}</Typography>}
                    {material && <Typography className="text-gray-500 text-sm">Материал: {material}</Typography>}
                    {size && <Typography className="text-gray-500 text-sm">Размер: {size}</Typography>}

                    {reviews !== undefined && (
                        <div className="flex items-center gap-1 text-yellow-500 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                            <span className="ml-1 text-gray-700 dark:text-gray-300">{reviews} Отзива</span>
                        </div>
                    )}

                    <div>
                        <Typography className="text-sm font-semibold mb-1">Изберете цвят</Typography>
                        <div className="flex gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`relative w-9 h-9 rounded-full border-2 flex items-center justify-center transition ${selectedColor === color.name ? "border-blue-600 ring-2 ring-blue-400" : "border-gray-300 hover:border-gray-400"}`}
                                    style={{ backgroundColor: color.hex }}
                                >
                                    {selectedColor === color.name && <Check size={16} className="text-white drop-shadow" />}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div>
                        <Typography className="text-sm font-semibold mb-1">Изберете размер</Typography>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSelectedSize(s)}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-md border transition ${selectedSize === s ? "border-blue-600 text-black" : "border-gray-400 bg-transparent text-gray-700 hover:bg-gray-100"}`}
                                >
                                    <span className={`w-4 h-4 rounded-full border flex-shrink-0 border-gray-400 ${selectedSize === s ? "bg-purple-600 border-purple-600" : "bg-transparent"}`}></span>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button variant="purple" className="w-fit px-6 py-2 mt-2" onClick={onBuy}>Поръчай сега</Button>
                </div>
            )}

            {!isFeatured && (
                <>
                    <Typography className="text-sm font-semibold text-center mt-1">{name}</Typography>
                    <Typography className="text-sm text-gray-500 text-center">{price}</Typography>
                    <Button variant="purple" className="w-full px-3 py-1 text-xs mt-1" onClick={onBuy}>Купи Сега</Button>
                </>
            )}
        </div>
    );
};

export default ProductCard;
