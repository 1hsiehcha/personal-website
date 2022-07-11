import React from 'react';
import './footer.css';
import { logo } from './imports.js';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="charles__footer charles__footer-padding">
      
      <div className="charles__footer__nav_link">
        <NavLink to="/personal-website">
          <img src= { logo } alt=""/>
        </NavLink>
      </div>

      <h1>
        Last updated on Jul. 11th, 2022.
      </h1>

      <h1>
        Copyright © 2022-2022 Charles Hsieh - All Rights Reserved.
      </h1>
    </div>
  )
}

export default Footer