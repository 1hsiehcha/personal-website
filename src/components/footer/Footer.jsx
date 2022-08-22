import React from 'react';
import './footer.css';
import { logo } from './imports.js';
import { NavLink } from 'react-router-dom';

const LastUpdatedOn = () => {
  return (
    <>
      Aug. 22nd, 2022.
    </>
  )
}

const Footer = () => {
  return (
    <div className="charles__footer charles__footer-padding">
      <div className="charles__footer-logo">
        <NavLink to="/personal-website" onClick={window.scrollTo({top: 0, left: 0})}>
          <img src= { logo } alt=""/>
        </NavLink>
      </div>

      <h1>
        Last updated on <LastUpdatedOn />
        <br />
        Copyright © 2022 - 2022 Charles Hsieh - All Rights Reserved.
      </h1>
    </div>
  )
}

export default Footer