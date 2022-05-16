import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import AddInventory from '../../AddInventory/AddInventory';
// import UseServices from '../Hooks/UseServices';

const ServiceDetails = () => {

  const { id } = useParams();
  console.log(id)

  const [service, setService] = useState({})
  const [isChange, setIsChange] = useState(false)

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id, isChange])


  const handleUpdate = event => {
    event.preventDefault();
    let inputFiled = event.target.number.value;
    console.log(inputFiled)
    // sendInputField(number)


    const url = `http://localhost:5000/service/${id}`;
    console.log(url)
    const newQuantity = Number(service.quantity) + parseFloat(inputFiled)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({quantity : newQuantity})
    })
      .then(res => res.json())
      .then(result => {
        setIsChange(!isChange)
      })

  }


  const handleDeliverd = () => {
    const url = `http://localhost:5000/service/${id}`;
    const newQuantity = Number(service.quantity) - 1
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ quantity: newQuantity })
    })
      .then(res => res.json())
      .then(result => {
        
        console.log(result);
        setIsChange(!isChange)
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


     

      <Button type='button' onClick={() => handleDeliverd(service._id)}>deliverd button</Button>


      <div className='container w-50 mx-auto mt-4'>
            <form onSubmit={handleUpdate}>
              <input type="number" name='number' placeholder='restocked' required />{" "}
                
             <button type="submit">restock</button>
                  
            </form>
            


           
        </div>
         

      {/* <AddInventory></AddInventory> */}
    </div>
         

  );
};

export default ServiceDetails;