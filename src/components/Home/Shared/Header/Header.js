
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../../firebase.init';
// import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Header.css'
import { signOut } from 'firebase/auth';



const Header = () => {

  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
  }

  return (




    <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Cycle Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


            <Nav.Link as={Link} to="/ManageServices">ManageServices</Nav.Link>
            <Nav.Link as={Link} to="/AddService">AddService</Nav.Link>
                      <Nav.Link as={Link} to="/AddInventory">AddInventory</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>

            {
              user ? (
                // flex flex-col lg:flex-row
                <div className='manage-signout'>
                  <NavLink
                    to="/ManageItems"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Manage Items ,
                  </NavLink>

                  <NavLink
                    to="/AddItems"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Add Item ,
                  </NavLink>

                  <NavLink
                    to="/MyItems"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    My Items ,
                  </NavLink>


                  <button onClick={handelSignOut}>Sign Out</button>

                </div>
              ) :
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default Header;