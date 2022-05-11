import React from 'react';

import Products from '../../Products/Products';


import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Exparts from './Exparts/Exparts';



const Home = () => {
    return (
        <div className='m-5'>
           <Banner></Banner>
           <Products></Products>
           <Exparts></Exparts>
           <CustomerReview></CustomerReview>
           

     
        </div>
    );
};

export default Home;