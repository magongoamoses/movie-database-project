import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com";

// Fetch movies by search query
export async function fetchMovies({ title, page = 1 } = {}) {
    try {
        if (!title) return [];

        const url = `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(title)}&page=${page}`;

        const response = await axios.get(url);

        if (response.data.Response === "False") {
            return [];
        }

        return response.data.Search || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

//  Fetch full movie details by IMDb ID
export async function fetchMovieDetails(imdbID) {
    try {
        if (!imdbID) return null;

        const url = `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`;

        const response = await axios.get(url);

        if (response.data.Response === "False") {
            return null;
        }

        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
