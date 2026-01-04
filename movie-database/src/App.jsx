import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="flex flex-col min-h-screen  bg-[#0f172a]" >
          <Header />
          <main className="flex-grow" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
