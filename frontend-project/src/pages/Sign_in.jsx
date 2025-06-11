import { useState, useEffect } from 'react';
import './Sign_in.css';

function Sign_in() {
    useEffect(() => {
        document.title = 'Sign In | Movie App';
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement sign in logic
        console.log('Form submitted:', formData);
    };

    return (
        <div className="sign-in-container">
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/src/assets/movie-background-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="sign-in-box">
                <h1>Sign In</h1>
                {/* <p className="sign-in-subtitle">Login to Your Account</p> */}
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
                <div className="sign-in-footer">
                    <p>New to Movie App? <a href="/signup">Sign up now</a></p>
                </div>
            </div>
        </div>
    );
}

export default Sign_in;
