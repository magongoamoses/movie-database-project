import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import ErrorMessage from "../components/ErrorMessage";
import { fetchMovies } from "../services/omdbApi";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (searchTerm) => {
        setLoading(true);
        setError("");
        setMovies([]);

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
        console.log("Movie clicked:", imdbID);
        // Later: navigate to MovieDetails page
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />

            {loading && <p>Loading...</p>}
            {error && <ErrorMessage message={error} />}

            <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </div>
    );
};

export default Home;
