import React from 'react';
import './skills.css';
import { c, python, react, javascript, css, html, matLab, github, git, latex } from './imports.js';
import { Footer } from '../../components';

const SkillsList = () => {
  return (
    <>
      <ImageSkillsContainer 
        title={"C"}
        image={c}
        image_alt={"C"}
      />

      <ImageSkillsContainer 
        title={"Python"}
        image={python}
        image_alt={"Python"}
      />
      
      <ImageSkillsContainer 
        title={"React"}
        image={react}
        image_alt={"React"}
      />

      <ImageSkillsContainer 
        title={"JavaScript"}
        image={javascript}
        image_alt={"JavaScript"}
      />

      <ImageSkillsContainer 
        title={"CSS"}
        image={css}
        image_alt={"CSS"}
      />

      <ImageSkillsContainer 
        title={"HTML"}
        image={html}
        image_alt={"HTML"}
      />

      <ImageSkillsContainer 
        title={"MATLAB"}
        image={matLab}
        image_alt={"MATLAB"}
      />
      
      <ImageSkillsContainer 
        title={"GitHub"}
        image={github}
        image_alt={"GitHub"}
      />

      <ImageSkillsContainer 
        title={"Git"}
        image={git}
        image_alt={"Git"}
      />

      <ImageSkillsContainer 
        title={"LaTeX"}
        image={latex}
        image_alt={"LaTeX"}
      />
    </>
  )
}

const ImageSkillsContainer = (props) => {
  return (
    <>
      <div className="charles__skills__container">
        <h1>
          {props.title}
          <br />
          <img src={props.image} alt={props.image_alt}/>
        </h1>
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <div className="charles__skills section__padding">
        <div className="charles__skills-heading">
          <h1 className="gradient__text">Skills</h1>
          
          <p>
            This page lists out all of the languages and tools that Charles had experienced 
            using in his life. To learn more about Charles' expertise amongst these tools, 
            please feel free to contact him.
          </p>
        </div>

        <div className="charles__skills__section">
          <SkillsList />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills