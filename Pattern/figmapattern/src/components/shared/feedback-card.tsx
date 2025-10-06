"use client";
import React from "react";
import Typography from "@/components/shared/typography";

interface FeedbackCardProps {
    title: string;
    text: string;
    author: string;
    role: string;
    image?: string;
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({ title, text, author, role, image }) => {
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
};

export default FeedbackCard;
