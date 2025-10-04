import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    className = "",
    size = "md",
    variant = "primary",
    radius = "2xl",
}) => {
    const sizeClass = {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
        xl: "px-6 py-4 text-xl",
    }[size];


    const variantClass = {
        primary: "bg-blue-600 text-white hover:bg-blue-600",
        secondary: "bg-gray-600 text-white hover:bg-gray-800",
        accent: "bg-amber-500 text-black hover:bg-amber-500",
        ghost: "bg-transparent text-black hover:bg-gray-400",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-300",
    }[variant];


    const radiusClass = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
    }[radius];

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${sizeClass} ${variantClass} ${radiusClass} font-semibold transition-colors duration-200 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
