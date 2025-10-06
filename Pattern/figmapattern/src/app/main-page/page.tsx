"use client";
import { useState, useEffect } from "react";
import Typography from "@/components/shared/typography";
import Button from "@/components/shared/buttons";
import { products as allProducts } from "@/components/shared/products";
import ProductCard from "@/components/shared/product-card";
import FeaturesSection from "@/app/features-section/page";
import Feedback from "../feedback/page";
import GiftPage from "../gift-page/page";

function MainPage() {
    const featuredProduct = allProducts[0];
    const otherProducts = allProducts.slice(1);

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 1024 ? 3 : 5);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                <ProductCard
                    isFeatured
                    name={featuredProduct.name}
                    price={featuredProduct.price}
                    image={featuredProduct.image}
                    images={featuredProduct.images}
                    description={featuredProduct.description}
                    material={featuredProduct.material}
                    size={featuredProduct.size}
                    reviews={featuredProduct.reviews}
                    onBuy={() => console.log("Купи featured")}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-10 relative">
                <div className="flex items-center justify-between mb-4">
                    <Typography variant="heading" className="text-xl md:text-2xl font-bold">
                        Подобни продукти
                    </Typography>

                    <div className="flex gap-2 lg:absolute lg:top-0 lg:left-[calc(100%-110px)] lg:transform lg:-translate-x-[26px] lg:-translate-y-1">
                        <Button onClick={handlePrev} disabled={currentPage === 0} variant="purple" radius="full">
                            &lt;
                        </Button>
                        <Button onClick={handleNext} disabled={currentPage === pageCount - 1} variant="purple" radius="full">
                            &gt;
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex gap-4 overflow-x-auto">
                        {paginatedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                material={product.material}
                                size={product.size}
                                reviews={product.reviews}
                                onBuy={() => console.log("Купи", product.name)}
                            />
                        ))}
                    </div>
                    <FeaturesSection />
                </div>
                <Feedback />
                <GiftPage />
            </div>
        </>
    );
};

export default MainPage;
