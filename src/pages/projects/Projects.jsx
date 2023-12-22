import React from 'react';
import './projects.css';
import { Title } from './title';
import { ProjectContainer } from './projectContainer';
import { Footer } from '../../components';

/* Import Images. */
import { 
  reversiOne, reversiTwo, reversiThree, reversiFour, reversiFive, reversiSix,
  warOne, warTwo, warThree, warFour, warFive, warSix, warSeven, warEight, warNine,
  warTen,
  appleOne, appleTwo, appleThree, appleFour, appleFive,
  mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven, mapEight
} from './imports.js';

const ProjectsList = () => {
  return (
    <>
      <ProjectContainer
        name={"Multi-Party Text Conferencing Application"}
        images={"N/A"}
        imageOrientation={"N/A"}
        length={500}
        type={"Lab (Academia)"}
        date={"Nov. 2023 - Dec. 2023"}
        role={"Main Developer"}
        tool={"C, Socket Programming (TCP), Unix, Makefile."}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This lab was done for ECE361: Computer Networks I. As by the name, it is a command-line app 
          that facilitates and manages group chats. Multiple clients, aka users, are able to connect 
          to the server which allows them to join, create, or leave any group chats at their own 
          will. The server program supports the login of existing users as well as the registration 
          of new members by storing their data in a file and retrieving it upon startup. The server 
          also offers a "/list" feature that prints out all active users and sessions which is 
          updated automatically. Furthermore, both the server and client code is equipped with 
          advanced logic and error-checking features to handle invalid user input, logic, or commands.
          <br /><br />
          To create this application, Charles used TCP sockets in C to create reliable connections
          between the server and the clients. To manage all the users, Charles used the TAILQ 
          in Linux to dynamically manage every user and their status. In addition, UNIX 
          system calls were used alongside C functions to be able to extract data from a file 
          allowing their data be stored persistently. As a result, Charles' group earned 100% on this lab and 
          completed it one week ahead of the due date!
          <br /><br />
          Due to academic integrity, the source code of this lab cannot be shared whatsoever.
          Please feel free to watch the demo video or reach out!
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/1SSF047cScE"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"File Transfer Application"}
        images={"N/A"}
        imageOrientation={"landscape"}
        length={500}
        type={"Lab (Academia)"}
        date={"Sept. 2023 - Oct. 2023"}
        role={"Main Developer"}
        tool={"C, Socket Programming (UDP), UNIX, Makefile."}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This lab was done for ECE361: Computer Networks I. This program is designed to transfer
          files remotely across two different machines. This program supports files of any type
          and can be of any size. This is because the files are transferred in binary instead of 
          plain text.
          <br /><br />
          To create this application, Charles used UDP sockets in C. Since UDP is connectionless,
          Charles had to implement an ARQ to deal with packet drops and re-transmissions. 
          Furthermore, to support transmissions of large files the program automatically fragments
          the file into smaller pieces to improve reliability when sending it across the network. 
          It is also immune to invalid inputs such as entering non-existing files or invalid 
          commands.
          <br /><br />
          Due to academic integrity, the source code of this project cannot be shared whatsoever.
          Please feel free to watch the demo video or reach out!
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/hQ16V4zkmiE"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"GIS Mapper"}
        images={
          [
            {source: mapOne, caption: "", alt: ""},
            {source: mapTwo, caption: "", alt: ""},
            {source: mapThree, caption: "", alt: ""},
            {source: mapFour, caption: "", alt: ""},
            {source: mapFive, caption: "", alt: ""},
            {source: mapSix, caption: "", alt: ""},
            {source: mapSeven, caption: "", alt: ""},
            {source: mapEight, caption: "", alt: ""}
          ]
        }
        imageOrientation={"landscape"}
        length={500}
        type={"Coursed-Based Project"}
        date={"Jan. 2023 - Apr. 2023"}
        role={"Coding Lead"}
        tool={"C++, GTK, Glade, EZGL, Git, UnitTest++, OSM Database."}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This is a course-based project for ECE297: Software Communication & Design. The
          course spans over 4 months in which teams of 3 work together to develop a mapping
          software. To make feasible development, the project is split into four software-based
          milestones. In addition, teams were required to use Git and UnitTest++ to simulate 
          real-world development.
          <br /><br />
          The first milestone was about building a set of useful functions that would be useful 
          for later milestones. It involves interacting and extracting data from OSM database as 
          well as the teaching team's API to perform useful operations. To do so, Charles' team 
          used many data structures including struct, vectors, unordered map, unordered set, and 
          priority queues. Some useful functions consist of finding adjacent intersections, 
          closest POI, distance between 2 points, feature area, intersections of streets, 
          street length, street segment travel time, street IDs from partial street names, getting
          OSM node tag value, etc. Charles' team has scored 94.9% on this milestone!
          <br /><br />
          The second milestone is focused on building a user interface. To do so, Charles' 
          team utilized both the EZGL and GTK3 graphics library. In addition, the team used Glade to
          set up call-back functions and component IDs to be able to interact with the components 
          from the GTK library providing greater customization. For more tangible terms, our team 
          drew the POIs, streets, intersections, buildings, bodies of water, subways, night mode, 
          and supported labelling for non-latin languages. Charles' team scored 100% on this 
          milestone!
          <br /><br />
          The third milestone is about implementing an algorithm to find the shortest legal 
          path between 2 points in a city. Our team used A* algorithm which is an enhancement of the 
          Dijkstra algorithm. The heuristics that allowed A* to perform better consist of 
          using geometric distance to 'predict/guess' which directions to search for and give
          proper weightings to elements in the wavefront. In addition, the path should be displayed 
          to the user through the graphical interface. Charles' team scored 99.3% on this 
          milestone!
          <br /><br />
          The last milestone is about solving the Traveling Courier problem. Since this is a 
          non-polynomial problem, it was impossible for the teams to get a 'perfect' answer. Thus,
          to improve the quality of result, Charles' team used multiple techniques including 
          multi-targeted Dijkstra with multi-threading, greedy algorithm, simulated annealing, and
          two-opt perturbations. All in all, Charles scored 11.3% higher than average for all of
          the software components of the course!
          <br /><br />
          Due to academic integrity, the source code of this project cannot be shared whatsoever.
          Please feel free to watch the demo video or reach out!
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/tZERx-EIcpk"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"Apple Catcher Game"}
        images={
          [
            {source: appleOne, caption: "", alt: ""},
            {source: appleTwo, caption: "", alt: ""},
            {source: appleThree, caption: "", alt: ""},
            {source: appleFour, caption: "", alt: ""},
            {source: appleFive, caption: "", alt: ""}
          ]
        }
        imageOrientation={"square"}
        type={"Final Course Project"}
        date={"April 2023"}
        role={"Main Developer"}
        tool={"C & DE1-SoC (interrupts, ARM private timer, double buffering, PS/2 keyboard)"}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This was the final project for ECE243: Computer Organization. The project was built
          in groups of 2 with each project being pre-approved by the course instructor.
          <br /><br />
          As you might have seen in the demo video, this game is the original Apple Catcher game.
          The goal is to use the PS/2 keyboard to capture the apples falling from the sky. The 
          user starts out with 5 lives and each live is lost for every time the apple touches the 
          ground. The objective is to catch as many apples as you can before losing all 5 lives. 
          Charles' group earned 100% in this project!
          <br /><br />
          To accomplish this, our team used the C programming language to develop this code. Since
          C does not offer STL containers, Charles had to write a set of functions similar to vectors to
          dynamically grow and shrink the apples array in runtime. This involves using pointers, 
          deep copying, and malloc-ing. In addition, Charles' team used double buffering to ensure 
          that the animation is smooth. But this added additional complexity as the program must 
          remember and delete all the apples that were caught by the basket in the previous frame. 
          Since erasing the entire screen would be too slow, Charles used another dynamic array created
          by himself to erase the apples.
          <br /><br />
          Futhermore, Charles used the ARM private timer with interrupts (via GNU) to control how 
          frequently the apples are spawned. Interrupts were also used to read from the FIFO queue
          of the PS/2 keyboard to move the basket whenever it is pressed to avoid delays. Note that 
          interrupts are more efficient but is also more difficult to implement. This code is 
          designed to run on the DE1-SoC board. Lastly, Charles' team converted all of the images 
          into sprites to make the game look nice and visually appealing. Extra attention was paid 
          to ensure that the basket can capture the apples upon contact, if it hits the side of the 
          moving basket.
          <br /><br />
          Note that the demo video is done on the simulator instead of the board for ease of 
          recording, thus is slower than usual.
          <br />
          Due to academic integrity, this code cannot be shared whatsoever. But please feel free 
          to watch the demo video!
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/3wljYHgiLt8"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"16-bit Processor"}
        images={"N/A"}
        type={"Lab (Academia)"}
        date={"March 2023"}
        role={"Main Developer"}
        tool={"Verilog, Assembly, ModelSim, DESim, Intel® Quartus Prime"}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This lab was done for ECE243: Computer Organization and is about building a 
          16-bit processor. This processor supports the following set of commands:
          mv (move), mvt (move top), add, sub, and, ld (load), st (store), and b (branch).
          To do this, the processor contains a program counter, SRAM, ALU, a flag register, and
          IR register. In addition, it is connected to multiple I/O devices on the DE1-Soc board 
          including the LEDs, HEX displays, and switches. Charles also debug his Verilog code
          using ModelSim as well as DESim.
          <br /><br />
          Moreover, students are required to write assembly code that corresponds to their
          processor to ensure its functionality is correct. The teaching team also provided
          20% bonus marks for those that can implement a counter that counts from 0 to 65535
          in integer format on the HEX display. As a result, Charles scored 120% on this lab!!!
          <br /><br />
          The following demo video shows the counter code running on his processor. 
          For ease of recording, it is done the DESim simulator instead of the actual DE1-SoC 
          board. Due to academic integrity, the source code cannot be shared whatsoever. Please 
          feel free to watch the demo video!
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/UjO6xM--5eM"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"Codelaboration"}
        images={"N/A"}
        type={"Personal Project"}
        date={"Jul. 2022 - Aug. 2022"}
        role={"Vice Head Web Developer"}
        tool={"React, Javascript, HTML, CSS"}
        status={
          [
            {color: "primary", name: "Operating"},
            {color: "danger", name: "No Updates"}
          ]
        }
        description={
        <>
          Codelaboration is a platform designed to help developers find their project
          of interest. Codelaboration brings the concept of job-searching websites to 
          the programming community. It aims to be an active recruiting platform where founders 
          post complicated projects that have insufficient programmers to turn their project
          into reality. Also talented programmers can use this website as a platform to choose their 
          projects of interest and Codelaboration can help bring the two together.
          <br /><br />
          This platform is developed using React's framework and similar to the current website 
          you are on, it is designed to be fully responsive. This project deepen Charles' 
          understanding of frontend development through the use of React, JavaScript, CSS, and HTML. 
          Since, this project is developed under a team environment, it allowed him to utilize 
          Git & GitHub while sharpening his soft skills of communication, collaboration, and 
          organization.
        </>}
        link={"https://1hsiehcha.github.io/Codelaboration"}
        github={"https://github.com/1hsiehcha/Codelaboration"}
        demo={"N/A"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"Personal Website"}
        images={"N/A"}
        type={"Personal Project"}
        date={"Jun. 2022 - Aug. 2022"}
        role={"Individual Project"}
        tool={"React, Javascript, HTML, CSS"}
        status={[{color: "primary", name: "Operating"}]}
        description={
        <>
          The website you are currently on happens to be the final implementation of this project. 
          Charles developed this website using React's framework. By using React, JavaScript, and 
          CSS, this website is fully responsive and works on the most extreme dimensions. These 
          dimensions are so extreme that most websites including popular ones experience UI 
          malfunctions. By doing so, it allowed him to learn the basics of frontend development.
          <br /><br />
          Please note that this website can change overtime as the content may be updated or
          revised.
        </>}  
        link={"/personal-website"}
        github={"https://github.com/1hsiehcha/personal-website"}
        demo={"N/A"}
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
        imageOrientation={"portrait"}
        type={"Lab (Academia)"}
        date={"Mar. 2022 - Apr. 2022"}
        role={"Individual Project"}
        tool={"C Programming Language"}
        status={[{color: "success", name: "Completed"}]}
        description={
        <>
          The Reversi project is a lab for APS105: Computer Fundamentals. It is written in the C 
          programming language. The first part of the lab is about creating the setup of the board, 
          identifying all legal moves on the board, and executing the valid moves as they are
          entered in by the user. The second part of the lab is more or less about creating
          an intelligent AI to play the game. The goal of this AI is to be able to make good moves
          to beat the AIs created by the APS105 teaching team (APS105 smarter & APS105 smartest)
          regardless of the color they play.
          <br /><br />
          Charles' AI was able to beat APS105 smarter & APS105 smartest on both colors and earned
          95% on this lab. The logic behind his code is about creating a complex scoring system 
          to evaluate all legal moves. The scoring system utilize common Reversi strategies which 
          includes gaining corners, gaining edges, limiting the opponent's move, and seeing if the 
          opponent has a move that can turn the game in their favour as a result of proposed move. 
          Taking these factors into consideration, it generates a score of each legal move and the 
          move with the best score is executed.
          <br /><br />
          Based on special permission of the APS105 course coordinator (Professor Baochun Li), 
          Charles can only share a fraction of the game between his AI and APS105's AI but not the 
          entire game. Also, his source code cannot be shared due to academic integrity.
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"N/A"}
        horizontal_break={true}
      />

      <ProjectContainer
        name={"WAR 2.0"}
        images={
          [
            {source: warOne, caption: "", alt: ""},
            {source: warTwo, caption: "", alt: ""},
            {source: warThree, caption: "", alt: ""},
            {source: warFour, caption: "", alt: ""},
            {source: warFive, caption: "", alt: ""},
            {source: warSix, caption: "", alt: ""},
            {source: warSeven, caption: "", alt: ""},
            {source: warEight, caption: "", alt: ""},
            {source: warNine, caption: "", alt: ""},
            {source: warTen, caption: "", alt: ""}
          ]
        }
        imageOrientation={"portrait"}
        type={"Culminating Project"}
        date={"Dec. 2019 - Jan. 2020"}
        role={"Individual Project"}
        tool={"Python, PyGame"}
        status={
          [
            {color: "success", name: "Completed"}
          ]
        }
        description={
        <>
          This was Charles' culminating project for Grade 11 (ICS3U1: Introduction to Computer 
          Science). Due to Charles' exceptional effort he earned 100% on this culminating project 
          and 99% in ICS3U1. Since this project was done a while back, it may not be too 
          representative of Charles' current skills and practices.
          <br /><br />
          This game is a variation of the classical WAR game. The rules are this:
          <br />
          1. At the center of the board, there is an unlimited deck of cards that the 2 players 
          can draw from. The game consist of 2 players only and they alternate to draw from the
          deck of cards.
          <br /><br />
          2. The player that has drawn the highest value card in that round wins both cards and
          earns 2 points. The first player to earn 56 points/cards wins the game. But what happens
          when both players draw the card of the same value? 
          <br /><br />
          3. Enter WAR mode. In this case, the program will set aside 4 cards and the players draw
          from the deck again. The player that won this subsequent round will earn all 6 points/cards. 
          But if what if both players experience multiple consecutive rounds of tie? Well in that 
          case the previous WAR mode would be cancelled. Ex: in theory let's say the two players 
          draw the same value cards for 5 consecutive rounds and in the 6th round, player one has 
          won that round. Instead of receiving 5×4 + 2 = 22 points, they only receive 4 + 2 = 6 
          points.
          <br /><br />
          This project was written in Python and in particular the PyGame module. Charles was 
          exposed to the basic concepts object-oriented programming including classes, inheritance, 
          and polymorphism. It also introduced him to the basic animation properties of moving the 
          cards and displaying simple graphics at the end of the game. He has also placed
          significant efforts to ensure that the program is bulletproof and that the user cannot 
          break it even if they do not adhere to rules of the game (ex: player 1 cannot draw from 
          the deck when it is player 2's turn).
          <br /><br />
          Due to academic integrity, the source code of this project cannot be shared whatsoever.
          Please feel free to watch the demo video or reach out! 
        </>}
        link={"N/A"}
        github={"N/A"}
        demo={"https://youtu.be/uFbxmDFIX3Y"}
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
          header={"Projects"}
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