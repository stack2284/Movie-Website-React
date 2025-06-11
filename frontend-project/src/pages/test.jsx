import Carousel from '../components/Carousel';
import './test.css';

function Test() {
    // Sample movie data
    const sampleMovies = [
        {
            title: "Inception",
            release_date: "2010-07-16",
            rating: "8.8",
            overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
        },
        {
            title: "The Dark Knight",
            release_date: "2008-07-18",
            rating: "9.0",
            overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
            title: "Pulp Fiction",
            release_date: "1994-09-10",
            rating: "8.9",
            overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
        },
        {
            title: "The Shawshank Redemption",
            release_date: "1994-09-23",
            rating: "9.3",
            overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
        },
        {
            title: "The Godfather",
            release_date: "1972-03-14",
            rating: "9.2",
            overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        },
        {
            title: "Fight Club",
            release_date: "1999-10-15",
            rating: "8.8",
            overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
        },
        {
            title: "Forrest Gump",
            release_date: "1994-07-06",
            rating: "8.8",
            overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
        },
        {
            title: "The Matrix",
            release_date: "1999-03-31",
            rating: "8.7",
            overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
        }
    ];

    return (
        <div className="test">
            <Carousel title="Popular Movies" movies={sampleMovies} />
            <Carousel title="Top Rated" movies={sampleMovies.slice(0, 6)} />
            <Carousel title="New Releases" movies={sampleMovies.slice(2, 8)} />
        </div>
    );
}

export default Test;

