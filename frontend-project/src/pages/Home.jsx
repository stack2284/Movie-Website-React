import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import './Home.css';
import { searchMovies, getPopularMovies } from '../services/api';
function Home() {
    const [seachQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularMovies();
                setMovies(moviesData);
            } catch (error) {
                console.log(error);
                setError("Failed to load...");
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    const handelSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${seachQuery}`);
    };
    return (
        <div className="home">
            <form onSubmit={handelSearch} className="search-form">
                <input
                    type="text"
                    placeholder="seach for titles"
                    className="search-input"
                    value={seachQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        (<MovieCard key={movie.id} movie={movie} />)
                )}
            </div>
        </div>
    )
}
export default Home;