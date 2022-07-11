import React from 'react';
import '../commonStylesBetweenEachProject/commonProject.css';
import ProjectContainer from '../commonStylesBetweenEachProject/ProjectContainer';
import Slideshow from '../commonStylesBetweenEachProject/Slideshow';

/* If I want to include a slideshow, just uncomment this code and import the images:

const images = [
  { number: 1, source: {}, caption: "" },
]

*/

const PersonalWebsiteProject = () => {
  return (
    <div className="charles__common_project">

      <Slideshow 
        name={"Personal Website"}
        images={"N/A"}
      />

      <ProjectContainer 
        type={"Personal Project"}
        date={"Jun. 2022 - Jul. 2022"}
        role={"Individual Project"}
        buttonColor={"primary"}
        status={"Operating"}
        description={
        <>
          The website you are currently on happens to be the final implementation of this project. 
          Charles developed this website using React's framework. Through the use of React and
          CSS, this  website is fully responsive and works on extreme device dimensions. By doing so, 
          it allowed him to learn the basics of frontend development and JavaScript.
          <br /><br />
          Please note that this website can change overtime as the content may be updated or
          revised.
        </>}
        
        link={"/personal-website"}
        github={"https://github.com/1hsiehcha/personal-website"}
      />
    </div>
  )
}

export default PersonalWebsiteProject