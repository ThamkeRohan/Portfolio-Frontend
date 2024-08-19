import React from 'react'

const Project = ({image, name, features, githubFrontend, githubBackend, domain}) => {

  return (
    <div className="project observed-item">
      <div className="img">
        <a href={domain} target="_blank">
          <img src={`images/${image}`} alt="Project Image" />
        </a>
      </div>
      <div className="info">
        <div>
          <h4 className="name">{name}</h4>
        </div>
        <ul className="features">{features}</ul>
        <div className="links">
          <a href={domain} target="_blank">
            <div className="link">
              <div className='icon'>
                <img src="images/external-link.svg" alt="" />
              </div>
              Visit site
            </div>
          </a>
          <a href={githubFrontend} target="_blank">
            <div className="link">
              <div className='icon'>
                <img src="images/github.svg" alt="" />
              </div>
              Frontend
            </div>
          </a>
          <a href={githubBackend} target="_blank">
            <div className="link">
              <div className='icon'>
                <img src="images/github.svg" alt="" />
              </div>
              Backend
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project
