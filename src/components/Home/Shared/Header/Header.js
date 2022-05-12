// import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
 import { useAuthState } from 'react-firebase-hooks/auth';
// import { NavLink } from 'react-router-dom';
 import auth from '../../../../firebase.init';
// import { Container, Nav, Navbar } from 'react-bootstrap';

 import { Link } from 'react-router-dom';




import './Header.css'

const Header = () => {

   const [user] = useAuthState(auth);

  // const handelSignOut = () => {
  //     signOut(auth);
  // }

    return (
  //     <>
  //     <Navbar bg="primary" variant="dark">

  //         {/* <div>
  //             <h1>independent service</h1>
  //         </div> */}


  //         <Nav className="me-auto">
  //             <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>Cycle Shop</NavLink>

  //             <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blog'>Blogs</NavLink>
  //             <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>About</NavLink>
  //             {

  //                 user ?
  //                     <button onClick={handelSignOut}>sign out</button>
  //                     :
  //                     <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/login'>Login</NavLink>
  //             }

  //         </Nav>


  //     </Navbar>



  // </>

      

                  <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                  <Container>
                  <Navbar.Brand as={Link} to="/">Cycle Shop</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                      
                      <Nav.Link as={Link} to="/Manageinventories">Manageinventories</Nav.Link>

                      
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