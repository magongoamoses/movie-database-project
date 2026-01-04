import { useNavigate } from "react-router-dom";
import MovieList from "../components/MovieList";
import ErrorMessage from "../components/ErrorMessage";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    const handleMovieClick = (imdbID) => {
        navigate(`/movie/${imdbID}`);
    };

    if (favorites.length === 0) {
        return (
            <div className="p-4 sm:p-6">
                <ErrorMessage message="No favorite movies yet." />
            </div>
        );
    }

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">
                My Favorites ({favorites.length})
            </h2>
            <MovieList
                movies={favorites}
                onMovieClick={handleMovieClick}
                hasSearched={true}
            />
        </div>
    );
};

export default Favorites;