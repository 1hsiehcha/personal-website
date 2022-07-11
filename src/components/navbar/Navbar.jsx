import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import './navbar.css';
import { menuBar, menuX } from './imports';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <>
    <p><span><NavLink to="/personal-website">Home</NavLink></span></p>
    <p><span><NavLink to="/personal-website/achievements">Achievements</NavLink></span></p>
    <p><span><NavLink to="/personal-website/skills">Skills</NavLink></span></p>
    <p><span><NavLink to="/personal-website/experiences">Experiences</NavLink></span></p>
    <p><span><NavLink to="/personal-website/projects">Projects & Publications</NavLink></span></p>
    <p><span><NavLink to="/personal-website/contact">Contact</NavLink></span></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="charles__navbar">
      <div className="charles__navbar-links">
        <div className="charles__navbar-links_logo">
          <NavLink to="/personal-website">
            <img src ={logo} alt="" />
          </NavLink>
        </div>

        <div className="charles__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="charles__navbar-menu">
        {toggleMenu
          ? <img src={menuX} alt="" onClick = {() => setToggleMenu(false)}/>
          : <img src={menuBar} alt="" onClick = {() => setToggleMenu(true)}/>
        }

        {toggleMenu && (
          <div className= "charles__navbar-menu_container scale-up-center">
            <div className="charles__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar