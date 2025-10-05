"use client";
import { useState } from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import { products as allProducts } from "@/components/shared/products";

const ProductsPage = () => {
    const featuredProduct = allProducts[0];
    const otherProducts = allProducts.slice(1);

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(otherProducts.length / itemsPerPage);

    const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));

    const paginatedProducts = otherProducts.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <>
            <div className="max-w-[1400px] mx-auto mb-10 px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                        <img
                            src={featuredProduct.image}
                            alt={featuredProduct.name}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        <Typography variant="heading" className="text-2xl font-bold">
                            {featuredProduct.name}
                        </Typography>
                        <Typography className="text-gray-500">Цена: {featuredProduct.price}</Typography>
                        <Typography className="text-gray-700">{featuredProduct.description}</Typography>
                        <Typography className="text-gray-500">Материал: {featuredProduct.material}</Typography>
                        <Typography className="text-gray-500">Размер: {featuredProduct.size}</Typography>
                        <Typography className="text-gray-500">{featuredProduct.reviews} Отзива</Typography>

                        <Button variant="purple" className="w-fit px-6 py-2">
                            Поръчай сега
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-10 relative">
                <Typography variant="heading" className="text-xl md:text-2xl font-bold mb-4">
                    Подобни продукти
                </Typography>

                <div className="absolute top-0 right-[232px] flex gap-2">
                    <Button onClick={handlePrev} disabled={currentPage === 0} variant="purple">
                        &lt;
                    </Button>
                    <Button onClick={handleNext} disabled={currentPage === pageCount - 1} variant="purple">
                        &gt;
                    </Button>
                </div>

                <div className="flex gap-4 overflow-x-auto mt-8">
                    {paginatedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white dark:bg-gray-900 rounded-md p-3 min-w-[180px] flex-shrink-0 flex flex-col items-center gap-1 border border-gray-200 dark:border-gray-700"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-cover rounded-md"
                            />
                            <Typography className="text-sm font-semibold text-center">{product.name}</Typography>
                            <Typography className="text-sm text-gray-500">{product.price}</Typography>
                            <Button variant="purple" className="w-full px-3 py-1 text-xs">
                                Купи Сега
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
