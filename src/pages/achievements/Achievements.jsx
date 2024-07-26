import React from 'react';
import './achievements.css';
import { Feature } from '../../components';
import { Footer } from '../../components';

const AchievementsList = () => {
  return (
    <>
      <Feature 
        title={"NSERC Undergraduate Student Research Award"}
        text={
        <>
          Date: Apr. 2024<br /><br />
          This award is funded by the Government of Canada to help students 
          develop research interests in fields of health, natural science, 
          and engineering. By undertaking research work experience, it hopes to
          prepare students for graduate studies and enhance their technical
          skills.
        </>}
      />

      <Feature 
        title={"Winter 2024 Dean's Honour List at University of Toronto"}
        text={
        <>
          Date: Apr. 2024<br /><br />
          This award is given out to students that have completed a minimum of
          2 credits in the term and have a weighted average of 79.5% or higher. The weighted
          term average does not consider the courses that are repeated or marked as "extra".
        </>}
      />

      <Feature 
        title={"Fall 2023 Dean's Honour List at University of Toronto"}
        text={
        <>
          Date: Dec. 2023<br /><br />
          This award is given out to students that have completed a minimum of
          2 credits in the term and have a weighted average of 79.5% or higher. The weighted
          term average does not consider the courses that are repeated or marked as "extra".
        </>}
      />

      <Feature 
        title={"Winter 2023 Dean's Honour List at University of Toronto"}
        text={
        <>
          Date: Apr. 2023<br /><br />
          This award is given out to students that have completed a minimum of
          2 credits in the term and have a weighted average of 79.5% or higher. The weighted
          term average does not consider the courses that are repeated or marked as "extra".
        </>}
      />

      <Feature 
        title={"Fall 2022 Dean's Honour List at University of Toronto"}
        text={
        <>
          Date: Dec. 2022<br /><br />
          This award is given out to students that have completed a minimum of
          2 credits in the term and have a weighted average of 79.5% or higher. The weighted
          term average does not consider the courses that are repeated or marked as "extra".
        </>}
      />

      <Feature 
        title={"Winter 2022 Dean's Honour List at University of Toronto"}
        text={
        <>
          Date: Apr. 2022<br /><br />
          This award is given out to students that have completed a minimum of
          2 credits in the term and have a weighted average of 79.5% or higher. The weighted
          term average does not consider the courses that are repeated or marked as "extra".
        </>}
      />
    
      <Feature 
        title={"Fall 2021 Dean's Honour List at University of Toronto"}
        text={
          <>
            Date: Dec. 2021<br /><br />
            This award is given out to students that have completed a minimum of
            2 credits in the term and have a weighted average of 79.5% or higher. The weighted
            term average does not consider the courses that are repeated or marked as "extra".
          </>
        }
      />

      <Feature 
        title={"Faculty of Applied Science and Engineering Admission Scholarship"}
        text={
          <>
            Date: Oct. 2021<br /><br />
            This scholarship is awarded to students with outstanding academic achievement 
            entering into their first year at University of Toronto's Engineering program.
          </>
        }
      />

      <Feature 
        title={"SAP Student Achievement Program Awards"}
        text={
          <>
            Date: Oct. 2021<br /><br />
            This award gives preference to students that display high academic achievements
            in their final year of high school and is directly entering their undergraduate 
            program upon graduation. Academic merits is considered alongside with 
            financial needs. This award is governed by the University of Toronto's enrolment
            services.
          </>
        }
      />

      <Feature 
        title={"The Helga and Frank Peroutka Scholarship"}
        text={
          <>
            Date: Sep. 2021<br /><br />
            This scholarship is an admission type and only applies for incoming students.
            The award's criteria considers both their academic merit and their financial needs. 
            The award is offered by the University of Toronto's enrolment services.
          </>
        }
      />

      <Feature 
        title={"University of Toronto Scholar"}
        text={
          <>
            Date: Sep. 2021<br /><br />
            This award is given out to both international and domestic students coming 
            from high school with an excellent overall academic standing. Most students
            receiving this award have an average around mid-to-high 90s.
          </>
        }
      />

      <Feature 
        title={"Holy Trinity Bronze Award of Academic Excellence "}
        text={
          <>
            Date: Jun. 2021<br /><br />
            This award is given out to the student at Holy Trinity Catholic 
            Secondary School that have the third highest overall average in the 
            Grade 12 school year.
          </>
        }
      />

      <Feature 
        title={"Ontario Scholar"}
        text={
          <>
            Date: Jun. 2021<br /><br />
            This award is given to Ontario high school graduates that have achieved an 
            average of 80% or higher in their six best Grade 12 courses.
          </>
        }
      />

      <Feature 
        title={<>17× Subject Award <br />(high school)</>}
        text={
          <>
            Date: Sep. 2017 - Jun. 2021<br /><br />
            This award is given out to the student that has achieved the highest grade 
            in that subject for that given school year. Here is the complete list of subjects
            in which Charles have managed to win this award:
            <br /><br />
            Grade 12 Courses: <br />Calculus & Vectors AP (MCV4UA)<br />Advanced Functions AP (MHF4UA) 
            <br />Chemistry AP (SCH4UA)<br />Physics AP (SPH4UA)<br />Computer Science (ICS4U1)
            
            <br /><br />
            Grade 11 Courses: <br />Functions Pre-AP (MCR3UA)<br />Chemistry Pre-AP (SCH3UA)<br />
            Physics Pre-AP (SPH3UA)<br />Forces of Nature: Physical Processes and Disasters (CGF3M1)
            <br />Financial Accounting Fundamentals (BAF3M1)<br />World Religions and Belief Traditions
            in Daily Life (HRF3O1)

            <br /><br />
            Grade 10 Courses: <br />Principles of Mathematics Pre-AP (MPM2DA)<br />
            Science Pre-AP (SNC2DA)<br />Introduction to Computer Studies (ICS2O1)<br />Career
            Studies (GLC2O5)<br />Canadian History since World War I (CHC2P1)

            <br /><br />
            Grade 9 Courses: <br />Principles of Mathematics Pre-AP (MPM1DA)
          </>
        }
      />

      <Feature 
        title={"3× Academic Award of Excellence"}
        text={
          <>
            Date: Sep. 2017 - Jun. 2020<br /><br />
            This award is given out to secondary students with the exception of
            Grade 12 students in which their average for the school year is 90% 
            or above.
            <br />
            Charles have managed to achieve this award 3 times from Grade 9 to 11.
          </>
        }
      />
    </>
  )
}

const Achievements = () => {
  return (
    <>
      <div className="charles__achievements section__padding">
        <div className="charles__achievements-heading">
          <h1 className="gradient__text">Achievements & Awards</h1>
        </div>
        <AchievementsList />
      </div>
      <Footer />
    </>
  )
}

export default Achievements