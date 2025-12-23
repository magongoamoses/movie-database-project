const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center bg-gray-800 text-gray-400">
            <div>
                <p>&copy; {currentYear} MovieFinder. All rights reserved.</p>
                <p>
                    Powered by{" "}
                    <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        OMDb API
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;