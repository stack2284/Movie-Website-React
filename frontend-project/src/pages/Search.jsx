import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../services/api';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';
import GradientBackground from '../components/GradientBackground';
import './Home.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const query = useQuery().get('q') || '';
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;
        setLoading(true);
        setError(null);
        searchMovies(query)
            .then(data => setResults(data))
            .catch(() => setError('Failed to load results.'))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <>
            <GradientBackground />
            <div>
                <NavBar />
                <div className="home">
                    <form className="search-form" onSubmit={e => e.preventDefault()}>
                        <input
                            type="text"
                            className="search-input"
                            value={query}
                            placeholder="Search for movies..."
                            readOnly
                        />
                    </form>
                    {loading && <div className="loading">Loading...</div>}
                    {error && <div className="error">{error}</div>}
                    {!loading && !error && results.length > 0 && (
                        <div className="movies-grid">
                            {results.map(movie => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                    {!loading && !error && results.length === 0 && query && (
                        <div className="error">No results found for "{query}".</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search; 