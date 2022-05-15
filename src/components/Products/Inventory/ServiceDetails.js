import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import UseServices from '../Hooks/UseServices';

const ServiceDetails = () => {

  const { id } = useParams();
  console.log(id)

  const [service] = useState({});
 

  // useEffect(() => {
   

  // }, [id]);


  const handleUpdate = event =>{
    event.preventDefult();
    


    const url = `http://localhost:5000/service/${id}`;
    console.log(url)

    fetch(url,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body:JSON.stringify(id) 
   })
    .then(res =>res.json())
    .then(result =>{
        console.log(result);
    })

  }

  





  return (
    <div className=' mx-auto w-50'>
      <img height={200} width={250} src={service.img} alt="" />
      <h1>inventory name: {service.name}</h1>
      <h3>SupplierName: {service.supplierName}</h3>
      <p>{service.description}</p>
      <h3>Price:$ {service.price}</h3>
      <h3>Quantity: {service.quantity}</h3>

   
      <button onClick={() => handleUpdate(service._id)}>update</button>

      <Button onClick={() => handleUpdate(service._id)}>deliverd button</Button>

    </div>
  );
};

export default ServiceDetails;