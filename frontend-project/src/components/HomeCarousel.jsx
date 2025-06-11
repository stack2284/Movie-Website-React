import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import PropTypes from 'prop-types';
import './HomeCarousel.css';

function HomeCarousel({ title, fetchFn, isTV }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        fetchFn()
            .then((data) => {
                if (isMounted) setItems(data);
            })
            .catch((err) => {
                if (isMounted) setError('Failed to load.');
                console.log(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });
        return () => { isMounted = false; };
    }, [fetchFn]);

    // Map TV data to movie card shape if needed
    const mappedItems = isTV
        ? items.map(tv => ({
            title: tv.name,
            release_date: tv.first_air_date,
            rating: tv.vote_average?.toString(),
            overview: tv.overview,
            poster_path: tv.poster_path,
        }))
        : items;

    if (loading) return <div style={{textAlign: 'center', margin: '2rem 0'}}>Loading {title}...</div>;
    if (error) return <div style={{textAlign: 'center', color: 'red', margin: '2rem 0'}}>{error}</div>;
    if (!mappedItems.length) return null;

    return <Carousel title={title} movies={mappedItems} />;
}

HomeCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    fetchFn: PropTypes.func.isRequired,
    isTV: PropTypes.bool,
};

HomeCarousel.defaultProps = {
    isTV: false,
};

export default HomeCarousel; 