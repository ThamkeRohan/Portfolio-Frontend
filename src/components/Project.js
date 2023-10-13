import React from 'react'

const Project = ({image, name, type, description, github, domain}) => {
  
  return (
    <div className="project">
      <div className="img">
        <a href={domain} target='_blank'>
          <img src={`images/${image}`} alt="Project Image" />
        </a>
      </div>
      <div className="info">
        <div>
          <h4 className="name">{name}</h4>
          <h5 className="type">{type}</h5>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="links">
          <a href={github} target='_blank'>
            <div>
              <img src="images/github.svg" alt="" />
            </div>
          </a>
          <a href={domain} target='_blank'>
            <div>
              <img src="images/external-link.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project
