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
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
         <img height={500}
          className="d-block w-100"
          src= {Images1}
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height={500}
          className="d-block w-100"
          src={Images2}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
       
    );
};

export default Banner;