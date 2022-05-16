import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';
import './Shops.css'

const Shops = () => {
  

    const [Shops, setShops] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setShops(data));
    },[])


 

  const navigateManageInventory = {
  
  }


    return (
        <div>
            <h1 className='shops-title'>My Product</h1>
          
          <div className='shops-container'>
             
             {
               Shops.slice(0, 6).map(shop => <Shop
                 key={shop._id}
                 shop={shop}
               >
            </Shop>) 
             }

          </div>
         
          <p>
           <Link to='/ManageInventory' className='btn-btn-primary' onClick={navigateManageInventory}>Manage Inventory</Link>
           </p>
        </div>
         
    );
};

export default Shops;