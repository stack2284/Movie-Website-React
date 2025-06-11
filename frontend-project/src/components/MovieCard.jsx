import './MovieCard.css'
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
    function onfavclick() {
        alert("click");
    }

    // Handle missing data gracefully
    const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
    const language = movie.original_language ? movie.original_language.toUpperCase() : 'N/A';

    return (
        <div className="bodyx">
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.title} />
                    <button className="fav-btn" onClick={onfavclick}> ♥
                    </button>
                    <div className="movie-info">
                        <div className="textbox">
                        <h3>{movie.title}</h3>
                        <p className='date'>{releaseYear}</p>
                        <p className='rating'>LANGUAGE: {language}</p>
                        <p className='desc'>{movie.overview}</p>
                        </div>
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
        original_language: PropTypes.string,
        overview: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
}
MovieCard.defaultProps = {
    movie: {
        title: "Movie Title",
        release_date: "",
        original_language: "en",
        description: "no description avaliable",
        poster_path: "",
    }
}


export default MovieCard;