import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';




import './Header.css'

const Header = () => {

   

    return (
    //     <nav className='header'>
        
    //     <div>
            
            
    //         <Link to="/inventory">Inventory</Link>
            
    //         <Link to="/Login">Login</Link>

    //     </div>
    // </nav>


    <Navbar bg="dark" variant="dark">
    <Container>
    {/* <Navbar.Brand to="/home">Navbar</Navbar.Brand> */}
    <Nav className="me-auto">
      <Link to="/">Home</Link>
      <Link to="/InventoryDetails">InventoryDetails</Link>
      <Link to="/Login">Login</Link>
    </Nav>
    </Container>
  </Navbar>






    );
};

export default Header;