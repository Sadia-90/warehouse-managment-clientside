import React from 'react';
import Products from '../../Products/Products';


import Banner from '../Banner/Banner';
import Exparts from './Exparts/Exparts';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Exparts></Exparts>
           

     
        </div>
    );
};

export default Home;