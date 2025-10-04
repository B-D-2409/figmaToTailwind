"use client";
import React, { useState } from "react";

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Търси...", onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (onSearch) onSearch(value);
    };

    return (
        <div className="flex items-center w-full max-w-md mx-auto">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                className="flex-1 px-4 py-2 rounded-l-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default SearchBar;
