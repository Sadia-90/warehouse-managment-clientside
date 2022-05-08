import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Images from '../../../../../Images'


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Images}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  </Carousel>
   
   
        </div>
    );
};

export default Banner;