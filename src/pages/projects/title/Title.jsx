import React from 'react';
import './title.css';

const Title = (props) => {
  return (
    <div className="charles__title">
      <h1 className="gradient__text">
        {props.header}
      </h1>
      
      <div className="charles__title__text_box">
        <h2>{props.introduction}</h2>
      </div>
    </div>
  )
}

export default Title