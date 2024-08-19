import React from 'react'
import Control from './Control';
const Navigation = () => {
  return (
    <nav className="navigation">
      <Control
        icon="home.svg"
        name="Home"
        navigateTo="home"
      />
      <Control
        icon="user.svg"
        name="About"
        navigateTo="about"
      />
      <Control
        icon="skill.svg"
        name="Skills"
        navigateTo="skills"
      />
      <Control
        icon="bag.svg"
        name="Projects"
        navigateTo="projects"
      />
      <Control
        icon="message.svg"
        name="Contact"
        navigateTo="contact"
      />
    </nav>
  );
}

export default Navigation
