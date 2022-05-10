import React from 'react';
import './Product.css';

const Product = ({ product }) => {

    const { name, img, description, price, quantity, supplierName } = product;

    return (
        <div className='product'>
            <img height={200} width={250} src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>SupplierName: {supplierName}</h3>
            <p>{description}</p>
            <h3>Price:$ {price}</h3>
            <h3>Quantity: {quantity}</h3>
            <div>
                <button>Update</button>
            </div>
        </div>
    );
};

export default Product;