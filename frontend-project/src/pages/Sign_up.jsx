import { useState, useEffect } from 'react';
import './Sign_up.css';

function Sign_up() {
    useEffect(() => {
        document.title = 'Sign Up | Movie App';
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        // TODO: Implement sign up logic
        console.log('Registration form submitted:', formData);
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
                <h1>Sign Up</h1>
                <p className="sign-in-subtitle">Register Here</p>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <button type="submit" className="sign-in-button">Register</button>
                </form>
                <div className="sign-in-footer">
                    <p>Already have an account? <a href="/signin">Sign in now</a></p>
                </div>
            </div>
        </div>
    );
}

export default Sign_up;
