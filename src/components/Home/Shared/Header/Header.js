import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

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


  //   <Navbar bg="dark" variant="dark">
  //   <Container>
  //   {/* <Navbar.Brand to="/home">Navbar</Navbar.Brand> */}
  //   <Nav className="me-auto">
  //     <Link to="/">Home</Link>
  //     <Link to="/InventoryDetails">InventoryDetails</Link>
  //     <Link to="/Blogs">Blogs</Link>
  //     <Link to="/Login">Login</Link>
  //   </Nav>
  //   </Container>
  // </Navbar>


<Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      <Nav.Link as={Link} to="/InventoryDetails">InventoryDetails</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/Login">
       Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



    );
};

export default Header;