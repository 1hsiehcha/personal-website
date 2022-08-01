import React from 'react';
import './projects.css';
import { Title } from './title';
import { ProjectContainer } from './projectContainer';
import { Footer } from '../../components';

/* Import Images */
import { 
  reversiOne, reversiTwo, reversiThree, reversiFour, reversiFive, reversiSix 
} from './imports.js';

const ProjectsList = () => {
  return (
    <>
      <ProjectContainer
        name={"Personal Website"}
        images={"N/A"}
        type={"Personal Project"}
        date={"Jun. 2022 - Jul. 2022"}
        role={"Individual Project"}
        buttonColor={"primary"}
        status={"Operating"}
        description={
        <>
          The website you are currently on happens to be the final implementation of this project. 
          Charles developed this website using React's framework. By using React, JavaScript, and 
          CSS, this  website is fully responsive and works on the most extreme dimensions. 
          By doing so, it allowed him to learn the basics of frontend development.
          <br /><br />
          Please note that this website can change overtime as the content may be updated or
          revised.
        </>}  
        link={"/personal-website"}
        github={"https://github.com/1hsiehcha/personal-website"}
        horizontal_break={true}
      />

      <ProjectContainer 
        name={"Reversi Project"}
        images={
          [
            {source: reversiOne, caption: "", alt: ""},
            {source: reversiTwo, caption: "", alt: ""},
            {source: reversiThree, caption: "", alt: ""},
            {source: reversiFour, caption: "", alt: ""},
            {source: reversiFive, caption: "", alt: ""},
            {source: reversiSix, caption: "", alt: ""},
          ]
        }
        type={"Academic"}
        date={"Mar. 2022 - Apr. 2022"}
        role={"Individual Project"}
        buttonColor={"success"}
        status={"Completed"}
        description={
        <>
          The Reversi project is written in C and stems from two labs offered by APS105 at
          the University of Toronto. The first lab is about creating the setup of the board, 
          identifying all  legal moves on the board, and executing the valid moves as they are
          entered in by the user. The second lab (the harder lab) is more or less about creating
          an intelligent AI to play the game. The goal of this AI is to be able to make good moves
          to beat the AIs created by the APS105 teaching team (APS105 smarter & APS105 smartest)
          regardless of the color they play.
          <br /><br />
          Charles' AI was able to beat APS105 smarter & APS105 smartest on both colors. The logic 
          behind his code is about creating a complex scoring system to evaluate all legal moves. 
          The scoring system utilize common Reversi strategies which includes gaining corners,
          edges, limiting the opponent's move, and seeing if the opponent has a move that can turn 
          the game in their favour as a result of proposed move. Taking these factors into
          consideration, it generates a score of each legal move and the one with the best score 
          is executed.
          <br /><br />
          Based on special permission of the APS105 course coordinator, Charles can only share some
          of the moves between his AI and APS105's AI but not the full game. Also, his source code 
          cannot be shared due to academic integrity.
        </>}
        link={"N/A"}
        github={"N/A"}
        horizontal_break={false}
      />
    </>
  )
}

const Projects = () => {
  return (
    <>
      <div className="charles__projects section__padding">
        <Title 
          header={"Projects & Publications"}
          introduction={
            <>
              This page lists out the representative projects that Charles has worked
              on. These projects are generally more difficult, so it requires him to have
              a greater understanding of the respective topics and design in general. 
              Through this, it showcases some of the skills that Charles has gained 
              throughout his career.
            </>
          }
        />
        <ProjectsList />
      </div>
      <Footer />
    </>
  )
}

export default Projects