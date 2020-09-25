import React from 'react'

const Skills = () => (
  <section>

    <div className="skills-container">

      <div className="col-wrap">
        <h4>Front-End</h4>
        <div className="skill">
          <p>CSS / SCSS</p>
        </div>
        <div className="skill">
          <p>JavaScript (React JS)</p>
        </div>
        <div className="skill">
          <p>HTML</p>
        </div>
      </div>

      <div className="divider">
      </div>

      <div className="col-wrap">
        <h4>Back-End</h4>
        <div className="skill">
          <p>Python (Django)</p>
        </div>
        <div className="skill">
          <p>REST</p>
        </div>
      </div>

      <div className="divider">
      </div>

      <div className="col-wrap">
        <h4>Other</h4>
        <div className="skill">
          <p>Mongo DB</p>
        </div>
        <div className="skill">
          <p>Node.js</p>
        </div>
        <div className="skill">
          <p>Table Plus / Insomnia</p>
        </div>
      </div>

    </div>

  </section>
)

export default Skills