import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';

import Home from './components/Home/Home/Home';
import Footer from './components/Home/Shared/Footer/Footer';

import Header from './components/Home/Shared/Header/Header';

import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import CheckOut from './components/CheckOut/CheckOut'
import ServiceDetails from './components/Products/Inventory/ServiceDetails';

import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import MyItems from './components/MyItems/MyItems';
import AddItems from './components/AddItems/AddItems';
import ManageItems from './components/ManageItems/ManageItems';
import AddInventory from './components/AddInventory/AddInventory';
import AddService from './components/AddService/AddService';

import ManageInventory from './components/ManageInventory/ManageInventory';
import UpdateUser from './components/UpdateUser/UpdateUser';






const App = () => {
  return (
    <div>
       <Header></Header>

      <Routes>
       
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Shop/:id" element={
          <RequireAuth>
        <ServiceDetails></ServiceDetails>
        </RequireAuth>
        }></Route>
         
        <Route path="/ManageInventory" element={

         <RequireAuth>
        <ManageInventory></ManageInventory>
        </RequireAuth>

        }></Route>

        {/* <Route path="/Manageinventories" element={<AddInventory></AddInventory>}></Route> */}
        <Route path="/AddInventory" element={<AddInventory></AddInventory>}></Route>

        <Route path="/updateUser/:id" element={<UpdateUser></UpdateUser>}></Route>
        
        <Route path="/AddService" element={

        <RequireAuth> 

        <AddService></AddService>

        </RequireAuth>
        }
        >

        </Route>



        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/MyItems" element={<MyItems></MyItems>}></Route>
        <Route path="/AddItems" element={<AddItems></AddItems>}></Route>
        <Route path="/ManageItems" element={<ManageItems></ManageItems>}></Route>



        <Route path="/CheckOut" element={
        
        <RequireAuth>
        <CheckOut></CheckOut>
        
        </RequireAuth>
        
        }></Route>


        <Route path="*" element={<NotFound></NotFound>}></Route>


      
      </Routes>

      <Footer></Footer>
      
    </div>
  );
};

export default App;