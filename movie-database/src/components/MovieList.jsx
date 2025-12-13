import MovieCard from "./MovieCard";
import ErrorMessage from "./ErrorMessage";

const MovieList = ({ movies, onMovieClick }) => {
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