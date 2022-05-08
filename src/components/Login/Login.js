import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h1>login page</h1> 
            <form action="">
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="text" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;