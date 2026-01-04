import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#1e293b] text-white shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-6 gap-3 sm:gap-0">
                <Link to="/" className="hover:text-gray-300">
                    <h1 className="text-xl sm:text-2xl font-bold">🎬 MovieHub</h1>
                </Link>

                <nav className="flex gap-3 sm:gap-4">
                    <Link to="/" className="text-sm sm:text-base hover:text-gray-300">Home</Link>
                    <Link to="/favorites" className="text-sm sm:text-base hover:text-gray-300">Favorites</Link>
                    <Link to="/about" className="text-sm sm:text-base hover:text-gray-300">About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;