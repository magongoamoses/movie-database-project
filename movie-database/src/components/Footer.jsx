const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center bg-gray-800 text-gray-400 py-4 sm:py-6 px-4">
            <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm">
                    &copy; {currentYear} MovieFinder. All rights reserved.
                </p>
                <p className="text-xs sm:text-sm">
                    Powered by{" "}
                    <a
                        href="http://www.omdbapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
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