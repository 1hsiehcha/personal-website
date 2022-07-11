import React from 'react';
import './commonProject.css';
import Badge from 'react-bootstrap/esm/Badge';

const ProjectContainer = ({ type, date, role, buttonColor, status, description, link, github }) => {
  return (
    <>  
      <div className="charles__common_project__identifier">
        <h2>
          Type:
          <p>{type}</p>
        </h2>

        <h2>
          Date:
          <p>{date}</p>
        </h2>

        <h2>
          Role:
          <p>{role}</p>
        </h2>
        
        <h2>
          Project Status:
          <p><Badge bg={buttonColor}>{status}</Badge></p>
        </h2>
      </div>

      <div className="charles__common_project__description">
        <h2>
          Project Introduction:
        </h2>

        <p>
          {description}
        </p>
      </div>

      <div className="charles__common_project__links">

        <div className="charles__common_project__links-section">
          <h2>Link: </h2>

          {link === "N/A" && (
            <h3>Unavailable</h3>
          )}

          {link !== "N/A" && (
            <a href={link}>
                Click Here
            </a>
          )}
        </div>

        <div className="charles__common_project__links-section">
          <h2>GitHub: </h2>

          {github === "N/A" && (
            <h3>Unavailable</h3>
          )}

          {github !== "N/A" && (
            <a href={github}>
                Click Here
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectContainer