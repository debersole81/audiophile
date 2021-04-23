import React from 'react';
import '../App.css';
import audioPhileLogoTextBlack from '../assets/audiophile-logo-text-black.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function ConfirmSignUp() {
    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 761;

    if (width > breakpoint) {
        //Render desktop form
        return (
            <Form className='authaccount-form'>
                <Image src={audioPhileLogoTextBlack} className='authaccount-logo' />
                <h3 className='authaccount-header'>Confirm your account</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control name='username' placeholder='Username state data' required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirmation Code*</Form.Label>
                    <Form.Control name='authCode' type='password' placeholder='Enter your code' required></Form.Control>
                </Form.Group>
                <Form.Row className='row authaccount-authcode-row'>
                    <Col className='col authaccount-authcode-col'>
                        <p>Lost your code?</p>
                        <Button variant='link'>Resend code</Button>
                    </Col>
                </Form.Row>
                <Form.Row className='row authaccount-link-row'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' block>CONFIRM</Button>
                    </Col>
                    <Col className='col authaccount-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='link' size='sm'>Return to sign in</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return ( null
        // <Form className='auth-form-mobile'>
        //     <Image src={audioPhileAlbumLogo} className='auth-form-logo-mobile' />
        //     <h3 className='auth-header-mobile'>Sign in to AudioPhile</h3>
        //     <Form.Group>
        //         <Form.Label>Username*</Form.Label>
        //         <Form.Control name='username' placeholder='Enter your username'></Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Password*</Form.Label>
        //         <Form.Control name='password' type='password' placeholder='Enter your password'></Form.Control>
        //     </Form.Group>
        //     {(width > 370 && width < breakpoint) ?
        //         <Form.Row className='row auth-pw-form-row'>
        //             <Col className='col auth-pw-link-col text-nowrap'>
        //                 <p>Forgot your password?</p>
        //                 <Button variant='link'>Reset password</Button>
        //             </Col>
        //         </Form.Row>
        //         :
        //         <Form.Row className='row auth-pw-form-row-mobile'>
        //             <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
        //                 <Button variant='link' size='sm' block>Forgot password? Reset</Button>
        //             </Col>
        //         </Form.Row>
        //     }
        //     <Form.Row className='row auth-form-row'>
        //         <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
        //             <Button variant='dark' size='sm' block>SIGN IN</Button>
        //         </Col>
        //         <Col className='col mt-2' xs={12} sm={12} md={12} lg={12} xl={12}>
        //             <Button variant='light' size='sm' block>SIGN UP</Button>
        //         </Col>
        //     </Form.Row>
        // </Form>
    );
};

export default ConfirmSignUp;