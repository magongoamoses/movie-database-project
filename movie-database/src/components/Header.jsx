import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <div className="flex justify-between items-center px-6 py-6" >
                <Link to="/">
                    <h1>🎬 MovieFinder</h1>
                </Link>

                <nav className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>


        </header>
    );
};

export default Header;