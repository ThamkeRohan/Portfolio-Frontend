import React, {useEffect} from 'react'
import Project from './Project'
import { projects } from '../data/projects'
const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target);
        }
      });
    },{rootMargin: "-150px"});
    const projects = document.querySelectorAll(".project")
    projects.forEach(project => {
      observer.observe(project);
    })
    
  }, []);
  return (
    <section className='section projects'>
      <h2>My <span>Projects</span></h2>
      {
        projects.map(project => <Project {...project} key={project.name}/>)
      }
    </section>
  )
}

export default Projects
