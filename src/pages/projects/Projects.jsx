import React from 'react';
import './projects.css';
import Title from './title/Title';
import ReversiProject from './reversiProject/ReversiProject';
import PersonalWebsiteProject from './personalWebsiteProject/PersonalWebsiteProject';
import { Footer } from '../../components';

const Projects = () => {
  return (
    <>
      <div className="charles__projects section__padding">
        <Title />
        <PersonalWebsiteProject />
        <ReversiProject />
      </div>
      <Footer />
    </>
  )
}

export default Projects