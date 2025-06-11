import './Favourite.css';
import NavBar from '../components/NavBar';
import GradientBackground from '../components/GradientBackground';
function Favourite() {
    return (
        <>
            <GradientBackground />
            <div>
                <NavBar />
                <div className="favorites-empty">
                    <h2>No Favourites yet </h2>
                    <p>start adding titles</p>
                </div>
            </div>
        </>
    );
}

export default Favourite;