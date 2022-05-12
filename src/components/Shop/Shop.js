import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css'

const Shop = ({ shop }) => {
  const navigate = useNavigate();
    const { id, name, img, description, price, quantity, supplierName } = shop;
    const  navigateToShop = id =>{
        console.log(id)
        navigate(`/Shop/${id}`)
    }

    return (
        <div className='product'>
            <img height={200} width={250} src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>SupplierName: {supplierName}</h3>
            <p>{description}</p>
            <h3>Price:$ {price}</h3>
            <h3>Quantity: {quantity}</h3>

            <button onClick={() => navigateToShop(id)}>Update button</button>

        </div>
    );
};

export default Shop;