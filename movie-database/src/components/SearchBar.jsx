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
                placeholder="Search for a movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" >Search</button>
        </form>
    );
};

export default SearchBar;
