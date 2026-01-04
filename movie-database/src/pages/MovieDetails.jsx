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
    if (error) return <p className="text-red-400 text-center p-4 text-sm sm:text-base">{error}</p>;
    if (!movie) return null;

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <Link
                    to="/"
                    className="text-blue-400 hover:text-blue-300 text-sm sm:text-base"
                >
                    ← Back to search
                </Link>
                <button
                    onClick={() =>
                        isFavorite(movie.imdbID)
                            ? removeFavorite(movie.imdbID)
                            : addFavorite(movie)
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
                >
                    {isFavorite(movie.imdbID)
                        ? "Remove from Favorites"
                        : "Add to Favorites"}
                </button>
            </div>

            <div className="flex flex-col items-center">
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                    alt={movie.Title}
                    className="w-full sm:w-80 md:w-96 rounded-lg shadow-lg mb-6"
                />
                <div className="text-gray-400 w-full space-y-2 sm:space-y-3">
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                        {movie.Title}
                    </h1>
                    <p className="text-sm sm:text-base">
                        <strong className="text-white">Year:</strong> {movie.Year}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong className="text-white">Genre:</strong> {movie.Genre}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong className="text-white">Actors:</strong> {movie.Actors}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong className="text-white">Plot:</strong> {movie.Plot}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong className="text-white">IMDB Rating:</strong> {movie.imdbRating}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;