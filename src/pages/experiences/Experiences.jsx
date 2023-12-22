import React from 'react';
import './experiences.css';
import { Footer } from '../../components';
import ExperiencesContainer from './ExperiencesContainer';

const ExperiencesList = () => {
  return (
    <>
      <ExperiencesContainer 
        background={true}
        name={"Engineering Strategies & Practice I & II"}
        type={"Type: Academic"}
        date={"Date: Sep. 2021 - Apr. 2022"}
        position={"Position: Meeting Coordinator / Member"}
        description={
          <>
            Engineering Strategies and Practice, often known as "ESP", are courses
            offered to first year Engineering students to practice the skills of design
            through real-life projects. The ESP courses are split between 2 semesters,
            meaning that Charles has worked on 2 different projects. His meeting coordinator 
            role allowed him to learn how ways to communicate well amongst his team, his 
            client, and his manager. Alongside that, he learned the core concepts of design.
            <br /><br />
            The first project was about creating a mechanism to allow a food delivery robot 
            to efficiently unload its package to the customer in a user-friendly way. Through 
            his team of 5, the final design had multiple components. The central component uses 
            a 4-bar linkage system to unload the food at an appropriate height similar to how
            people would serve food. For safety reasons, it includes QR detector app to ensure 
            that the food is delivered to the right customers and uses UV light to sanitize the 
            robot to meet the COVID-19 regulations. The design included components to enhance its 
            physical performance through waterproof materials, heat insulators, a GPS tracker, 
            and 6 all-terrain tires.
            <br /><br />
            In the second project, Charles worked with a client. His client, Emerson Canada,
            wanted his team of 6, to develop methods to reduce greenhouse gas (GHG) emission in
            City of Toronto. The final design was a multi-layered wall insulation that consists
            of using fiberglass, expanded polystyrene foam, and polyurethane foam. By conducting
            physical experiments, the design proved to have a high heat resistance while being 
            relatively cheap. It required no maintenance and the process (production, construction,
            and implementation) yields a low carbon footprint.
          </>
        }
      />

      {/* <ExperiencesContainer 
        background={false}
        name={
          <>
            Toward More Effective Teaching and Learning in Engineering Education
          </>
        }
        type={"Type: Academic"}
        date={"Date: Jul. 2022"}
        position={"Position: Focus Group Participant"}
        description={
          <>
            This is a research project conducted by University of Toronto and is led by
            "Institute for Studies in Transdisciplinary Engineering Education and 
            Practice" (ISTEP). This research study is intended to look at the learning
            effectiveness of different types of instruction that been presented as a result
            of the COVID-19 pandemic. The types of instruction include in-person, online 
            synchronous, and asynchronous learning. Dr. Qin Liu has talked with Charles 
            about ways to boost learning efficiency and tailoring the ideal blend
            of instruction for future courses. By taking the unique advantages of each 
            type of instruction, the project hopes to take another step into perfecting
            Engineering education. 
          </>
        }
      />

      <ExperiencesContainer 
        background={false}
        name={"Junior Optimist Club of Oakville"}
        type={"Type: Volunteer"}
        date={"Date: Jul. 2017 - Oct. 2020"}
        position={"Position: Member"}
        description={
          <>
            The Junior Optimist Club of Oakville is a non-profit organization
            that believes in the potential of youth. To fulfill this potential,
            the clubs host local fundraiser events throughout the year. It works with
            other organizations such as the Food Bank, Food4Kids, and YMCA to deliver 
            this aid.
            <br /><br />
            Charles' role as a member is to facilitate the preparation needed to host these events.
            This includes managing, gathering, and finding the necessary materials. This task
            requires leadership and communication skills as the club needs to work efficiently 
            under small groups. This enhanced his ability to plan and organize in
            order to meet their various deadlines.
          </>
        }
      />

      <ExperiencesContainer 
        background={true}
        name={"Fo Guan Shan Temple of Toronto"}
        type={"Type: Volunteer"}
        date={"Date: Jun. 2020 - Jul. 2020"}
        position={"Position: N/A"}
        description={
          <>
            This volunteer task involves working in the audio-visual department to create an 
            archive system for the hundreds of CDs, videotapes, and cassette players stored 
            in the temple. Thus, this requires a decent amount of organization as well as
            dedication to create a coherent system.
            <br /><br />
            However, Charles volunteer under an unprecedented situation as Ontario was still in a 
            state of emergency due to COVID-19. For him to volunteer in person, he had to get 
            special permission which involves the creation of a concrete plan to limit the 
            spread of the virus. By communicating effectively wit his coordinator, they came up
            with a plan that includes rigorous disinfection, PPEs, and self-conducting surveys.
          </>
        }
      />

      <ExperiencesContainer 
        background={false}
        name={"Central Ontario Leadership Seminar"}
        type={"Type: Nominated from High School"}
        date={"Date: May 2019"}
        position={"Position: Participant"}
        description={
          <>
            This seminar is held at the University of Toronto Mississauga Campus. Its
            purpose is to enhance leadership skills through a series of activities, workshops, 
            lectures, and exercises. Through this training, Charles' communication, teamwork, 
            and collaboration skills were leveraged. Moreover, the seminar spanned over a short 
            period giving him the opportunity to get along with others quickly and find methods to 
            work well amongst a diverse group.
          </>
        }
      />

      <ExperiencesContainer 
        background={true}
        name={"Social Justice Club"}
        type={"Type: Extra-curricular"}
        date={"Date: Oct. 2017 - Mar. 2019"}
        position={"Position: Member"}
        description={
          <>
            The social justice club is a school club designed to help those that are struggling
            financially in the Greater Toronto Area (GTA). This vision is executed by creating
            a series of local fundraisers to raise necessities such as food, money, and water.
            These donations are later sent to other NGOs to ease their suffering.
            <br /><br />
            Being a member, Charles has drastically enhanced his marketing skills. Since 
            the donations are a key element to sustaining the club, he had to seek ways to 
            optimize these events. He needed to draw upon his strong logistics and data 
            analysis skills to see which events people enjoy, how to raise more awareness, and 
            how to reach a larger audience. He also utilized his leadership skills to 
            guide and unite the club in order to work towards the same vision.
          </>
        }
      />

      <ExperiencesContainer 
        background={false}
        name={"Oakville Little League Baseball"}
        type={"Type: Volunteer"}
        date={"Date: May 2017 - Oct. 2017"}
        position={"Position: N/A"}
        description={
          <>
            The Oakville Little League Baseball is a developmental program for youth baseball.
            Under this organization, Charles served as a volunteer with his role fluctuating between
            the equipment crew and the official scorecard keeper.
            <br /><br />
            As a equipment crew, Charles learned how to use leadership skills to allow his group to 
            deliver equipments on time and with the right set of procedure. Communication was used 
            extensively amongst his team and his manager to ensure that all the protocols were met 
            and the games are run smoothly.
            <br /><br />
            The other role of being the official scorecard keeper trained his ability to concentrate 
            for long-duration of time. Since the games he covered where mostly championship games, 
            Charles needed accuracy, precision, and accountability to be reflected in his work. 
          </>
        }
      /> */}
    </>
  )
}

const Experiences = () => {
  return (
    <>
      <div className="charles__experiences section__padding">
        <h1 className="gradient__text">Experiences</h1>

        <p>
          This page shows all of the experiences that Charles has gained through 
          his professional, academic, and extra-curricular endeavour.
        </p>
        <ExperiencesList />
      </div>
      <Footer />
    </>
  )
}

export default Experiences