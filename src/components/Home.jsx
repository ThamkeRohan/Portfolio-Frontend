import React from 'react'

const Home = () => {
  return (
    <section id='home' className="section home">
      <div className="left-section">
        <div className="greetings">
          <span className='greet'>Hi, I'm</span>
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
    </section>
  );
}

export default Home
