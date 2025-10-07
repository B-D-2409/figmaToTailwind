"use client";
import { LucideProps } from "lucide-react";

/**
 * Logo component
 *
 * This component renders a custom SVG logo for your application.
 * It accepts all props compatible with Lucide icons, allowing for size,
 * color, and other SVG attribute customization.
 *
 * Example usage:
 * ```tsx
 * <Logo width={64} height={64} className="text-purple-500" />
 * ```
 *
 * @param props - LucideProps to customize the SVG
 */
function Logo(props: LucideProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#9b5de5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >

            <path
                d="M6 14 
                    H42 
                    V40 
                    L24 34 6 40 
                    Z"
                fill="#f3e8ff"
                stroke="#9b5de5"
            />


            <path d="M24 14l8-9 8 9M24 14l-8-9-8 9" stroke="#9b5de5" />


            <path
                d="M24 32
                    C12 22, 12 16, 24 16
                    C36 16, 36 22, 24 32
                    Z"
                fill="#9b5de5"
                stroke="#9b5de5"
            />
        </svg>
    );
}

export default Logo;
