import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='bg-primary rounded p-20'>
            <div className='p-30 bg-white'>
            <h1 className='text-center'>login page</h1> 

<form className='text-center'>
    <input type="text" name='name' placeholder='Name' required />
    <br/><br/>
    <input type="text" name='email' placeholder='Email' required />
    <br/><br/>
    <input type="submit" value="submit" />
</form>
            </div>
        </div>
    );
};

export default Login;