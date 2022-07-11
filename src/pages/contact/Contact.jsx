import React from 'react';
import './contact.css';
import { github, linkedin } from './imports';
import { Footer } from '../../components';

const Contact = () => {
  return (
    <>
      <div className="charles__contact section__padding">
        <h1 className="gradient__text">
          Contact
        </h1>

        <div className="charles__contact__word_display">
          <p>
            Email: 
            <a href = "mailto:1hsiehcha@gmail.com?subject = Feedback&body = Message">
              1hsiehcha@gmail.com
            </a>
          </p>
        </div>

        <div className="charles__contact__icon_container">
            <div className="charles__contact__icon_container-section">
              <p>
                Github:
              </p>
              <a href = "https://github.com/1hsiehcha">
                <img src = {github} alt=""/>
              </a>
            </div>
            
            <div className="charles__contact__icon_container-section">
              <p>
                LinkedIn:
              </p>
              <a href = "https://www.linkedin.com/in/charles-hsieh-856682239/">
                  <img src = {linkedin} alt=""/>
              </a>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact