import React from 'react';
import './experiences.css';

const Menu = (props) => (
  <>
    <div className="charles__experiences__container-format">
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h3>{props.date}</h3>
      <h3>{props.position}</h3>
    </div>
    <p>{props.description}</p>
  </>
)

const ExperiencesContainer = (props) => {
  return (
    <div>
      {props.background ? (
        <div className="charles__experiences__container-odd_variation">
          <Menu {...props}/>
        </div>
      ) : (
        <div className="charles__experiences__container-even_variation">
          <Menu {...props}/>
        </div>
      )}
    </div>
  )
}

export default ExperiencesContainer