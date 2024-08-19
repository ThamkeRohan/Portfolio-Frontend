import React from 'react'
import Technology from './Technology';
const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h2 className="observed-item">
        My <span>Skills</span>
      </h2>
      <div className="technologies observed-item">
        <Technology image="html.png" />
        <Technology image="css.png" />
        <Technology image="javascript.png" />
        <Technology image="reactjs.png" />
        <Technology image="nodejs.png" />
        <Technology image="expressjs.png" />
        <Technology image="mongodb.png" />
        <Technology image="git.png" />
        <Technology image="socket.png" />
        <Technology image="jwt.png" />
        <Technology image="oauth.png" />
        <Technology image="passport.png" />
        <Technology image="sse.jpg" />
      </div>
    </section>
  );
}

export default Skills
