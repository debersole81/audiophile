import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            </Form>
        </Container>
    );
}

export default SignIn;