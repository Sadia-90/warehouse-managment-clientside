import React, { useEffect, useState,  } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
   const { id } =useParams();
   console.log(id)

     const [service, setServiceDetails] = useState({});

     useEffect( () =>{
          const url = `http://localhost:5000/service/${id}`;
          console.log(url)

        fetch(url)
        .then(res=> res.json())
        .then(data => setServiceDetails(data))

     },[id]);

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