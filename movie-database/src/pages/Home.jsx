import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import ErrorMessage from "../components/ErrorMessage";
import { fetchMovies } from "../services/omdbApi";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (searchTerm) => {
        setLoading(true);
        setError("");
        setMovies([]);
        setHasSearched(true);

        try {
            const results = await fetchMovies({ title: searchTerm });
            if (results.length === 0) {
                setError("No movies found.");
            } else {
                setMovies(results);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleMovieClick = (imdbID) => {
        navigate(`/movie/${imdbID}`);
    };

    return (
        <div className="px-2 sm:px-4 py-4 sm:py-8 min-h-screen flex flex-col justify-center">
            <h1 className="text-white text-6xl sm:text-4xl font-bold mb-8 text-center">🎬 MovieHub</h1>

            <div className="w-full mb-10">
                <SearchBar onSearch={handleSearch} />
            </div>

            {loading && <div className="mt-4"><LoadingSpinner /></div>}
            {error && <div className="mt-4"><ErrorMessage message={error} /></div>}

            <MovieList movies={movies} onMovieClick={handleMovieClick} hasSearched={hasSearched} loading={loading} />
        </div>
    );
};

export default Home;