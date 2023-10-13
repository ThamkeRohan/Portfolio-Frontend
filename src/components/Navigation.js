import React from 'react'
import Control from './Control';
const Navigation = ({activeSection, setActiveSection}) => {
  return (
    <nav className="navigation">
      <Control
        icon="home.svg"
        name="Home"
        clickAction={() => setActiveSection(0)}
        isActive={activeSection === 0 ? true : false}
      />
      <Control
        icon="user.svg"
        name="About"
        clickAction={() => setActiveSection(1)}
        isActive={activeSection === 1 ? true : false}
      />
      <Control
        icon="skill.svg"
        name="Skills"
        clickAction={() => setActiveSection(2)}
        isActive={activeSection === 2 ? true : false}
      />
      <Control
        icon="bag.svg"
        name="Projects"
        clickAction={() => setActiveSection(3)}
        isActive={activeSection === 3 ? true : false}
      />
      <Control
        icon="message.svg"
        name="Contact"
        clickAction={() => setActiveSection(4)}
        isActive={activeSection === 4 ? true : false}
      />
    </nav>
  );
}

export default Navigation
