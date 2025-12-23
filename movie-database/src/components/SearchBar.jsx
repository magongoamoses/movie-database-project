import { useState } from "react"

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchTerm.trim()) return;
        onSearch(searchTerm.trim());
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4" >
            <input
                type="text"
                placeholder="🔍 Search for a movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-3xl w-150 text-center"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
