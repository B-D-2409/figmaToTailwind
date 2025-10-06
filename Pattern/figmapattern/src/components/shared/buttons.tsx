"use client";
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline" | "purple";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
    size = "md",
    variant = "ghost",
    radius = "2xl",
}) => {
    const sizeClass: Record<NonNullable<ButtonProps["size"]>, string> = {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
        xl: "px-6 py-4 text-xl",
    };

    const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none",
        secondary: "bg-white tex-black disabled:opacity-50 disabled:pointer-events-none",
        accent: "bg-amber-500 text-black hover:bg-amber-500 disabled:opacity-50 disabled:pointer-events-none",
        ghost: "bg-transparent text-inherit hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none",
        purple: "bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none",
    };

    const radiusClass: Record<NonNullable<ButtonProps["radius"]>, string> = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${sizeClass[size]} ${variantClass[variant]} ${radiusClass[radius]} font-semibold transition-colors duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
