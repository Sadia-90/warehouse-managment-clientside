import React from 'react';
import { useForm } from 'react-hook-form';
import UseServices from '../Hooks/UseServices';

const ManageServices = () => {

    

    const [services,setServices] = UseServices();


    const handleDelete = id =>{
        const procced = window.confirm('Aru you sure?');
       
       if(procced){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {

            method: 'DELETE'
                    
        })

        .then(res => res.json())
        .then(data =>{

            const remaining = services.filter(service => service._id !== id);
            console.log(remaining);
            setServices(remaining);
        })

       }
    }

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        const url =`http://localhost:5000/service`;

       fetch(url,{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body:JSON.stringify(data) 
       })
        .then(res =>res.json())
        .then(result =>{
            console.log(result);
        })

    };


    return (
        <div>
            {/* <h1>manage inventories</h1> */}
            <div className='w-50 mx-auto'>

            <h3>Please add a service</h3>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
               
                <input type="submit" value="Add Service" />
            </form>
       </div>


       <div className='w-50 mx-auto'>
            <h2>Manage Items</h2>
            {
                services.map(service => <div key={service._id}>

                    <h4><img height={250} width={200} src={service.img} alt="" />{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
                    
                </div>)
            }
        </div>


        </div>
    );
};

export default ManageServices;