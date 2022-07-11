import React from 'react';
import './experiences.css';

const Menu = ({ name, type, date, position, description }) => (
    <>
        <div className="charles__experiences__container-format">
            <h2>{name}</h2>
            <h3>{type}</h3>
            <h3>{date}</h3>
            <h3>{position}</h3>
        </div>
        
        <p>{description}</p>
    </>
)

const Container = ({ background, name, type, date, position, description }) => {
  return (
    <div>
        {background === "odd" && (
            <div className="charles__experiences__container-odd_variation section__padding">
                <Menu name = {name} type = {type} date = {date} position = {position} description = {description}/>
            </div>
        )}

        {background === "even" && (
            <div className="charles__experiences__container-even_variation section__padding">
                <Menu name = {name} type = {type} date = {date} position = {position} description = {description}/>
            </div>
        )}
    </div>
    
  )
}

export default Container