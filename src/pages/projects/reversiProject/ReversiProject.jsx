import React from 'react';
import '../commonStylesBetweenEachProject/commonProject.css';
import ProjectContainer from '../commonStylesBetweenEachProject/ProjectContainer';
import Slideshow from '../commonStylesBetweenEachProject/Slideshow';
import { reversiOne, reversiTwo, reversiThree, reversiFour, reversiFive, reversiSix } from './imports';

const images = [
  { number: 1, source: reversiOne, caption: "" },
  { number: 2, source: reversiTwo, caption: "" },
  { number: 3, source: reversiThree, caption: "" },
  { number: 4, source: reversiFour, caption: "" },
  { number: 5, source: reversiFive, caption: "" },
  { number: 6, source: reversiSix, caption: "" },
]

const ReversiProject = () => {
  return (
    <div className="charles__common_project">

      <Slideshow 
        name={"Reversi Project"}
        images={images}
      />

      <ProjectContainer 
        type={"Academic"}
        date={"Mar. 2022 - Apr. 2022"}
        role={"Individual Project"}
        buttonColor={"success"}
        status={"Completed"}
        description={
        <>
          The Reversi project is written in C and originated from two labs offered by APS105 
          at University of Toronto. The first lab is about creating the setup of the board, 
          identifying all  legal moves on the board, and executing the valid moves as they are
          entered in by the user. The second lab (the harder lab) is more or less about creating
          an intelligent AI to play the game. The goal of this AI is to be able to make good moves
          to beat the AIs created by the APS105 teaching team (APS105 smarter & APS105 smartest)
          regardless of the color they play.
          <br /><br />
          Charles' AI was able to beat APS105 smarter & APS105 smartest on both colors. The logic 
          behind his code is about creating a complex scoring system to evaluate all legal moves. 
          The scoring system utilize common Reversi strategies which includes gaining corners,
          edges, limiting the opponent's move, and seeing if the opponent has a move that
          can turn the game in their favour as a result of proposed move. Taking these factors into
          consideration, it generates a score of each legal move and the one with the highest score 
          is executed.
          <br /><br />
          Based on special permission of the APS105 course coordinator, Charles can only share some
          of the moves between his AI and APS105's AI but not the full game. Also, his source code 
          cannot be shared due to academic integrity.
        </>}
        
        link={"N/A"}
        github={"N/A"}
      />
    </div>
  )
}

export default ReversiProject