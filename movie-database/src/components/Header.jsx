import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center" >
                <Link to="/">
                    <h1>🎬 MovieFinder</h1>
                </Link>

                <nav className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>


        </header>
    );
};

export default Header;