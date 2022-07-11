import React from 'react';
import './education.css';
import { ut, ht } from './imports.js';

const Education = () => {
  return (
    <div className="charles__education">
      <h1>
        Education
      </h1>

      <div className="charles__education__container">
        <div className="charles__education__container-center_aligned">
          <img src = {ut} alt = "University of Toronto"/>
          <h2>University of Toronto</h2>
        </div>

        <div className="charles__education__container-left_aligned">
          <p>
            Date: Sep. 2021 - Apr. 2026 (including PEY Co-op)
            <br />
            Bachelor of Applied Science in Computer Engineering
            <br />
            Cumulative GPA: 3.67/4.00 - after first year
            <br />
            Average Score: 83.5% - after first year
            <br />
            Minor: N/A

            <br /> <br />
            Charles was first admitted to University of Toronto through the stream of 
            TrackOne, Undeclared Engineering. After finishing first year, he transferred 
            into the stream of Electrical & Computer Engineering (ECE) to continue his 
            degree.
          </p>
        </div>
      </div>


      <div className="charles__education__container">
        <div className="charles__education__container-center_aligned">
          <img src = {ht} alt = "Holy Trinity Catholic Secondary School"/>
          <h2>
            Holy Trinity Catholic Secondary School
          </h2>
          
        </div>

        <div className="charles__education__container-left_aligned">
          <p>
            Date: Sep. 2017 - Jun. 2021
            <br />
            High school with AP courses
            <br />
            Average Score: 95.8%
            <br />
            Average for Grade 12 Courses: 98.6%
            <br /><br />
            After Charles completing his diploma, he had taken a series of 
            AP and Pre-AP courses. These courses are listed below:
            <br /><br />
            Grade 12 (AP): <br />Calculus & Vectors (MCV4UA)<br />Advanced Functions (MHF4UA)
            <br />Chemistry (SCH4UA)<br />Physics (SPH4UA)
            <br /><br />
            Grade 11 (Pre-AP): <br />Functions (MCR3UA)<br />Chemistry (SCH3UA)<br />
            Physics (SPH3UA)
            <br /><br />
            Grade 10 (Pre-AP): <br />Principles of Mathematics (MPM2DA)<br />Science (SNC2DA)
            <br /><br />
            Grade 9 (Pre-AP): <br/>Principles of Mathematics (MPM1DA)<br />Science (SNC1DA)
            <br />Issues in Canadian Geography (CGC1DA)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education