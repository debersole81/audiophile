import React from 'react';
import '../App.css';
import audioPhileAlbumLogo from '../assets/audiophile-album-logo.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignIn() {

    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 690;

    if (width > breakpoint) {
    //Render desktop form
        return (
            <Form className='signin-form'>
                <Image src={audioPhileAlbumLogo} className='signin-form-logo' />
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
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' block>SIGN IN</Button>
                    </Col>
                    <Col className='col signin-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p>No AudioPhile account?</p>
                        <Button variant='link'>Sign up</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return (
        <Form className='signin-form-mobile'>
            <Image src={audioPhileAlbumLogo} className='signin-form-logo-mobile' />
            <h3 className='signin-header-mobile'>Sign in to AudioPhile</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control name='username' placeholder='Enter your username'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password*</Form.Label>
                <Form.Control name='password' type='password' placeholder='Enter your password'></Form.Control>
            </Form.Group>
            <Form.Row className='row signin-form-row'>
                <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='dark' size='sm' block>SIGN IN</Button>
                </Col>
                <Col className='col mt-2' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='light' size='sm' block>SIGN UP</Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default SignIn;