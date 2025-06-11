import { useState } from 'react';
import './Carousel.css';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

function Carousel({ title, movies }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 4; // Number of cards visible at once

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + cardsPerView >= movies.length ? 0 : prevIndex + cardsPerView
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - cardsPerView < 0 ? Math.max(0, movies.length - cardsPerView) : prevIndex - cardsPerView
        );
    };

    return (

        <div className="carousel-container">
            <div className="carousel-header">
                <h2 className="carousel-title">{title}</h2>
            </div>
            <div className="carousel-content">
                <button onClick={prevSlide} className="carousel-button">←</button>
                <div 
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
                    }}
                    >
                    {movies.map((movie, index) => (
                        <div key={index} className="carousel-item">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide} className="carousel-button">→</button>
            </div>
</div>
    );
}

Carousel.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string,
            rating: PropTypes.string,
            overview: PropTypes.string,
            poster_path: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Carousel;
