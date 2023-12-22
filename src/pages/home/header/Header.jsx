import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <div className="charles__header">
      <div className="charles__header-content">
        <h2 className="gradient__text">
          {props.title}
        </h2>

        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default Header