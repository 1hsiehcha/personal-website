import React from 'react';
import { Header } from './header';
import { Education } from './education';
import { Footer } from '../../components';
import './home.css';
import { profile, ut, ht } from './imports.js';

const PageTitle = () => {
  return(
    <Header 
      title={"Welcome."}
      description={
        <>
          Charles Hsieh is a current undergraduate student studying at University of Toronto.
          He is studying in the stream of Electrical and Computer Engineering and is open to both
          hardware and software development.
        </>
      }
      image={profile}
      image_alt={"Charles Hsieh"}
    />
  )
}

const EducationDescriptions = () => {
  return(
    <>
      <Education 
        image={ut}
        image_alt={"University of Toronto"}
        school_name={"University of Toronto"}
        description={
          <>
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
          </>
        }
      />

      <Education 
        image={ht}
        image_alt={"Holy Trinity Catholic Secondary School"}
        school_name={"Holy Trinity Catholic Secondary School"}
        description={
          <>
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

            Grade 12 (AP): 
              <br />Calculus & Vectors (MCV4UA)
              <br />Advanced Functions (MHF4UA)
              <br />Chemistry (SCH4UA)
              <br />Physics (SPH4UA)
            <br /><br />

            Grade 11 (Pre-AP): 
              <br />Functions (MCR3UA)
              <br />Chemistry (SCH3UA)
              <br />Physics (SPH3UA)
            <br /><br />

            Grade 10 (Pre-AP): 
              <br />Principles of Mathematics (MPM2DA)
              <br />Science (SNC2DA)
            <br /><br />

            Grade 9 (Pre-AP): 
            <br/>Principles of Mathematics (MPM1DA)
            <br />Science (SNC1DA)
            <br />Issues in Canadian Geography (CGC1DA)
          </>
        }
      />
    </>
  )
}

const Home = () => {
  return (
    <>
      <div className="charles__home section__padding">
        <PageTitle />
        <h1>Education</h1>
        <EducationDescriptions />
      </div>
      <Footer />
    </>
  )
}

export default Home