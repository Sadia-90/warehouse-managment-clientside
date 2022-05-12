import React from 'react';
import notFound from '../../Images/istockphoto-1302333331-170667a.jpg'
const NotFound = () => {
    return (
        <div className='bg-primary text-center mb-5 p-3'>
            <h1>404</h1>
            <h3>Not Found</h3>
           <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;