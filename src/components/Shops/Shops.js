import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Shops.css'

const Shops = () => {

    const [Shops, setShops] = useState([]);

    useEffect( ()=>{
        fetch('shop.json')
        .then(res => res.json())
        .then(data => setShops(data));
    },[])
    return (
        <div>
            <h1 className='shops-title'>My Product</h1>
          
          <div className='shops-container'>
             
             {
               Shops.map(shop => <Shop
                 key={shop.id}
                 shop={shop}
               >
            </Shop>) 
             }

          </div>
           

        </div>
    );
};

export default Shops;