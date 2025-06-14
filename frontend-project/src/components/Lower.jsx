import "./Lower.css"


function Lower() {
    return (
        <div className="lowert">
        <div className="lower">
            <div className="top">
                <div className="top-first">
                    <h3>Movie App</h3>
                    <p>Discover the best movies and TV shows on our platform. Create your own watchlist and get recommendations tailored to your interests.</p>
                </div>
                <div className="rest">

                    <div className="top-rest">
                        <h3>Navigation</h3>
                        <p className="nav-links" onClick={() => window.location.href = '/'}>Home</p>
                        <p className="nav-links" onClick={() => window.location.href = '/favourite'}>Favorites</p>
                        <p className="nav-links" onClick={() => window.location.href = '/'}>Movies</p>
                        <p className="nav-links" onClick={() => window.location.href = '/'}>Tv Series</p>
                    </div>
                    <div className="top-rest">
                        <h3>Legal</h3>
                        <p className="nav-links" onClick={() => window.location.href = '/termsofuse'}>Terms of Use</p>
                        <p className="nav-links" onClick={() => window.location.href = '/privacypolicy'}>Privacy Policy</p>
                        <p className="nav-links" onClick={() => window.location.href = '/cookiepolicy'}>Cookie Policy</p>
                    </div>
                    <div className="top-rest">
                        <h3>Socials</h3>
                        <p className="nav-links" onClick={() => window.open('https://facebook.com', '_blank')}>FaceBook</p>
                        <p className="nav-links" onClick={() => window.open('https://x.com', '_blank')}>x.com</p>
                        <p className="nav-links" onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>©{new Date().getFullYear()} CineConnect. All rights reserved.</p>
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
        </div>
        </div>
    );

};

export default Lower