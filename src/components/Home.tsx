import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>We create amazing solutions for your needs</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features" id="services">
        <h2>Our Services</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Quality Service</h3>
            <p>We provide top-notch services to meet your expectations</p>{" "}
            <Link to="/contact" className="feature-link">
              Learn More →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Team</h3>
            <p>Our team of experts is here to help you succeed</p>
            <Link to="/about" className="feature-link">
              Meet the Team →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovation</h3>
            <p>Stay ahead with our innovative solutions</p>
            <Link to="/contact" className="feature-link">
              Explore →
            </Link>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <p>Ready to start your project? Contact us today!</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
