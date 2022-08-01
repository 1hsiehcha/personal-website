import React from 'react';
import './contact.css';
import { github, linkedin } from './imports';
import { Footer } from '../../components';


const IconList = () => {
  return (
    <>
      <ImageIcon 
        title={"GitHub:"}
        image={github}
        link={"https://github.com/1hsiehcha"}
      />

      <ImageIcon 
        title={"LinkedIn:"}
        image={linkedin}
        link={"https://www.linkedin.com/in/charles-hsieh-856682239/"}
      />
    </>
  )
}

const ImageIcon = (props) => {
  return (
    <>
      <h2>
        {props.title}
        &nbsp;
        <a href={props.link}>
          <img src={props.image} alt=""/>
        </a>
      </h2>
    </>
  )
}

const Contact = () => {
  return (
    <>
      <div className="charles__contact section__padding">
        <h1 className="gradient__text">
          Contact Charles
        </h1>

        <p>
          Email: 
          <a href = "mailto:1hsiehcha@gmail.com?subject = Feedback&body = Message">
            <h3>
              1hsiehcha@gmail.com
            </h3>
          </a>
        </p>
        <IconList />
      </div>
      <Footer />
    </>
  )
}

export default Contact