"use client";
import React from "react";

interface TextProps {
    children: React.ReactNode;
    variant?: "heading" | "subheading" | "body" | "caption";
    className?: string;
}

const Typography: React.FC<TextProps> = ({ children, variant = "body", className = "" }) => {
    const variantClass = {
        heading: "text-2xl sm:text-3xl md:text-4xl font-bold",
        subheading: "text-lg sm:text-xl md:text-2xl font-semibold",
        body: "text-base sm:text-base md:text-lg",
        caption: "text-sm text-gray-500",
    }[variant];

    return <p className={`${variantClass} ${className}`}>{children}</p>;
};

export default Typography;
