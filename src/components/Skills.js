import React from 'react'
import Technology from './Technology';
const Skills = () => {
  return (
    <section className="section skills">
      <h2>
        My <span>Skills</span>
      </h2>
      <div className="technologies">
        <Technology image="html.png" />
        <Technology image="css.png" />
        <Technology image="javascript.png" />
        <Technology image="reactjs.png" />
        <Technology image="nodejs.png" />
        <Technology image="expressjs.png" />
        <Technology image="mongodb.png" />
        <Technology image="mysql.png" />
        <Technology image="java.png" />
      </div>
    </section>
  );
}

export default Skills
