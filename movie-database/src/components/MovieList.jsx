import MovieCard from "./MovieCard";
import ErrorMessage from "./ErrorMessage";

const MovieList = ({ movies, onMovieClick, hasSearched }) => {
    if (!hasSearched) {
        return <p className="text-center mt-8">Search for a movie to get started!</p>;
    }

    if (!movies || movies.length === 0) {
        return (
            <ErrorMessage message="No movies found. Try a different search!" />
        );
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
            ))}
        </div>
    );
};

export default MovieList;