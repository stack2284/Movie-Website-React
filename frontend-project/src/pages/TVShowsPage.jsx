import React, { useState, useEffect } from 'react';
import './TVShowsPage.css';
import { getTrendingTVShows } from '../services/api';
import MovieCard from '../components/MovieCard';
import GradientBackground from '../components/GradientBackground';
import Lower from '../components/lower';

const TVShowsPage = () => {
    const [tvShows, setTVShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchTVShows = async () => {
            try {
                const { results, totalPages } = await getTrendingTVShows(currentPage);
                setTVShows(results);
                setTotalPages(totalPages);
            } catch (error) {
                console.error('Error fetching TV shows:', error);
            }
        };

        fetchTVShows();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <GradientBackground />
            <div className="tvshows-page">
                <div className="top">
                    <h1>Trending TV Shows</h1>
                </div>
                <div className="tvshows-grid">
                    {tvShows.map((show) => (
                        <MovieCard key={show.id} movie={show} />
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

export default TVShowsPage;
