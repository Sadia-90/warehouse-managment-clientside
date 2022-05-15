import React, { useEffect, useState, } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import UseServices from '../Hooks/UseServices';

const ServiceDetails = () => {

  const { id } = useParams();
  console.log(id)

  const [service, setServiceDetails] = useState({});
  const [services, setServices] = useState({})

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    console.log(url)

    fetch(url)
      .then(res => res.json())
      .then(data => setServiceDetails(data))

  }, [id]);




  const handleDelete = id => {
    const procced = window.confirm('Aru you sure?');

    if (procced) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {

        method: 'DELETE'

      })

        .then(res => res.json())
        .then(data => {

          const remaining = services.filter(service => service._id !== id);
          console.log(remaining);
          setServices(remaining);
        })

    }
  }





  return (
    <div className=' mx-auto w-50'>
      <img height={200} width={250} src={service.img} alt="" />
      <h1>inventory name: {service.name}</h1>
      <h3>SupplierName: {service.supplierName}</h3>
      <p>{service.description}</p>
      <h3>Price:$ {service.price}</h3>
      <h3>Quantity: {service.quantity}</h3>


      <Button onClick={() => handleDelete(service._id)}>deliverd button</Button>

    </div>
  );
};

export default ServiceDetails;