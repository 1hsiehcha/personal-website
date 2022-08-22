import React, { useState } from 'react';
import './experiences.css';

const Menu = (props) => {
  const [click, updateClick] = useState(false);

  return (
    <>
      <div className="charles__experiences__container-format">
        <h2>{props.name}</h2>
        <h3>{props.type}</h3>
        <h3>{props.date}</h3>
        <h3>{props.position}</h3>
      </div>

      <div className='charles__experiences__container-description'>
        <h5 onClick={() => updateClick(!click)}>
          {click ? <span><p>Show Less</p></span> : <span><p>Click to Show More</p></span>}
        </h5>

        {click && (
          <p>{props.description}</p>
        )}
      </div>
    </>
  )
}

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