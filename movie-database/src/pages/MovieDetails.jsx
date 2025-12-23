import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../services/omdbApi";
import LoadingSpinner from "../components/LoadingSpinner";
import { useFavorites } from "../context/FavoritesContext";

const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    useEffect(() => {
        const getMovie = async () => {
            setLoading(true);
            setError("");

            try {
                const data = await fetchMovieDetails(imdbID);
                if (!data) setError("Movie not found.");
                else setMovie(data);
            } catch (err) {
                setError("Something went wrong.");
            } finally {
                setLoading(false);
            }
        };

        getMovie();
    }, [imdbID]);

    if (loading) return <LoadingSpinner />;
    if (error) return <p>{error}</p>;
    if (!movie) return null;

    return (
        <div>
            <Link to="/">← Back to search</Link>
            <button
                onClick={() =>
                    isFavorite(movie.imdbID)
                        ? removeFavorite(movie.imdbID)
                        : addFavorite(movie)
                }
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {isFavorite(movie.imdbID)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
            </button>

            <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} />
            <div className="text-gray-400">
                <h1>{movie.Title}</h1>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
