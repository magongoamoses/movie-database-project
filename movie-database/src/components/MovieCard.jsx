const MovieCard = ({ movie, onClick }) => {
    return (
        <div
            onClick={() => onClick(movie.imdbID)}
            className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity w-full sm:w-48 md:w-56 lg:w-64"
        >
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                alt={movie.Title}
                className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover"
            />
            <div className="p-3 sm:p-4">
                <h2 className="text-white font-semibold truncate text-sm sm:text-base">
                    {movie.Title}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;