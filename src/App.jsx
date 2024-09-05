import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.6}
    );
    const observedItems = document.querySelectorAll(".observed-item");
    observedItems.forEach((observedItem) => {
      observer.observe(observedItem);
    });
  }, []);
  return (
    <div className="app">
      <>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </>
      <div className="links">
        <a href="https://github.com/ThamkeRohan" target="_blank">
          <div className="link">
            <div className="icon">
              <img src="images/github.svg" alt="" />
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-thamke-a56475291/"
          target="_blank"
        >
          <div className="link">
            <div className="icon">
              <img src="images/linkedin.jpg" alt="" target="_blank" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
