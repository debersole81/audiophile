import React from "react";
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignIn() {
    return (
        <Form className='signin-form'>
            <h3 className='signin-header'>Sign in to AudioPhile</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control name='username' placeholder='Enter your username'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password*</Form.Label>
                <Form.Control name='password' type='password' placeholder='Enter your password'></Form.Control>
            </Form.Group>
            <Form.Row className='row signin-form-row'>
                <Col className='col' xl={12} lg={12} md={12} sm={12}>
                    <Button variant='dark' block>SIGN IN</Button>
                </Col>
                <Col className='col signin-link-col' xl={12} lg={12} md={12} sm={12}>
                    <p>No AudioPhile account?</p>
                    <Button variant='link'>Sign up</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default SignIn;