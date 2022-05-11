import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    
    const navigate = useNavigate('');

    const navigateLogin = () =>{
        navigate('/Login')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
    const password = event.target.password.value;
    //    const name = event.target.name.value;
    //    const email = event.target.email.value;
    //    const password = event.target.password.value;
       console.log(name, email, password)
       
    }
    

    return (
        <div className='container w-50 mx-auto'>
            <h1>registration</h1>
            <form onSubmit={handleRegister}>
              <input type="text" name="name"  placeholder='Your Name'/>
              <br /><br />
              <input type="email" name="email"  placeholder='Your Email' required/>
              <br /><br />
              <input type="password" name="password"  placeholder='Your Password' required/>
              <br /><br />
              <input type="submit" value="Register" />
            </form>
            <p>new to cycle shop? <Link to='/Login' className='text-danger'  onClick={navigateLogin}>Please login</Link></p>
        </div>
    );
};

export default Register;