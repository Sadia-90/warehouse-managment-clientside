import React from 'react';
import { Form } from 'react-bootstrap';
import './CustomerReview.css'

const CustomerReview = () => {
    return (
        <div className='reviews'>
            <h3 className='text-center mt-3'>Feedback Part</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>

            <button className='btn-btn-primary'>Manage Inventories</button>
        </div>
    );
};

export default CustomerReview;