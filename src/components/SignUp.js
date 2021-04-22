import React from 'react'
import "../App.css";
import audioPhileAlbumLogo from '../assets/audiophile-album-logo.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignUp() {

    return (
        <Form className='signin-form'>
            <Image src={audioPhileAlbumLogo} className='signin-form-logo' />
            <h3 className='signin-header'>Create a new account</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control name='username' placeholder='Username' required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password*</Form.Label>
                <Form.Control name='password' type='password' placeholder='Password' required></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email Address*</Form.Label>
                <Form.Control name='email' placeholder='Email' required></Form.Control>
            </Form.Group>
            <Form.Row className='row signin-form-row'>
                <Col className='col'>
                    <Button variant='dark' block>CREATE ACCOUNT</Button>
                </Col>
                <Col className='col signin-link-col'>
                    <p>Have an AudioPhile account?</p>
                    <Button variant='link'>Sign In</Button>
                </Col>
            </Form.Row>
        </Form>

    );
};

export default SignUp;