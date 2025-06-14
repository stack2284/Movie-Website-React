import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import HomeCarousel from '../components/HomeCarousel';
import Hero from '../components/Hero';
import GradientBackground from '../components/GradientBackground';
import Lower from '../components/lower';
import {
    getPopularMovies,
    getTrendingMovies,
    getTopRatedMovies,
    getPopularTV,
    getTrendingTV,
    getImageUrl
} from '../services/api';
import './Home.css';

function Home() {
    const [query, setQuery] = useState('');
    const [heroMovies, setHeroMovies] = useState([]);
    const [heroIndex, setHeroIndex] = useState(0);
    const navigate = useNavigate();
    const intervalRef = useRef(null);

    useEffect(() => {
        getTrendingMovies().then(movies => {
            if (movies && movies.length > 0) {
                setHeroMovies(movies.slice(0, 5));
                setHeroIndex(0);
            }
        });
    }, []);

    useEffect(() => {
        if (heroMovies.length > 1) {
            intervalRef.current = setInterval(() => {
                setHeroIndex(prev => (prev + 1) % heroMovies.length);
            }, 5000);
            return () => clearInterval(intervalRef.current);
        }
    }, [heroMovies]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const featuredMovie = heroMovies[heroIndex] || {
        backdrop_path: '',
        title: 'No Movie Available',
        overview: 'No description available.',
        id: '',
    };

    return (
        <>
            <GradientBackground />
            <div>
                <NavBar />
                <div className="home">
                    <form onSubmit={handleSubmit} className="search-form">
                        <input
                            type="text"
                            placeholder="Search for movies..."
                            className="search-input"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>
                    {featuredMovie && (
                        <Hero
                            backgroundImage={getImageUrl.backdrop(featuredMovie.backdrop_path)}
                            title={featuredMovie.title}
                            overview={featuredMovie.overview}
                            primaryBtn={{ label: 'View Details', to: `/movie/${featuredMovie.id}` }}
                            secondaryBtn={{ label: 'Trending Now', href: '#trending' }}
                        />
                    )}

                    <HomeCarousel title="Popular Movies" fetchFn={getPopularMovies} />
                    <HomeCarousel title="Trending Movies" fetchFn={getTrendingMovies} />
                    <HomeCarousel title="Top Rated Movies" fetchFn={getTopRatedMovies} />
                    <HomeCarousel title="Popular TV Shows" fetchFn={getPopularTV} isTV />
                    <HomeCarousel title="Trending TV Shows" fetchFn={getTrendingTV} isTV />
                </div>
            </div>
            <Lower></Lower>
        </>
    );
}

export default Home;