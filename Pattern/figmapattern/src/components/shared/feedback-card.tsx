
import React from "react";
import { Typography } from "../shared/typography";

/**
 * Props for FeedbackCard component
 */
interface FeedbackCardProps {
    /** Title of the feedback */
    title: string;

    /** Main text or message of the feedback */
    text: string;

    /** Name of the person providing the feedback */
    author: string;

    /** Role or position of the person providing the feedback */
    role: string;

    /** Optional profile image URL */
    image?: string;
}

/**
 * FeedbackCard component
 *
 * This component displays a testimonial or feedback from a user,
 * including title, text, author, role, and optionally a profile image.
 *
 * Example usage:
 * ```tsx
 * <FeedbackCard
 *   title="Amazing product!"
 *   text="I really loved using this. It improved my workflow significantly."
 *   author="Jane Doe"
 *   role="Product Manager"
 *   image="/jane.jpg"
 * />
 * ```
 */
function FeedbackCard({ title, text, author, role, image }: FeedbackCardProps) {
    return (
        <div className="bg-white border-2 border-purple-500 shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300">
            <Typography variant="body" className="text-lg font-semibold text-gray-900 mb-2">
                {title}
            </Typography>
            <Typography className="text-gray-600 text-sm mb-6 leading-relaxed">
                {text}
            </Typography>
            <div className="flex items-center gap-3 mt-4">
                {image && (
                    <img
                        src={image}
                        alt={author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
                    />
                )}
                <div>
                    <Typography className="font-semibold text-gray-800">{author}</Typography>
                    <Typography className="text-sm text-gray-500">{role}</Typography>
                </div>
            </div>
        </div>
    );
}

export default FeedbackCard;
