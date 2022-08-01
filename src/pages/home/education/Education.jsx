import React from 'react';
import './education.css';

const Education = (props) => {
  return (
    <div className="charles__education">
      <div className="charles__education__container">
        <div className="charles__education__container-center_aligned">
          <img src={props.image} alt={props.image_alt}/>
          <h2>{props.school_name}</h2>
        </div>

        <div className="charles__education__container-left_aligned">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Education