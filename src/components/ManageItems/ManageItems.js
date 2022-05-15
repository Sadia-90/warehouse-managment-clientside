import React from 'react';
import UseServices from '../Hooks/UseServices';

const ManageItems = () => {

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
            console.log(data);
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        })

       }
    
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Items</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageItems;