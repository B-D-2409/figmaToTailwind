"use client";
import React, { useState } from "react";
import ProductCard from "@/components/shared/product-card";
import SearchBar from "@/components/search-bar/search-bar";
import Typography from "@/components/shared/typography";
import { products as allProducts } from "@/components/shared/products";

const ProductsPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    const handleSearch = (query: string) => {
        const lowerQuery = query.toLowerCase();
        const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(lowerQuery)
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <Typography variant="heading" className="text-center mb-6 text-2xl md:text-3xl">
                Продукти
            </Typography>

            <SearchBar placeholder="Търси продукти по име..." onSearch={handleSearch} />

            <div className="mt-6 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                ) : (
                    <Typography className="text-center text-gray-500 dark:text-gray-400 col-span-full">
                        Няма намерени продукти.
                    </Typography>
                )}
            </div>
        </>
    );
};

export default ProductsPage;
