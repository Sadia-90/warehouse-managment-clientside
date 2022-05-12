import React from 'react';
import { Link } from 'react-router-dom';

const InventoryDetails = () => {
    return (
        <div>
            <h1>inventory item</h1>
            <div className='text-left'>
            <Link to="/CheckOut">
              <button className='btn-btn-primary'>Delivered</button>
            </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;