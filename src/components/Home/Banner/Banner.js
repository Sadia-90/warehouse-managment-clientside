import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import  Images  from '../../../Images/png-transparent-bicycle-cycling-bikes-bicycle-frame-bicycle-hybrid-bicycle.png';
import Images1 from '../../../Images/Black-Hunter-mobile-banner-IPL-banner.jpg';
import Images2 from '../../../Images/gettyimages-615281154-612x612.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


    return (
       
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img height={500}
          className="d-block w-100 "
          src={Images}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
         <img height={500}
          className="d-block w-100"
          src= {Images1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}
          className="d-block w-100"
          src={Images2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
       
    );
};

export default Banner;