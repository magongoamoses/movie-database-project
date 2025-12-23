const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={() => onClick(movie.imdbID)} >
            <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} />
            <div className="text-gray-400">
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;

