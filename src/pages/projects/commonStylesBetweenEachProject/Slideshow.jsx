import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slideshow.css';
import './commonProject.css';

const Slideshow = ({ name, images }) => {
  return (
    <div className="charles__common_project__slideshow">
        <h1>
          {name}
        </h1>

        {images !== "N/A" && (
          <div className="charles__slideshow">
            <Carousel variant="dark">
              {images.map(image => (
                  <Carousel.Item key={image.number}>
                    <img className="d-block w-100" src={image.source} alt="" />
                    
                    <Carousel.Caption>
                      <div className="charles__slideshow__caption">
                        {image.caption}
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
  )
}

export default Slideshow