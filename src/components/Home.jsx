import React from 'react'
import Navigation from "./Navigation"

const Home = () => {
  return (
    <section id="home" className="home">
      <header className="header">
        <div className="app-logo">R</div>
        <a className="resume-btn" href="/docs/resume.pdf" target="_blank">
          Resume
        </a>
      </header>

      <Navigation />

      <div className="intro">
        <div className="left-section">
          <div className="greetings">
            <span className="greet">Hi, I'm</span>
            <br />
            <span className="name">Rohan Thamke.</span>
          </div>
          <div className="job-title">A Web Developer.</div>
        </div>
        <div className="right-section">
          <div className="profile-img">
            <img src="images/profile-image.jpeg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
