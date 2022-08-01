import React from 'react';
import './projectContainer.css';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

const ProjectSlideshow = (props) => {
  return (
    <div className="charles__slideshow">
      <h1>
        {props.name}
      </h1>

      {props.images !== "N/A" && (
        <div className="charles__slideshow-container">
          <Carousel variant="dark">
            {props.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image.source} alt={image.alt} />
                  
                  <Carousel.Caption>
                    <div className="charles__slideshow__caption">
                      {image.caption}
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  )
}

const ProjectContainer = (props) => {
  return (
    <>
      <ProjectSlideshow {...props}/>
      <div className="charles__common_project">
        <h2>
          Type:
          <p>{props.type}</p>
        </h2>

        <h2>
          Date:
          <p>{props.date}</p>
        </h2>

        <h2>
          Role:
          <p>{props.role}</p>
        </h2>
        
        <h2>
          Project Status:
          <p><Badge bg={props.buttonColor}>{props.status}</Badge></p>
        </h2>
  
        <h3>
          Project Introduction:
        </h3>

        <h4>
          {props.description}
        </h4>

      
        <h5>Link:
          {props.link === "N/A" ? (
            <h6>Unavailable</h6>
          ) : (
            <a href={props.link}>
              Click Here
            </a>
          )}
        </h5>
    
        <h5>GitHub:
          {props.github === "N/A" ? (
            <h6>Unavailable</h6>
          ) : (
            <a href={props.github}>
              Click Here
            </a>
          )}
        </h5>
        
        {props.horizontal_break && (
          <hr />
        )}
      </div>
    </>
  )
}

export default ProjectContainer