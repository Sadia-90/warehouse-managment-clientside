import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';

import Home from './components/Home/Home/Home';
import Footer from './components/Home/Shared/Footer/Footer';

import Header from './components/Home/Shared/Header/Header';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Manageinventories from './components/Manageinventories/Manageinventories';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';


const App = () => {
  return (
    <div>
       <Header></Header>

      <Routes>
       
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/InventoryDetails" element=
        {
         <RequireAuth>
        <InventoryDetails></InventoryDetails>
        </RequireAuth>
        }
        ></Route>

        <Route path="/Manageinventories" element={<Manageinventories></Manageinventories>}></Route>

        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>


      
      </Routes>

      <Footer></Footer>
      
    </div>
  );
};

export default App;