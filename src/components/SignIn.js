import React from 'react';
import '../App.css';
import audioPhileAlbumLogo from '../assets/audiophile-album-logo.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function SignIn(props) {

    /* #region Props destructure */
    const { onFormChange, signIn, formErrors, signUpLink, resetPasswordLink } = props.signInProps;
    /* #endregion Props destructure */

    console.log(formErrors);

    /* #region Custom hooks */
    /** Implement custom hook to render mobile return at <= 761 px */
    //Destructure width variable from useViewPort hook
    const { width } = useViewPort();

    //Declare variable for minimum breakpoint value
    const breakpoint = 761;
    /* #endregion Custom hooks */

    if (width > breakpoint) {
        //Render desktop form
        return (
            <Form className='authform'>
                <Image src={audioPhileAlbumLogo} className='authform-logo' />
                <h3 className='authform-header'>Sign in to AudioPhile</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                        name='username'
                        placeholder='Enter your username'
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
                        placeholder='Enter your password'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.password}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row className='row authform-pw-row'>
                    <Col className='col authform-pw-link-col'>
                        <p>Forgot your password?</p>
                        <Button variant='link' onClick={resetPasswordLink}>Reset password</Button>
                    </Col>
                </Form.Row>
                <Form.Row className='row authform-row'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' onClick={signIn} block>SIGN IN</Button>
                    </Col>
                    <Col className='col authform-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p>No AudioPhile account?</p>
                        <Button variant='link' onClick={signUpLink}>Sign up</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return (
        <Form className='authform-mobile'>
            <Image src={audioPhileAlbumLogo} className='authform-logo-mobile' />
            <h3 className='authform-header-mobile'>Sign in to AudioPhile</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control
                    name='username'
                    placeholder='Enter your username'
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
                    placeholder='Enter your password'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.password}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.password}
                </Form.Control.Feedback>
            </Form.Group>
            {(width > 370 && width < breakpoint) ?
                <Form.Row className='row authform-pw-row'>
                    <Col className='col authform-pw-link-col text-nowrap'>
                        <p>Forgot your password?</p>
                        <Button variant='link' onClick={resetPasswordLink}>Reset password</Button>
                    </Col>
                </Form.Row>
                :
                <Form.Row className='row authform-pw-row-mobile'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='link' size='sm' onClick={signIn} block>Forgot password? Reset</Button>
                    </Col>
                </Form.Row>
            }
            <Form.Row className='row authform-row'>
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