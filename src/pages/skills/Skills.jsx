import React from 'react';
import './skills.css';
import { python, c, matLab, latex, react } from './imports.js';
import { Footer } from '../../components';

const Skills = () => {
  return (
    <>
      <div className="charles__skills section__padding">
        <div className="charles__skills-heading">
          <h1 className="gradient__text">
            Skills
          </h1>

          <p>
            This page lists out all of the languages & tools that Charles had experienced using.
          </p>
        </div> 
        <br />

        <div className="charles__skills__container">
          <div className="charles__skills__container-content">
            C
          </div>
          <br />
          <img src={c} alt="C"/>

          <p></p>
        </div>
        
        <div className="charles__skills__container">
          <div className="charles__skills__container-content">
            Python
          </div>
          <br />
          <img src={python} alt="Python"/>

          <p></p>
        </div>

        <div className="charles__skills__container">
          <div className="charles__skills__container-content">
            React
          </div>
          <br />
          <img src={react} alt="React"/>

          <p></p>
        </div>

        <div className="charles__skills__container">
          <div className="charles__skills__container-content">
            MATLAB
          </div>
          <br />
          <img src={matLab} alt="MATLAB"/>

          <p></p>
        </div>

        <div className="charles__skills__container">
          <div className="charles__skills__container-content">
            LaTeX
          </div>
          <br/>
          <img src={latex} alt="LaTeX"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Skills