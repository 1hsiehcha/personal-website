import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import './navbar.css';
import { menuBar, menuX } from './imports';
import { NavLink } from 'react-router-dom';

const ClickFeature = () => {
  window.scrollTo({top: 0, left: 0});
}

const Menu = () => (
  <>
    <p><span><NavLink to="/personal-website" onClick={ClickFeature}>
      Home
    </NavLink></span></p>

    <p><span><NavLink to="/personal-website/achievements" onClick={ClickFeature}>
      Achievements
    </NavLink></span></p>

    <p><span><NavLink to="/personal-website/projects" onClick={ClickFeature}>
      Projects & Publications
    </NavLink></span></p>

    <p><span><NavLink to="/personal-website/skills" onClick={ClickFeature}>
      Skills
    </NavLink></span></p>

    <p><span><NavLink to="/personal-website/experiences" onClick={ClickFeature}>
      Experiences
    </NavLink></span></p>
    
    <p><span><NavLink to="/personal-website/contact" onClick={ClickFeature}>
      Contact
    </NavLink></span></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="charles__navbar">
      <div className="charles__navbar-links">
        <div className="charles__navbar-links_logo">
          <NavLink to="/personal-website" onClick={ClickFeature}>
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