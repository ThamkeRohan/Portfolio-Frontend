import React, {useEffect} from 'react'
import Project from './Project'
import { projects } from '../data/projects'
const Projects = () => {
  
  return (
    <section id="projects" className="section projects">
      <h2 className="observed-item">
        My <span>Projects</span>
      </h2>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </section>
  );
}

export default Projects
