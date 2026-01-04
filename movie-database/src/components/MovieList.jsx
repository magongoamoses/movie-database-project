import MovieCard from "./MovieCard";
import ErrorMessage from "./ErrorMessage";

const MovieList = ({ movies, onMovieClick, hasSearched }) => {
    if (!hasSearched) {
        return (
            <p className="text-center mt-8 text-gray-400 px-4 text-sm sm:text-base">
                Search for a movie to get started!
            </p>
        );
    }

    if (!movies || movies.length === 0) {
        return <ErrorMessage message="No movies found. Try a different search!" />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 mt-8">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
            ))}
        </div>
    );
};

export default MovieList;