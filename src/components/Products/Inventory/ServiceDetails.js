import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className=' mx-auto w-50'>
           <img height={200} width={250} src={service.img} alt="" />
            <h1>inventory item: {service.name}</h1>
            <h3>SupplierName: {service.supplierName}</h3>
            <p>{service.description}</p>
            <h3>Price:$ {service.price}</h3>
            <h3>Quantity: {service.quantity}</h3>
            
  
           
            
        </div>
    );
};

export default ServiceDetails;