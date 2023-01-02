import React, { useState } from 'react';
import './education.css';

const Education = (props) => {
  const [click, updateClick] = useState(false);

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

      {props.button !== "N/A" && (
        <div className='charles__education__button'>
          <h5 onClick={() => updateClick(!click)}>
            {click ? <span><p>Show Less</p></span> : <span><p>Click to Show More</p></span>}
          </h5>

          {click && (
            <h3>{props.button}</h3>
          )}
        </div>
      )}
    </div>
  )
}

export default Education