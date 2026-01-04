import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        onSearch(searchTerm.trim());
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 px-4">
            <input
                type="text"
                placeholder="🔍 Search for a movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 px-4 py-2 sm:py-3 rounded-3xl w-full sm:w-96 text-center text-sm sm:text-base"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;