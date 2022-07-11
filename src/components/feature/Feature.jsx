import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="charles__features">
      <div className="charles__features-container__feature">
        <div className="charles__features-container__feature-title">
          <div />
          <h1>
            {title}
          </h1>
        </div>

        <div className="charles__features-container_feature-text">
          <p>
            {text}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Feature