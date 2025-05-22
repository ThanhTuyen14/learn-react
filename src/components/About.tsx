import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <h1>About Us</h1>
          <p>Learn more about our story and mission</p>
        </section>

        <section className="about-content">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, we've been at the forefront of innovation and
              excellence. Our journey began with a simple mission: to deliver
              exceptional solutions that make a difference in people's lives.
            </p>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>
                  We strive for excellence in everything we do, setting high
                  standards and consistently meeting them.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Integrity</h3>
                <p>
                  We believe in conducting business with honesty, transparency,
                  and ethical practices.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💪</div>
                <h3>Innovation</h3>
                <p>
                  We constantly push boundaries and embrace new technologies to
                  deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="about-team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👩‍💼</div>
                <h3>Jane Smith</h3>
                <p className="member-role">CEO & Founder</p>
                <p>
                  Leading our vision and strategy with over 15 years of industry
                  experience.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍💼</div>
                <h3>John Doe</h3>
                <p className="member-role">Technical Director</p>
                <p>
                  Driving innovation and technical excellence across our
                  projects.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍💻</div>
                <h3>Sarah Johnson</h3>
                <p className="member-role">Lead Developer</p>
                <p>
                  Ensuring the highest quality in our development processes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
