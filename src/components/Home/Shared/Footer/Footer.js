import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5 bg-primary mx-2 p-3'>
            <p><small>copyright &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;