import React from 'react'
import "../App.css";
import audioPhileAlbumLogo from '../assets/audiophile-album-logo.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignUp(props) {

    /* #region Props destructure */
    const { onFormChange, signUp, formErrors } = props;
    /* #endregion Props destructure */

    /* #region Custom hooks */
    /** Implement custom hook to render mobile return at <= 761 px */
    //Destructure width variable from useViewPort hook
    const { width } = useViewPort();

    //Declare variable for minimum breakpoint value
    const breakpoint = 690;
    /* #endregion Custom hooks */

    if (width > breakpoint) {
        //Render desktop form    
        return (
            <Form className='authform'>
                <Image src={audioPhileAlbumLogo} className='authform-logo' />
                <h3 className='authform-header'>Create a new account</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                        name='username'
                        placeholder='Username'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.username}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.password}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address*</Form.Label>
                    <Form.Control
                        name='email'
                        placeholder='Email'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.email}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row className='row authform-row'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' onClick={signUp} block>CREATE ACCOUNT</Button>
                    </Col>
                    <Col className='col authform-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p>Have an account?</p>
                        <Button variant='link'>Sign In</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return (
        <Form className='authform-mobile'>
            <Image src={audioPhileAlbumLogo} className='authform-logo-mobile' />
            <h3 className='authform-header'>Create a new account</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control
                    name='username'
                    placeholder='Username'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.username}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.username}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password*</Form.Label>
                <Form.Control
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.password}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email Address*</Form.Label>
                <Form.Control
                    name='email'
                    placeholder='Email'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.email}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Row className='row authform-row'>
                <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='dark' size='sm' onClick={signUp} block>CREATE ACCOUNT</Button>
                </Col>
                <Col className='col mt-2' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='light' size='sm' block>RETURN TO SIGN IN</Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default SignUp;