🎬 Movie Database Application
📌 Overview

The Movie Database Application is a responsive frontend web app built with React that allows users to search for movies and view detailed information such as plot summaries, cast, genres, and ratings.
The application integrates with the OMDB API and demonstrates real-world frontend development practices including API consumption, state management, routing, and component-based architecture.

✨ Features
## Core Features

* Search movies by title
* Display movie list with poster, title, and release year
* View detailed movie information:
  - Plot summary
  - Cast
  - Genre
  - Ratings

* Responsive layout for mobile, tablet, and desktop
* Error handling for empty results and API issues

## Additional Features

* Favorites (watchlist) functionality using localStorage
* Add / remove movies from favorites
* Dedicated Favorites page
* Loading and error states
* Clean, scalable component structure

🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* OMDB API
* Tailwind CSS (for styling)
* React Router
* Axios (for API requests)

🔌 API Used

OMDB API
https://www.omdbapi.com/

🧩 Project Structure (Key Components)

* App – Application root and routing
* SearchBar – Handles user search input
* MovieList – Displays list of movie cards
* MovieCard – Individual movie preview
* MovieDetails – Detailed movie view
* Favorites – Displays saved movies
* ErrorMessage – Handles errors and empty states
* Header & Footer – Layout components
* api/omdb.js – API service layer

🚀 Getting Started

1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. Install dependencies
npm install

3. Setup environment variables

Create a .env file in the root directory:

VITE_OMDB_API_KEY=your_api_key_here

4. Run the development server
npm run dev

🌍 Deployment

The application is deployed using Vercel
🔗 Live Demo: (link here)

🧠 Challenges & Solutions

* OMDB API limitations: No trending endpoint → simulated default movie listings on homepage
* State and event handling: Fixed click navigation by correctly passing props and handlers
* Favorites persistence: Solved using localStorage and shared state management

📈 Future Improvements

- Pagination for search results
- Movie trailers integration
- Sorting and filtering
- Dark / light mode

👤 Author

- Moses Magongoa
- Frontend Developer student
📫 GitHub: (your GitHub link)
