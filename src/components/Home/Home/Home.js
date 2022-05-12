import React from 'react';
import Shop from '../../Shops/Shops';
// import InventoriesDetails from '../../Products/InventoriesDetails';

import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Exparts from './Exparts/Exparts';



const Home = () => {
    return (
        <div className='m-5'>
           <Banner></Banner>
           <Shop></Shop>
           <Exparts></Exparts>
           <CustomerReview></CustomerReview>
           

     
        </div>
    );
};

export default Home;