import React from 'react';
import './header.css';
import profile from '../../../assets/profile.png';

const Header = () => {
  return (
    <div className="charles__header">
      <div className="charles__header-content">
        <h1 className="gradient__text">
          Welcome.
        </h1>

        <p>
          Charles Hsieh is a current undergraduate student studying at University of Toronto.
          He is studying in the stream of Electrical and Computer Engineering and is open to both
          the hardware and software development.
        </p>
      </div>
        
      <div className="charles__header-image">
        <img src = {profile} alt = "Charles Hsieh"/>
      </div>
    </div>
  )
}

export default Header