import React from 'react';
import Header from './header/Header';
import { Education } from './education';
import { Footer } from '../../components';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="charles__home section__padding">
      <Header />
      <Education />
      </div>
      <Footer />
    </>
  )
}

export default Home