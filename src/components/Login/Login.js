

import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        // loading,
        // error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate(from, {replace: true});
      }
    
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register')
    }

    const [
        SendPasswordResetEmail,
        // loading,
        // error,
      ] = useSendPasswordResetEmail(auth);

    const resetPassword = event =>{
        event.preventDefault();
       const email = emailRef.current.value;

       SendPasswordResetEmail(email); 
    }



    return (
        <div className='container w-50 mx-auto'>
            <h2>Please Login</h2>
          <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>all ready have an account? <Link to='/Register' className='text-danger' onClick={navigateRegister}>Please register</Link>
            </p>

            <p>Forget Password? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
          <SocialLogin></SocialLogin>

         
            
        </div>
    );
};

export default Login;