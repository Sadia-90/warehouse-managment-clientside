import React, { useEffect, useState,  } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } =useParams();

     const [service, setServiceDetails] = useState({});

     useEffect( () =>{
          const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setServiceDetails(data))

     },[]);

    return (
        <div>
            <h1>inventory item: {service.name}</h1>
            <div className='text-left'>
            <Link to="/CheckOut">
              <button className='btn-btn-primary'>Check Out</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;