const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center">
            <div>
                <p>&copy; {currentYear} MovieFinder. All rights reserved.</p>
                <p>
                    Powered by{" "}
                    <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" >
                        OMDb API
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;