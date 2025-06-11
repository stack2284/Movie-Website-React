import './Favourite.css';
import NavBar from '../components/NavBar';
function Favourite() {
    return (
        <div>
            <NavBar />
            <div className="favorites-empty">
                <h2>No Favourites yet </h2>
                <p>start adding titles</p>
            </div>
        </div>
    );
}

export default Favourite;