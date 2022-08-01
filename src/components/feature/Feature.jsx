import React from 'react';
import './feature.css';

const Feature = (props) => {
  return (
    <div className="charles__features">
      <div className="charles__features-title">
        <div />
        <h1>
          {props.title}
        </h1>
      </div>

      <div className="charles__features-text">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Feature