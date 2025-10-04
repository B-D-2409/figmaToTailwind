"use client";

import { useRouter, useParams } from "next/navigation";
import ProductCard from "@/components/shared/product-card";
import Button from "@/components/shared/buttons";
import Typography from "@/components/shared/typography";

const ProductDetail = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const product = {
        id,
        name: "Super Car",
        price: "$120,000",
        image: "/example-car.jpg",
        description:
            "This is a detailed description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };

    return (
        <main className="min-h-screen p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 md:h-full object-cover rounded-2xl shadow-lg"
                />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <Typography variant="heading">{product.name}</Typography>
                <Typography variant="subheading" className="text-green-600">
                    {product.price}
                </Typography>
                <Typography variant="body">{product.description}</Typography>
                <Button size="md" variant="primary" radius="2xl" onClick={() => alert("Added to cart")}>
                    Add to Cart
                </Button>
                <Button
                    size="md"
                    variant="outline"
                    radius="2xl"
                    onClick={() => router.push("/")}
                >
                    Back to Products
                </Button>
            </div>
        </main>
    );
};

export default ProductDetail;
