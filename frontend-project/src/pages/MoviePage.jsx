import React, { useState, useEffect } from 'react';
import './MoviePage.css';
import { getTrendingMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import GradientBackground from '../components/GradientBackground';
import Lower  from '../components/lower';
const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { results, totalPages } = await getTrendingMovies(currentPage);
                setMovies(results);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <GradientBackground />
            <div className="movie-page">
                <div className="top">
                    <h1>Trending Movies</h1>
                </div>
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Lower></Lower>
        </>
    );
};

export default MoviePage;