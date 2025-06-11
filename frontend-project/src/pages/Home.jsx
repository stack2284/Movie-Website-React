import { useState, useEffect } from "react";
import './Home.css';
import { searchMovies, getPopularMovies } from '../services/api';
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getPopularMovies();
                setPopularMovies(moviesData);
            } catch (error) {
                console.log(error);
                setError("Failed to load...");
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true);
        try {
            const results = await searchMovies(searchQuery);
            setSearchResults(results);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to search...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>

                {loading && <div className="loading">Loading...</div>}
                {error && <div className="error">Error: {error}</div>}
                
                {!loading && !error && (
                    <div className="movies-section">
                        {searchQuery ? (
                            <Carousel 
                                title={`Search Results for "${searchQuery}"`} 
                                movies={searchResults} 
                            />
                        ) : (
                            <Carousel 
                                title="Popular Movies" 
                                movies={popularMovies} 
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;