import React from 'react';
import { Header } from './header';
import { Education } from './education';
import { Footer } from '../../components';
import './home.css';
import { ut, ht } from './imports.js';

const PageTitle = () => {
  return(
    <Header 
      title={"Welcome!"}
      description={
        <>
          Charles Hsieh is an undergraduate Computer Engineering student
          at University of Toronto. He has worked as a research intern at 
          University of Toronto under the Center of Excellence for Networking 
          Innovation in Toronto (CENIT) for Summer 2024. Through various 
          experiences, he has exposure to areas of software development, 
          computer networks, AI, hardware, and web development. He is currently 
          pursuing an AI minor as well.
          <br /><br />
          This website serves as an online portfolio to help better understand
          Charles.
        </>
      }
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
            Date: Sep. 2021 - Apr. 2025
            <br />
            Bachelor of Applied Science and Engineering (B.A.Sc.) in Computer Engineering
            <br />
            Cumulative GPA: 3.84/4.00 (after Winter 2024)
            <br />
            Average Score: 87.34375% (after Winter 2024)
            <br />
            Pursuing AI minor
            <br /> <br />
            Charles was first admitted to University of Toronto through the stream of 
            TrackOne, Undeclared Engineering. After finishing first year, he transferred 
            into the stream of Electrical & Computer Engineering (ECE) to continue his 
            degree. He is planning to graduate as a Computer Engineer (CE) and is currently
            pursuing an AI minor. The following tables consists of all the courses that he 
            has completed.
          </>
        }
        button={"N/A"}
        table1={     
          [
            {title: "First Year"},
            {headerOne: "Fall 2021", headerTwo: "Winter 2022"},
            {first: "APS100H1 Orientation to Engineering", second: "APS105H1 Computer Fundamentals"},
            {first: "APS110H1 Engineering Chemistry & Materials Science", second: "APS112H1 Engineering Strategies & Practice II"},
            {first: "APS111H1 Engineering Strategies & Practice I", second: "APS191H1 TrackOne Seminar"},
            {first: "CIV100H1 Mechanics", second: "ECE110H1 Electric Fundamentals"},
            {first: "MAT186H1 Calculus I", second: "MAT187H1 Calculus II"},
            {first: "MAT188H1 Linear Algebra", second: "MIE100H1 Dynamics"}
          ]
        }
        table2={
          [
            {title: "Second Year"},
            {headerOne: "Fall 2022", headerTwo: "Winter 2023"},
            {first: "ECE201H1 Seminar: Electrical & Computer Engineering", second: "ECE216H1 Signals & Systems"},
            {first: "ECE212H1 Circuit Analysis", second: "ECE221H1 Electric & Magnetic Fields"},
            {first: "ECE241H1 Digital Systems", second: "ECE231H1 Introductory Electronics"},
            {first: "ECE244H1 Programming Fundamentals", second: "ECE243H1 Computer Organization"},
            {first: "MAT290H1 Advanced Engineering Mathematics", second: "ECE297H1 Software Communication & Design"},
            {first: "MAT291H1 Calculus III", second: ""}
          ]
        }
        table3={
          [
            {title: "Third Year"},
            {headerOne: "Summer 2023", headerTwo: "Fall 2023", headerThree: "Winter 2024"},
            {first: "JRE420H1 People Management & Organizational Behaviour", second: "ECE302H1 Probability & Applications", third: "APS360H1 Applied Fundamentals of Deep Learning"},
            {first: "TEP444H1 Positive Psychology for Engineers", second: "ECE335H1 Introduction to Electronic Devices", third: "ECE311H1 Introduction to Control Systems"},
            {second: "ECE344H1 Operating Systems", third: "ECE330H1 Quantum & Semiconductor Physics"},
            {second: "ECE345H1 Algorithms & Data Structures", third: "ECE342H1 Computer Hardware"},
            {second: "ECE361H1 Computer Networks I", third: "ECE368H1 Probabilistic Reasoning"}
          ]
        }
        table4={"N/A"}
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
            Average for Grade 12 Courses: 98.6%
            <br />
            Average Score: 95.8%
            <br />
            <br /><br />
            After Charles completing his diploma, he had taken a series of 
            AP and Pre-AP courses. These courses are listed below:
          </>
        }
        button={
          <>
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
        table1={"N/A"}
        table2={"N/A"}
        table3={"N/A"}
        table4={"N/A"}
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