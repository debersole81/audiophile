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
    const breakpoint = 761;

    if (width > breakpoint) {
        //Render desktop form
        return (
            <Form className='auth-form'>
                <Image src={audioPhileAlbumLogo} className='auth-form-logo' />
                <h3 className='auth-header'>Sign in to AudioPhile</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control name='username' placeholder='Enter your username' required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password*</Form.Label>
                    <Form.Control name='password' type='password' placeholder='Enter your password' required></Form.Control>
                </Form.Group>
                <Form.Row className='row auth-pw-form-row'>
                    <Col className='col auth-pw-link-col'>
                        <p>Forgot your password?</p>
                        <Button variant='link'>Reset password</Button>
                    </Col>
                </Form.Row>
                <Form.Row className='row auth-form-row'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' block>SIGN IN</Button>
                    </Col>
                    <Col className='col auth-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p>No AudioPhile account?</p>
                        <Button variant='link'>Sign up</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return (
        <Form className='auth-form-mobile'>
            <Image src={audioPhileAlbumLogo} className='auth-form-logo-mobile' />
            <h3 className='auth-header-mobile'>Sign in to AudioPhile</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control name='username' placeholder='Enter your username'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password*</Form.Label>
                <Form.Control name='password' type='password' placeholder='Enter your password'></Form.Control>
            </Form.Group>
            {(width > 370 && width < breakpoint) ?
                <Form.Row className='row auth-pw-form-row'>
                    <Col className='col auth-pw-link-col text-nowrap'>
                        <p>Forgot your password?</p>
                        <Button variant='link'>Reset password</Button>
                    </Col>
                </Form.Row>
                :
                <Form.Row className='row auth-pw-form-row-mobile'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='link' size='sm' block>Forgot password? Reset</Button>
                    </Col>
                </Form.Row>
            }
            <Form.Row className='row auth-form-row'>
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