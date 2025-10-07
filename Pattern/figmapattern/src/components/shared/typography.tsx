"use client";
import React from "react";

/**
 * Props for the Typography component
 */
export interface TypographyProps {
    /** The content to display */
    children: React.ReactNode;
    /** Style variant of the text */
    variant?: "heading" | "subheading" | "body" | "caption";
    /** Additional CSS classes */
    className?: string;
}

/**
 * Typography component for consistent text styling.
 *
 * @param {React.ReactNode} children - The content to display.
 * @param {"heading" | "subheading" | "body" | "caption"} [variant="body"] - The text variant to use.
 * @param {string} [className=""] - Additional CSS classes to apply.
 * @returns React.ReactElement
 *
 * @example
 * <Typography variant="heading">Hello World</Typography>
 * <Typography variant="body" className="text-gray-700">This is body text</Typography>
 */
export function Typography({
    children,
    variant = "body",
    className = "",
}: TypographyProps): React.ReactElement {
    const variantClass = {
        heading: "text-2xl sm:text-3xl md:text-4xl font-bold",
        subheading: "text-lg sm:text-xl md:text-2xl font-semibold",
        body: "text-base sm:text-base md:text-lg",
        caption: "text-sm text-gray-500",
    }[variant];

    return React.createElement(
        "p",
        { className: `${variantClass} ${className}` },
        children
    );
}
