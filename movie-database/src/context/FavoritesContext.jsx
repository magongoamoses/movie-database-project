import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "favorite_movies";

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within FavoritesProvider");
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    console.log("FavoritesProvider rendered, favorites:", favorites);

    // Load favorites from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        console.log("Loading from localStorage:", stored);
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        console.log("Saving to localStorage:", favorites);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        console.log("Adding favorite:", movie);
        console.log("Current favorites before add:", favorites);
        if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
            const newFavorites = [...favorites, movie];
            console.log("New favorites after add:", newFavorites);
            setFavorites(newFavorites);
        } else {
            console.log("Movie already in favorites");
        }
    };

    const removeFavorite = (imdbID) => {
        console.log("Removing favorite:", imdbID);
        setFavorites(favorites.filter((movie) => movie.imdbID !== imdbID));
    };

    const isFavorite = (imdbID) => {
        const result = favorites.some((movie) => movie.imdbID === imdbID);
        console.log(`Is ${imdbID} favorite?`, result);
        return result;
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};