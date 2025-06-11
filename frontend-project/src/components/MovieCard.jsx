import './MovieCard.css'
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
    function onfavclick() {
        alert("click");
    }

    return (
        <div className="bodyx">
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title} />
                    <button className="fav-btn" onClick={onfavclick}> ♥
                    </button>
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <p className='date'>{movie.release_date.split('-')[0]}</p>
                        <p className='rating'>USER RATING: {movie.rating}</p>
                        <p className='desc'>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        rating: PropTypes.string,
        overview: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
}
MovieCard.defaultProps = {
    movie: {
        title: "Movie Title",
        release_date: "",
        rating: "",
        description: "no description avaliable",
        poster_path: "",
    }
}


export default MovieCard;