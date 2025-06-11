import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ backgroundImage, title, overview, primaryBtn, secondaryBtn }) => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-overview">{overview}</p>
        <div className="hero-buttons">
          {primaryBtn && (
            <Link to={primaryBtn.to} className="btn">
              {primaryBtn.label}
            </Link>
          )}
          {secondaryBtn && (
            secondaryBtn.href ? (
              <a href={secondaryBtn.href} className="btn btn-secondary">
                {secondaryBtn.label}
              </a>
            ) : (
              <Link to={secondaryBtn.to} className="btn btn-secondary">
                {secondaryBtn.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  primaryBtn: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  secondaryBtn: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
  }),
};

Hero.defaultProps = {
  overview: '',
  primaryBtn: null,
  secondaryBtn: null,
};

export default Hero; 