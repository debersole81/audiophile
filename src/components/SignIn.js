import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignIn() {
    return (
        <Container>
            <Form>
                <h3>Sign in to AudioPhile</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control name='username' placeholder='Enter your username'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password*</Form.Label>
                    <Form.Control name='password' type='password' placeholder='Enter your password'></Form.Control>
                </Form.Group>
                <Form.Row className='row'>
                    <Col className='col'>
                        <p>No AudioPhile account?</p>
                        <Button variant='link'>Sign up</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Container>
    );
}

export default SignIn;