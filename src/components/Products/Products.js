import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';



const Products = () => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    return (
        <div>
            <h2 className='Products-title'>Our Products</h2>

            <div className='product-container'>
            {
                Products.map(product => <Product
                    key={product.id}
                    product={product}

                ></Product>)
            }

            </div>
        </div>
    );
};

export default Products;