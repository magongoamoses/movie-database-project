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
            <div className="p-6">
                <ErrorMessage message="No favorite movies yet." />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-white text-2xl font-bold mb-4">My Favorites</h2>
            <MovieList
                movies={favorites}
                onMovieClick={handleMovieClick}
                hasSearched={true}
            />
        </div>
    );
};

export default Favorites;