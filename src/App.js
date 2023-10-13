import { useState } from 'react';
import './App.css';
import Control from './components/Control';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [sections, setSections] = useState([ <Home/>, <About/>, <Skills/>, <Projects/>, <Contact/> ])
  const [activeSection, setActiveSection] = useState(0);
  return (
    <div className="app">
      <div className="app-logo">
        R
      </div>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div>{sections[activeSection]}</div>
      <div className="links">
        <a href="https://github.com/ThamkeRohan" target='_blank'>
          <div>
            <img src="images/github.svg" alt="" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rohan-thamke-a56475291/">
          <div>
            <img src="images/linkedin.jpg" alt="" target='_blank'/>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
