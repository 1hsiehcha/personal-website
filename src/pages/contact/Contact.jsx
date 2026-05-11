import React from 'react';
import './contact.css';
import { github, linkedin, google_scholar, orcid } from './imports';
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
        link={"https://ca.linkedin.com/in/charles-hsieh-856682239"}
      />

      <ImageIcon 
        title={"Google Scholar:"}
        image={google_scholar}
        link={"https://scholar.google.com/citations?user=V3XptIcAAAAJ&hl=en&oi=ao"}
      />

      <ImageIcon 
        title={"ORCid:"}
        image={orcid}
        link={"https://orcid.org/0009-0004-3515-4576"}
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