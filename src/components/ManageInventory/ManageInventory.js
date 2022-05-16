import React from 'react';
import UseServices from '../Hooks/UseServices';

const ManageInventory = () => {


    const [services, setServices] = UseServices();


    const handleDelete = id => {
        const procced = window.confirm('Aru you sure?');

        if (procced) {
            const url = `https://gentle-fjord-55356.herokuapp.com/service/${id}`;
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
        <div>
            <h3>manage inventory</h3>




            <div className='w-50 mx-auto'>
                <h2>Manage Items</h2>
                {
                    services.map(service => <div key={service._id}>
                        <h4><img height={200} width={250} src={service.img} alt="" />{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
                    </div>)
                }
            </div>



        </div>
    );
};

export default ManageInventory;